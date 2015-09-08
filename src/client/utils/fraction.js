export default (function() {
  function Fraction(_enumerator, _denominator) {
    this._enumerator = _enumerator;
    this._denominator = _denominator;
  }

  Fraction.prototype.fractionAdd = function(i) {
    return this._enumerator += i * this._denominator;
  };

  Fraction.prototype.fractionMultiply = function(i) {
    return this._enumerator *= i;
  };

  Fraction.prototype.fractionInverse = function() {
    var m;
    m = this._enumerator;
    this._enumerator = this._denominator;
    return this._denominator = m;
  };

  Fraction.prototype.fractionToString = function() {
    return "" + this._enumerator + "/" + this._denominator;
  };

  Fraction.prototype.fractionToDouble = function() {
    return this._enumerator / this._denominator;
  };

  Fraction.prototype.fractionApproximateWithPrecision = function(number, precision) {
    var frac, negative;
    negative = false;
    if (number < 0) {
      negative = true;
      number = -number;
    }
    if (number === 0) {
      return new Fraction(0, 1);
    }
    frac = this.fractionApprox(number * (1 - precision), number * (1 + precision));
    if (negative) {
      frac.multiply(-1);
    }
    return frac;
  };

  Fraction.prototype.fractionApproximate = function(number, max_denominator) {
    return this.fractionApprox(number - (0.5 / max_denominator), number + (0.5 / max_denominator));
  };

  Fraction.prototype.fractionApprox = function(min, max) {
    var frac, integer;
    if (max <= min) {
      alert("min > max in Fraction.approx");
    }
    if (Math.ceil(min) <= Math.floor(max)) {
      return new Fraction(Math.round(Math.ceil(min)), 1);
    }
    integer = Math.round(Math.floor(min));
    frac = this.fractionApprox(1 / (max - integer), 1 / (min - integer));
    frac.inverse();
    frac.add(integer);
    return frac;
  };

  return Fraction;

})();
