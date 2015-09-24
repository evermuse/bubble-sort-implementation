var expect = chai.expect;
var should = chai.should();

describe('bubbleSort', function() {

  it('should be a function', function() {

    bubbleSort.should.be.a('function');

  });

  it('should take in an array as an argument and have two properties: currentLowest and compareValue', function() {

    bubbleSort.should.have.property('inputArray');
    expect(inputArray).to.be.an('array');
    bubbleSort.should.have.property('currentLowest');
    bubbleSort.should.have.property('currentLowest');

  });

  it('return the array in sorted order', function() {

    expect(bubbleSort([5,2,7,4])).to.deep.equal([2,4,5,7]);

  });

});