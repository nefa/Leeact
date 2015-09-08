import Fraction from './fraction';
import Config from '../config';

const OddsFormatters = {

  changeFormatEuToUs: function(oddsValue) {
    if (oddsValue === "EVEN") {
      return "2.00"; //TODO: how does this EVEN thing work
    } else {
      oddsValue = parseFloat(oddsValue);
      oddsValue -= 1.0;
      if ((Math.round(oddsValue * 100.0) / 100.0) === 1.00) {
        return "EVEN";
      } else if (oddsValue > 1.00) {
        return "" + Math.round(oddsValue * 100);
      } else if (oddsValue === 0) {
        return "";
      } else {
        return "-" + Math.round(100 / oddsValue);
      }
    }
  },

  changeFormatEuToUk: function(odds) {
    var even, oddsStr;
    even = "Evens";
    if (odds < 1.01) {
      odds = 1.01;
    }
    oddsStr = "";
    if ((Math.round(odds * 100.0) / 100.0) === 2.00) {
      oddsStr = even;
    } else if (odds < 20.0) {
      oddsStr = approximateOdds(odds);
    } else {
      oddsStr = new Fraction(Math.round(odds) - 1, 1).fractionToString();
    }
    return oddsStr;
  },

  changeFormatEuToMa: function(oddsValue) {
    var malayOdds;
    malayOdds = oddsValue - 1;
    if (oddsValue > 1.9999999) {
      if (oddsValue === 2) {
        malayOdds = 1;
      } else {
        malayOdds = 1 / (1 - oddsValue);
      }
    }
    return malayOdds.toFixed(2);
  },

  changeFormatEuToIn: function(oddsValue) {
    var inOdds;
    inOdds = oddsValue - 1;
    if (oddsValue <= 1.9999999) {
      inOdds = 1 / (1 - oddsValue);
    }
    return inOdds.toFixed(2);
  },

  commaFormatted: function(amount) {
    var a, d, delimiter, i, minus, n, nn;
    amount = "" + amount;
    delimiter = ",";
    a = amount.split(".", 2);
    d = a[1];
    i = parseInt(a[0]);
    if (isNaN(i)) {
      return "";
    }
    minus = "";
    if (i < 0) {
      minus = "-";
    }
    i = Math.abs(i);
    n = new String(i);
    a = [];
    while (n.length > 3) {
      nn = n.substr(n.length - 3);
      a.unshift(nn);
      n = n.substr(0, n.length - 3);
    }
    if (n.length > 0) {
      a.unshift(n);
    }
    n = a.join(delimiter);
    if ((d == null) || d.length < 1) {
      amount = n;
    } else {
      amount = n + "." + d;
    }
    amount = minus + amount;
    return amount;
  },

  approximateOdds: function(odds) {
    var diff, diffBefore, fractionsNo, i;
    odds = odds - 1.00;
    if (odds < validFractions[0].fractionToDouble()) {
      return validFractions[0].fractionToString();
    }
    diff = 0;
    diffBefore = 0;
    fractionsNo = validFractions.length;
    i = 0;
    while (i < fractionsNo) {
      i++;
      if (odds > validFractions[i].fractionToDouble()) {
        continue;
      }
      diff = validFractions[i].fractionToDouble() - odds;
      diffBefore = odds - validFractions[i - 1].fractionToDouble();
      if (diff < diffBefore) {
        return validFractions[i].fractionToString();
      } else {
        return validFractions[i - 1].fractionToString();
      }
    }
    return "";
  }
}

