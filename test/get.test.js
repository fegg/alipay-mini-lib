const assert = require('assert');
const { get } = require('../src');

describe('getValue', function() {
  describe('get no options', function() {
    it('should be get fail', function() {
      const a = {
        b: {
          c: 'ccc',
        },
      };
      const result = get(a, 'b.c.d');

      assert.equal(result, undefined);
    });

    it('should be get ok', function() {
      const a = {
        b: {
          c: {
            d: {
              f: 'fff',
            },
          },
        },
      };
      const result = get(a, 'b.c.d.f');

      assert.equal(result, 'fff');
    });
  });
});
