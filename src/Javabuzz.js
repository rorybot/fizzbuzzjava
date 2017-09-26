// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };


var Javabuzz = function () {};

Javabuzz.prototype._isDivisibleBy = function(number,divisor) {
  return(number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByThree = function (number) {
  return this._isDivisibleBy(number,3);
};

Javabuzz.prototype.isDivisibleByFive = function (number) {
  return this._isDivisibleBy(number,5);
};

Javabuzz.prototype.isDivisibleByFifteen = function (number) {
  return this._isDivisibleBy(number,15);
};

Javabuzz.prototype.says = function (number) {
  if (this.isDivisibleByThree(number)){
    return "Java";
  }
};

//
//
//
// def fizzbuzz(number)
//
// divis_by_3 = number%3 == 0
// divis_by_5 = number%5 == 0
//
//
//   if divis_by_3 && divis_by_5
//     'fizzbuzz'
//   elsif divis_by_3
//     'fizz'
//   elsif divis_by_5
//     'buzz'
//   else number
//   end
//
// end