const validFractions = new Array(new Fraction(1, 10000), new Fraction(1, 5000),
  new Fraction(1, 4000), new Fraction(1, 2500), new Fraction(1, 2000),
  new Fraction(1, 1500), new Fraction(1, 1250), new Fraction(1, 1000),
  new Fraction(1, 500), new Fraction(1, 400), new Fraction(1, 300),
  new Fraction(1, 250), new Fraction(1, 200), new Fraction(1, 150),
  new Fraction(1, 125), new Fraction(1, 100), new Fraction(1, 80),
  new Fraction(1, 66), new Fraction(1, 60), new Fraction(1, 50),
  new Fraction(1, 40), new Fraction(1, 33), new Fraction(1, 30),
  new Fraction(1, 28), new Fraction(1, 25), new Fraction(1, 22),
  new Fraction(1, 20), new Fraction(1, 19), new Fraction(1, 18),
  new Fraction(1, 16), new Fraction(1, 15), new Fraction(1, 14),
  new Fraction(1, 13), new Fraction(1, 12), new Fraction(1, 11),
  new Fraction(1, 10), new Fraction(1, 9), new Fraction(2, 17),
  new Fraction(1, 8), new Fraction(2, 15), new Fraction(7, 50),
  new Fraction(1, 7), new Fraction(2, 13), new Fraction(1, 6),
  new Fraction(2, 11), new Fraction(1, 5), new Fraction(2, 9),
  new Fraction(1, 4), new Fraction(2, 7), new Fraction(29, 100),
  new Fraction(3, 10), new Fraction(1, 3), new Fraction(7, 20),
  new Fraction(4, 11), new Fraction(2, 5), new Fraction(4, 9),
  new Fraction(9, 20), new Fraction(8, 17), new Fraction(1, 2),
  new Fraction(8, 15), new Fraction(4, 7), new Fraction(3, 5),
  new Fraction(8, 13), new Fraction(11, 18), new Fraction(13, 21),
  new Fraction(5, 8), new Fraction(4, 6), new Fraction(20, 29),
  new Fraction(7, 10), new Fraction(5, 7), new Fraction(8, 11),
  new Fraction(3, 4), new Fraction(4, 5), new Fraction(5, 6),
  new Fraction(7, 8), new Fraction(9, 10), new Fraction(10, 11),
  new Fraction(20, 21), new Fraction(21, 20), new Fraction(11, 10),
  new Fraction(9, 8), new Fraction(6, 5), new Fraction(5, 4),
  new Fraction(13, 10), new Fraction(11, 8), new Fraction(7, 5),
  new Fraction(6, 4), new Fraction(8, 5), new Fraction(13, 8),
  new Fraction(17, 10), new Fraction(7, 4), new Fraction(9, 5),
  new Fraction(15, 8), new Fraction(187, 100), new Fraction(19, 10),
  new Fraction(2, 1), new Fraction(21, 10), new Fraction(17, 8),
  new Fraction(11, 5), new Fraction(9, 4), new Fraction(23, 10),
  new Fraction(19, 8), new Fraction(12, 5), new Fraction(5, 2),
  new Fraction(13, 5), new Fraction(21, 8), new Fraction(11, 4),
  new Fraction(14, 5), new Fraction(23, 8), new Fraction(3, 1),
  new Fraction(61, 20), new Fraction(25, 8), new Fraction(16, 5),
  new Fraction(13, 4), new Fraction(10, 3), new Fraction(27, 8),
  new Fraction(7, 2), new Fraction(18, 5), new Fraction(29, 8),
  new Fraction(15, 4), new Fraction(31, 8), new Fraction(4, 1),
  new Fraction(17, 4), new Fraction(9, 2), new Fraction(19, 4),
  new Fraction(5, 1), new Fraction(21, 4), new Fraction(11, 2),
  new Fraction(6, 1), new Fraction(25, 4), new Fraction(13, 2),
  new Fraction(27, 4), new Fraction(7, 1), new Fraction(29, 4),
  new Fraction(15, 2), new Fraction(31, 4), new Fraction(8, 1),
  new Fraction(33, 4), new Fraction(17, 2), new Fraction(35, 4),
  new Fraction(9, 1), new Fraction(19, 2), new Fraction(10, 1),
  new Fraction(21, 2), new Fraction(11, 1), new Fraction(23, 2),
  new Fraction(12, 1), new Fraction(25, 2), new Fraction(13, 1),
  new Fraction(27, 2), new Fraction(14, 1), new Fraction(29, 2),
  new Fraction(15, 1), new Fraction(16, 1), new Fraction(17, 1),
  new Fraction(18, 1), new Fraction(19, 1), new Fraction(20, 1));

const OddsFormatList = {
  'EU': 'EU'
}

export default {

  formatOddsValue(oddsValue) {
    var numberOfDecimals, oddsValue, format, special, numberOfDecimals, oddsValue;

    const unsafeOddsValue = parseFloat(oddsValue);

    if (format == null) {
      format = OddsFormatList[Config.defaultOddsFormat] || OddsFormatList.EU;
    }
    if (special == null) {
      special = false;
    }
    numberOfDecimals = 2;
    oddsValue = parseFloat(unsafeOddsValue);
    if (!oddsValue) {
      return unsafeOddsValue;
    }
    if (format === OddsFormatList.EU) {
      if (!special) {
        return oddsValue.toFixed(numberOfDecimals);
      } else {
        return OddsFormatters.commaFormatted(oddsValue);
      }
    }
    if (format === OddsFormatList.UK) {
      return OddsFormatters.changeFormatEuToUk(oddsValue);
    }
    if (format === OddsFormatList.US) {
      return OddsFormatters.changeFormatEuToUs(oddsValue);
    }
    if (format === OddsFormatList.MA) {
      return OddsFormatters.changeFormatEuToMa(oddsValue);
    }
    if (format === OddsFormatList.IN) {
      return OddsFormatters.changeFormatEuToIn(oddsValue);
    }
    if (format === OddsFormatList.HK) {
      return (oddsValue - 1).toFixed(numberOfDecimals);
    }
  }

}
