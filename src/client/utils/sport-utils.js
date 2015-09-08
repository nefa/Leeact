export default {

  /*
   * Returns the default betting type and event part given a sport.
   * TODO: this method is just a temporary hack to have route transitions to some
   * sensible defaults. Will be replaced with a proper solution once the backend
   * is modified to provide this data.
   */
  getDefaultBettingTypeAndEventPart(sportId) {
    switch (sportId) {
      case  1: return { defaultBettingType: 69, defaultEventPart:   3 };
      case  3: return { defaultBettingType: 70, defaultEventPart:  20 };
      case  5: return { defaultBettingType: 70, defaultEventPart:  30 };
      case  6: return { defaultBettingType: 70, defaultEventPart:  40 };
      case  7: return { defaultBettingType: 48, defaultEventPart:  51 };
      case  8: return { defaultBettingType: 70, defaultEventPart:  60 };
      case  9: return { defaultBettingType: 70, defaultEventPart:  70 };
      case 11: return { defaultBettingType: 70, defaultEventPart: 100 };
      case 20: return { defaultBettingType: 70, defaultEventPart: 110 };
      case 22: return { defaultBettingType: 69, defaultEventPart: 121 };
      case 25: return { defaultBettingType: 69, defaultEventPart: 130 };
      case 26: return { defaultBettingType: 47, defaultEventPart: 230 };
      case 28: return { defaultBettingType: 69, defaultEventPart: 141 };
      case 36: return { defaultBettingType: 70, defaultEventPart: 260 };
      case 38: return { defaultBettingType: 70, defaultEventPart: 350 };
      case 39: return { defaultBettingType: 69, defaultEventPart: 151 };
      case 47: return { defaultBettingType: 69, defaultEventPart: 191 };
      case 63: return { defaultBettingType: 70, defaultEventPart: 240 };
      case 64: return { defaultBettingType: 70, defaultEventPart: 210 };
      case 76: return { defaultBettingType: 70, defaultEventPart: 601 };
      case 86: return { defaultBettingType: 69, defaultEventPart:   3 };
      case 89: return { defaultBettingType: 70, defaultEventPart: 587 };
      case 90: return { defaultBettingType: 70, defaultEventPart: 600 };

      // Tournament or winner only? Go to Winner (7) + Whole event (1)
      default: return { defaultBettingType:  7, defaultEventPart:   1 };
    }
  }
}