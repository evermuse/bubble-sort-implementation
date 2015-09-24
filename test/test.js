var expect = chai.expect;
var should = chai.should();

describe('bubbleSort', function() {

  it('should be a function', function() {

    bubbleSort.should.be.a('function');

  });

  it('should take in an array as an argument', function() {

    expect(bubbleSort.bind('string')).to.throw(Error);
    expect(bubbleSort.bind(42)).to.throw(Error);
    expect(bubbleSort.bind(undefined)).to.throw(Error);
    expect(bubbleSort.bind(null)).to.throw(Error);

  });

  it('return the array in sorted order', function() {

    expect(bubbleSort([5,2,7,4])).to.eql([2,4,5,7]);

  });

});