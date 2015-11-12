const machineId = require('../index.js')

describe('machineId', function () {
    it('should be an integer', function () {
        machineId().should.be.type('number');
    });
    it('should be a non-zero value', function () {
        machineId().should.be.above(0);
    });
});
