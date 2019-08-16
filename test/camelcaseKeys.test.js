const assert = require('assert');
const { camelcaseKeys } = require('../src');

describe("camelcase keys", function() {
  it("should be camelcase keys ok", function() {
    const a = {
      b: {
        hello_world: 'hello_world'
      }
    };
    const result = camelcaseKeys(a, { deep: true });
    assert.deepEqual(result, {
      b: {
        helloWorld: 'hello_world'
      }
    });
  });
});
