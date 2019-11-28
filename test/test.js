const should = require('chai').should();
const mainFilter = require('../functions/filterData')
const mainCount = require('../functions/countData')
const mainData = require('../data')

describe('filter', function () {
    it('The data file exists and is not empty', function () {
        mainData.should.exist.and.not.be.empty;
    });
    it('filterData return a non empty object', function () {
        mainFilter.filterData('gazelle').should.not.be.empty;
        mainFilter.filterData('gazelle').should.be.a('array');
    });
})

describe('count', function () {
    it('Should return a non empty object', function () {
        mainCount.countData().should.not.be.empty;
        mainCount.countData().should.be.a('array');
    });
})