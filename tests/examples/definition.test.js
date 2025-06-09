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
})
