const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function () { })).to.equal('Error');
    });
    it('should return an error if "fullName" contains characters other than letters', () => {
        expect(formatFullname('Jo4n Doe')).to.equal('Error');
        expect(formatFullname('#@ >?')).to.equal('Error');
    });
    it('should return an error if "fullname" is longer or shorter than two words', () => {
        expect(formatFullname('john')).to.equal('Error');
        expect(formatFullname('john doe test')).to.equal('Error');
        expect(formatFullname('')).to.equal('Error');
    });
    it('should return an error if "firstName" or "Lastname" is shorter than two', () => {
        expect(formatFullname('j d')).to.equal('Error');
        expect(formatFullname('j doe')).to.equal('Error');
        expect(formatFullname('john d')).to.equal('Error');
    });
    it('should return "firstName and Lastname"', () => {
        expect(formatFullname('LOREM IPSUM')).to.equal('Lorem Ipsum');
        expect(formatFullname('lorem ipsum')).to.equal('Lorem Ipsum');
        expect(formatFullname('lOreM ipSUM')).to.equal('Lorem Ipsum');
    });
});