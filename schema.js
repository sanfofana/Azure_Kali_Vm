module.exports = null;

/**
 * If you want to use a schema,
 * you need to include the following:
module.exports = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
  },
  required: ['foo'],
  additionalProperties: false,
};
*/