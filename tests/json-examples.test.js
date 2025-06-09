import assert from 'node:assert'
import { createRequire } from 'node:module'
import { describe, it } from 'node:test'

import Ajv from 'ajv/dist/2020.js'
import addFormats from 'ajv-formats'

const require = createRequire(import.meta.url)

const definitionSchemas = {
  pack: require('../docs/definitions/schemas/pack.schema.json'),
  packLocalization: require('../docs/definitions/schemas/pack-localization.schema.json'),
  song: require('../docs/definitions/schemas/song.schema.json'),
}

const defV5Schemas = {
  pack: require('../docs/data-exchange-format/v5/schemas/pack.schema.json'),
}

function validateJson(ajv, schema, data) {
  const validate = ajv.compile(schema)
  const valid = validate(data)

  if (!valid) {
    assert.deepStrictEqual(validate.errors, null)
  }
}

const ajvDefinitions = new Ajv({
  allErrors: true,
  schemas: Object.values(definitionSchemas),
})
addFormats(ajvDefinitions)

const ajvDefV5 = new Ajv({
  allErrors: true,
  schemas: Object.values(defV5Schemas),
})
addFormats(ajvDefV5)

describe('definition examples', () => {
  const _validate = (schema, data) => validateJson(ajvDefinitions, schema, data)

  it('pack.json', () => {
    _validate(
      definitionSchemas.pack,
      require('../docs/definitions/examples/pack.json')
    )
  })

  it('pack-localization.json', () => {
    _validate(
      definitionSchemas.packLocalization,
      require('../docs/definitions/examples/pack-localization.json')
    )
  })

  it('song.json', () => {
    _validate(
      definitionSchemas.song,
      require('../docs/definitions/examples/song.json')
    )
  })
})

describe('data exchange format v5 examples', () => {
  const _validate = (schema, data) => validateJson(ajvDefV5, schema, data)

  it('pack.json', () => {
    _validate(
      defV5Schemas.pack,
      require('../docs/data-exchange-format/v5/examples/pack.json')
    )
  })
})
