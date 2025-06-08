import { promises as fs } from 'fs'
import { compareColors, stringToColor } from '@iconify/utils/lib/colors'
import {
  cleanupSVG,
  parseColors,
  isEmptyColor,
  runSVGO,
  deOptimisePaths,
  importDirectory,
} from '@iconify/tools'

async function buildAo() {
  const source = 'docs/assets/icons'
  const prefix = 'ao'
  const target = '@private-icons/ao/icons.json'

  // Load icon set
  const iconSet = await importDirectory(source, {
    prefix,
    ignoreImportErrors: 'warn',
  })

  // Parse all icons
  await iconSet.forEach((name, type) => {
    if (name.includes('-inkscape')) {
      return
    }

    if (type !== 'icon') {
      // Do not parse aliases
      return
    }

    // Get SVG instance for icon
    const svg = iconSet.toSVG(name)

    // Clean up and validate icon
    // This will throw an exception if icon is invalid
    cleanupSVG(svg)

    // Change color to `currentColor`
    const blackColor = stringToColor('black')
    const whiteColor = stringToColor('white')
    parseColors(svg, {
      defaultColor: 'currentColor',
      callback: (attr, colorStr, color) => {
        if (!color) {
          // Color cannot be parsed!
          throw new Error(`Invalid color: "${colorStr}" in attribute ${attr}`)
        }

        if (isEmptyColor(color)) {
          // Color is empty: 'none' or 'transparent'. Return as is
          return color
        }

        // Change black to 'currentColor'
        if (compareColors(color, blackColor)) {
          return 'currentColor'
        }

        // Remove shapes with white color
        if (compareColors(color, whiteColor)) {
          return 'remove'
        }

        // Keep currentColor as is
        if (color.type === 'current') {
          return color
        }

        throw new Error(`Unexpected color "${colorStr}" in attribute ${attr}`)
      },
    })

    // Optimise
    runSVGO(svg)

    // Update paths for compatibility with old software
    deOptimisePaths(svg)

    // SVG instance is detached from icon set, so changes to
    // icon are not stored in icon set automatically.

    // Update icon in icon set
    iconSet.fromSVG(name, svg)
  })

  // Save icon set
  const iconSetContent = iconSet.export()
  await fs.writeFile(target, JSON.stringify(iconSetContent), 'utf8')
}

;(async () => {
  await buildAo
})()
