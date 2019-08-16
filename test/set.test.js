const assert = require('assert');
const { set } = require('../src');

describe('setValue', function() {
  describe('set no options', function() {
    it('should be set ok', function() {
      const a = {};
      set(a, 'b.c.d', 'ddd');

      assert.deepEqual(a, {
        b: {
          c: {
            d: 'ddd',
          },
        },
      });
    });
  });
});
