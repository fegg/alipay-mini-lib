const assert = require('assert');
const { camelcase } = require('../src');

describe("camelcase", function() {
  it("should be camelcase ok", function() {
    const a = {
      b: {
        hello_world: 'hello_world'
      }
    };
    const result = camelcase(JSON.stringify(a));

    assert.equal(result, JSON.stringify({
      b: {
        helloWorld: 'helloWorld'
      }
    }));
  });
});
