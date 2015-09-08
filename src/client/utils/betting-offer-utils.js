const _bettingOfferStatusIds = {
  STANDARD_ID: 1,
  STARTING_PRICE_ID: 2,
  NON_PARTICIPANT_ID: 3
  // add others as needed
};

export default {

  isBettingOfferVisible(bettingOffer) {
    return bettingOffer.statusId < 4;
  },

  hasStandardStatus(bettingOffer) {
    return bettingOffer.statusId === _bettingOfferStatusIds.STANDARD_ID;
  },

  hasNonParticipantStatus(bettingOffer) {
    return bettingOffer.statusId === _bettingOfferStatusIds.NON_PARTICIPANT_ID;
  },

  hasStartingPriceStatus(bettingOffer) {
    return bettingOffer.statusId === _bettingOfferStatusIds.STARTING_PRICE_ID;
  }

};
