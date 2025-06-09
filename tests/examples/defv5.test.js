import { createRequire } from 'node:module'
import { describe, it } from 'node:test'

import Ajv from 'ajv/dist/2020.js'
import addFormats from 'ajv-formats'

import { ajvOptions, validateJson } from './shared.js'

const require = createRequire(import.meta.url)

const schemas = {
  pack: require('../../docs/data-exchange-format/v5/schemas/pack.schema.json'),
  packLocalization: require('../../docs/data-exchange-format/v5/schemas/pack-localization.schema.json'),
}

const ajv = new Ajv({
  ...ajvOptions,
  schemas: Object.values(schemas),
})
addFormats(ajv)

describe('data exchange format v5 examples', () => {
  const validate = (schema, data) => validateJson(ajv, schema, data)

  it('pack.json', () => {
    validate(
      schemas.pack,
      require('../../docs/data-exchange-format/v5/examples/pack.json')
    )
  })

  it('pack-localization.json', () => {
    validate(
      schemas.packLocalization,
      require('../../docs/data-exchange-format/v5/examples/pack-localization.json')
    )
  })
})
