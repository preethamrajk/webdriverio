const assert = require('assert')

describe('Jasmine smoke test', () => {
    it('should return sync value', () => {
        expect(browser.getTitle()).toBe('Mock Page Title')
    })

    let hasRun = false
    it('should retry', function () {
        if (!hasRun) {
            hasRun = true
            assert.equal(this.wdioRetries, 0)
            throw new Error('booom!')
        }

        assert.equal(this.wdioRetries, 1)
    }, 1)
})
