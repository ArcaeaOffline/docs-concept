import fs from 'node:fs'

const icons = JSON.parse(fs.readFileSync('./icons.json', 'utf-8'))
const info = { prefix: 'ao' }

exports.icons = icons
exports.info = info
