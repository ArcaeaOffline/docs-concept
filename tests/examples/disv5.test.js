import { createRequire } from 'node:module'
import { describe, it } from 'node:test'

import Ajv from 'ajv'
import addFormats from 'ajv-formats'

import { ajvOptions, validateJson } from './shared.js'

const require = createRequire(import.meta.url)

const schemas = {
  shared: require('../../docs/data-interchange-schemas/v5/schemas/shared.json'),
  pack: require('../../docs/data-interchange-schemas/v5/schemas/pack.json'),
  packLocalization: require('../../docs/data-interchange-schemas/v5/schemas/pack-localization.json'),
  song: require('../../docs/data-interchange-schemas/v5/schemas/song.json'),
  songLocalization: require('../../docs/data-interchange-schemas/v5/schemas/song-localization.json'),
  difficulty: require('../../docs/data-interchange-schemas/v5/schemas/difficulty.json'),
  difficultyLocalization: require('../../docs/data-interchange-schemas/v5/schemas/difficulty-localization.json'),
  chartInfo: require('../../docs/data-interchange-schemas/v5/schemas/chart-info.json'),
  playResult: require('../../docs/data-interchange-schemas/v5/schemas/play-result.json'),
}

const ajv = new Ajv({
  ...ajvOptions,
  schemas: Object.values(schemas),
})
addFormats(ajv)

describe('data interchange schemas v5 examples', () => {
  const validate = (schema, data) => validateJson(ajv, schema, data)

  it('pack.json', () => {
    validate(
      schemas.pack,
      require('../../docs/data-interchange-schemas/v5/examples/pack.json')
    )
  })

  it('pack-localization.json', () => {
    validate(
      schemas.packLocalization,
      require('../../docs/data-interchange-schemas/v5/examples/pack-localization.json')
    )
  })

  it('song.json', () => {
    validate(
      schemas.song,
      require('../../docs/data-interchange-schemas/v5/examples/song.json')
    )
  })

  it('song-localization.json', () => {
    validate(
      schemas.songLocalization,
      require('../../docs/data-interchange-schemas/v5/examples/song-localization.json')
    )
  })

  it('difficulty.json', () => {
    validate(
      schemas.difficulty,
      require('../../docs/data-interchange-schemas/v5/examples/difficulty.json')
    )
  })

  it('difficulty-localization.json', () => {
    validate(
      schemas.difficultyLocalization,
      require('../../docs/data-interchange-schemas/v5/examples/difficulty-localization.json')
    )
  })

  it('chart-info.json', () => {
    validate(
      schemas.chartInfo,
      require('../../docs/data-interchange-schemas/v5/examples/chart-info.json')
    )
  })

  it('play-result.json', () => {
    validate(
      schemas.playResult,
      require('../../docs/data-interchange-schemas/v5/examples/play-result.json')
    )
  })
})
