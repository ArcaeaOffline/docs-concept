import assert from 'node:assert'
import { createRequire } from 'node:module'
import { describe, it } from 'node:test'

import Ajv from 'ajv/dist/2020.js'

const require = createRequire(import.meta.url)

const schemas = {
  pack: require('../docs/definitions/schemas/pack.schema.json'),
  packLocalization: require('../docs/definitions/schemas/pack-localization.schema.json'),
}

const ajv = new Ajv({ schemas: Object.values(schemas) })

function _validate(schema, data) {
  const validate = ajv.compile(schema)
  const valid = validate(data)

  if (!valid) {
    assert.deepStrictEqual(validate.errors, null)
  }
}

describe('definition examples', () => {
  it('pack.json', () => {
    _validate(
      schemas.pack,
      require('../docs/definitions/examples/pack.json')
    )
  })

  it('pack-localization.json', () => {
    _validate(
      schemas.packLocalization,
      require('../docs/definitions/examples/pack-localization.json')
    )
  })
})
