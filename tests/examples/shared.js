import assert from 'node:assert'

import betterAjvErrors from 'better-ajv-errors'

/**
 * @import Ajv from "ajv/dist/2020.js"
 */

/**
 * @type {import("ajv").Options}
 */
export const ajvOptions = {
  allErrors: true,
  strict: true,
}

/**
 * @param {Ajv} ajv Ajv
 */
export function validateJson(ajv, schema, data) {
  const validate = ajv.compile(schema)
  const valid = validate(data)

  if (!valid) {
    assert.fail(betterAjvErrors(schema, data, validate.errors))
  }
}
