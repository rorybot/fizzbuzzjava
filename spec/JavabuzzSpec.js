describe('Javabuzz', function() {

  var javabuzz;
  // why do we declare this up here? don't we describe what we're testing below?
  // do we have to declare it here so that we can then assign it below?

  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

  });


  describe('knows when a number is NOT', function(){

    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

  });


  describe('knows when a number is', function(){
    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(10)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(11)).toBe(false);
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(30)).toBe(true)
    });
  });


  describe('knows when a number is NOT', function(){
    it('divisible by 15', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFifteen(31)).toBe(false)
    });
  });


  describe('returns Java when a number is',function(){
    it('divisible by 3', function(){
      expect(javabuzz.says(3)).toEqual('Java');
    });
  });


});

// require 'fizzbuzz'
//
//
// describe 'fizzbuzz' do
//
//     it 'returns "fizz" when pass multiple of 3' do
//       expect(fizzbuzz(3)).to eq 'fizz'
//     end
//
//     it 'returns "buzz" when pass multiple of 5' do
//       expect(fizzbuzz(5)).to eq 'buzz'
//     end
//
//
// fizzbuzzers = [15,30,45,60,75,90,105]
//   fizzbuzzers.each{ |i|
//     it 'returns "fizzbuzz" when passed multiple of 3 and 5' do
//       expect(fizzbuzz(i)).to eq 'fizzbuzz'
//     end
// }
//
//
// values = [1,2,4,7,8,11,13,14]
//   values.each{|i|
//       it 'returns #{i} when passed anything but 3' do
//
//       expect(fizzbuzz(i)).to eq i
//         end
//       }
//
// end
//
