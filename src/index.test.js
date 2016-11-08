import foo from './index'

// This fails:
import assert from 'assert'

// While this works:
//const assert = require('assert')

describe('foo', () => {
  it('should do stuff', () => {
    assert.equal(1, 1)
  })
})
