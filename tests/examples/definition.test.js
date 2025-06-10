import { createRequire } from 'node:module'
import { describe, it } from 'node:test'

import Ajv from 'ajv/dist/2020.js'
import addFormats from 'ajv-formats'

import { ajvOptions, validateJson } from './shared.js'

const require = createRequire(import.meta.url)

const schemas = {
  pack: require('../../docs/definitions/schemas/pack.schema.json'),
  packLocalization: require('../../docs/definitions/schemas/pack-localization.schema.json'),
  song: require('../../docs/definitions/schemas/song.schema.json'),
  songLocalization: require('../../docs/definitions/schemas/song-localization.schema.json'),
  difficulty: require('../../docs/definitions/schemas/difficulty.schema.json'),
  difficultyLocalization: require('../../docs/definitions/schemas/difficulty-localization.schema.json'),
  chartInfo: require('../../docs/definitions/schemas/chart-info.schema.json'),
  playResult: require('../../docs/definitions/schemas/play-result.schema.json'),
}

const ajv = new Ajv({
  ...ajvOptions,
  schemas: Object.values(schemas),
})
addFormats(ajv)

describe('definition examples', () => {
  const validate = (schema, data) => validateJson(ajv, schema, data)

  it('pack.json', () => {
    validate(schemas.pack, require('../../docs/definitions/examples/pack.json'))
  })

  it('pack-localization.json', () => {
    validate(
      schemas.packLocalization,
      require('../../docs/definitions/examples/pack-localization.json')
    )
  })

  it('song.json', () => {
    validate(schemas.song, require('../../docs/definitions/examples/song.json'))
  })

  it('song-localization.json', () => {
    validate(
      schemas.songLocalization,
      require('../../docs/definitions/examples/song-localization.json')
    )
  })

  it('difficulty.json', () => {
    validate(
      schemas.difficulty,
      require('../../docs/definitions/examples/difficulty.json')
    )
  })

  it('difficulty-localization.json', () => {
    validate(
      schemas.songLocalization,
      require('../../docs/definitions/examples/difficulty-localization.json')
    )
  })

  it('chart-info.json', () => {
    validate(
      schemas.chartInfo,
      require('../../docs/definitions/examples/chart-info.json')
    )
  })

  it('play-result.json', () => {
    validate(
      schemas.playResult,
      require('../../docs/definitions/examples/play-result.json')
    )
  })
})
