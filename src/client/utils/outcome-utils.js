import BettingTypeUtils from "../utils/betting-type-utils";
import EventPartUtils from "../utils/event-part-utils";

const _outcomeTypes = {
  HANDICAP_WINNER: 15,
  HANDICAP_DRAW: 16,
  WINNER: 10,
  DRAW: 11,
  GAME_HANDICAP_WINNER: 17,
  GAME_HANDICAP_DRAW: 18,
  CORNER_HANDICAP_WINNER: 135,
  CORNER_HANDICAP_DRAW: 136,
  SET_HANDICAP_WINNER: 50,
  GAME_SCORE: 176,
  GAME_WINNER: 114,
  FIRST_TO_WIN_X_GAMES: 94,
  QUALIFICATION: 49,
  NEXT_TEAM_TO_SCORE_WITH_MONEY_BACK_ON_NO_GOAL: 122,
  TEAM_NOT_TO_BE_SCORED_AGAINST: 119,
  TO_WIN_BOTH_HALVES: 105,
  TO_WIN_EITHER_HALF: 106,
  TO_WIN_TO_NIL: 107,
  TO_SCORE_IN_BOTH_HALVES: 137,
  LAST_TEAM_TO_SCORE_WITH_MONEY_BACK_ON_NO_GOAL: 146,
  COME_FROM_BEHIND_AND_WIN: 147,
  COME_FROM_BEHIND_AND_DRAW: 148,
  COME_FROM_BEHIND_AND_WIN_OR_DRAW: 149,
  KICK_OFF: 198,
  TO_WIN_THE_FIRST_SET_AND_WIN_THE_MATCH: 203,
  TO_LOSE_THE_FIRST_SET_AND_WIN_THE_MATCH: 202,
  TO_WIN_THE_TOSS: 243,
  TO_COMMIT_FIRST_ACCEPTED_PENALTY: 272,
  POINT_WINNER: 209,
  FIRST_180: 300,
  LAST_180: 301,
  TOTAL_SCORE_OVER: 13,
  YELLOW_CARDS_OVER_UNDER: 195,
  SCORE_EVEN: 23,
  HANDICAP_WINNER_WITH_MONEY_BACK_ON_DRAW: 60,
  WINNER_WITH_MONEY_BACK_ON_DRAW: 104,
  HOME_NO_BET: 142,
  AWAY_NO_BET: 143,
  MOST_SIXES: 112,
  POINTS_HANDICAP_WINNER: 19,
  CORNER_HANDICAP_WINNER_WITH_MONEY_BACK_ON_DRAW: 193,
  TO_SCORE_LONGEST_TOUCHDOWN: 268,
  TO_MAKE_LONGEST_FIELD_GOAL: 269,
  TO_HAVE_SHORTEST_FIELD_GOAL: 270,
  TO_CALL_FIRST_TIMEOUT: 271,
  TO_HAVE_FIRST_COACH_CHALLENGE: 273,
  TO_COMMIT_FIRST_TURNOVER: 278,
  TEAM_TOTAL_SCORE: 69

};

const OutcomeUtils = {

  participantRoleSE: {
    HOME: 1,
    AWAY: 2
  },

  outcomeTypes: _outcomeTypes,

  winnerOutcomeTypes: [_outcomeTypes.HANDICAP_WINNER, _outcomeTypes.WINNER,
    _outcomeTypes.GAME_HANDICAP_WINNER, _outcomeTypes.CORNER_HANDICAP_WINNER,
    _outcomeTypes.SET_HANDICAP_WINNER, _outcomeTypes.GAME_SCORE, _outcomeTypes.GAME_WINNER,
    _outcomeTypes.FIRST_TO_WIN_X_GAMES, _outcomeTypes.QUALIFICATION, _outcomeTypes.NEXT_TEAM_TO_SCORE_WITH_MONEY_BACK_ON_NO_GOAL,
    _outcomeTypes.TEAM_NOT_TO_BE_SCORED_AGAINST, _outcomeTypes.TO_WIN_BOTH_HALVES, _outcomeTypes.TO_WIN_EITHER_HALF,
    _outcomeTypes.TO_WIN_TO_NIL, _outcomeTypes.TO_SCORE_IN_BOTH_HALVES, _outcomeTypes.LAST_TEAM_TO_SCORE_WITH_MONEY_BACK_ON_NO_GOAL,
    _outcomeTypes.COME_FROM_BEHIND_AND_WIN, _outcomeTypes.COME_FROM_BEHIND_AND_DRAW, _outcomeTypes.COME_FROM_BEHIND_AND_WIN_OR_DRAW,
    _outcomeTypes.FIRST_180, _outcomeTypes.LAST_180, _outcomeTypes.KICK_OFF, _outcomeTypes.TO_LOSE_THE_FIRST_SET_AND_WIN_THE_MATCH,
    _outcomeTypes.TO_WIN_THE_FIRST_SET_AND_WIN_THE_MATCH, _outcomeTypes.POINT_WINNER, _outcomeTypes.HANDICAP_WINNER_WITH_MONEY_BACK_ON_DRAW,
    _outcomeTypes.WINNER_WITH_MONEY_BACK_ON_DRAW, _outcomeTypes.HOME_NO_BET, _outcomeTypes.AWAY_NO_BET, _outcomeTypes.MOST_SIXES,
    _outcomeTypes.POINTS_HANDICAP_WINNER, _outcomeTypes.CORNER_HANDICAP_WINNER_WITH_MONEY_BACK_ON_DRAW, _outcomeTypes.TO_COMMIT_FIRST_ACCEPTED_PENALTY,
    _outcomeTypes.TO_SCORE_LONGEST_TOUCHDOWN, _outcomeTypes.TO_MAKE_LONGEST_FIELD_GOAL, _outcomeTypes.TO_HAVE_SHORTEST_FIELD_GOAL,
    _outcomeTypes.TO_CALL_FIRST_TIMEOUT, _outcomeTypes.TO_HAVE_FIRST_COACH_CHALLENGE, _outcomeTypes.TO_COMMIT_FIRST_TURNOVER, _outcomeTypes.TO_WIN_THE_TOSS,
    _outcomeTypes.TEAM_TOTAL_SCORE
  ],

  overOutcomeTypes:[_outcomeTypes.TOTAL_SCORE_OVER, _outcomeTypes.YELLOW_CARDS_OVER_UNDER],

  oddEvenOutcomeTypes:[_outcomeTypes.SCORE_EVEN],

  //TODO: should not display this in the interface
  NO_PARAMETER_GROUP: "No parameter for this market",

  outcomesAreEquivalent(outcomeA, outcomeB) {
    if (outcomeA.paramBoolean1 !== outcomeB.paramBoolean1) {
      return false;
    }
    if (outcomeA.paramEventPartId1 !== outcomeB.paramEventPartId1) {
      return false;
    }
    if (outcomeA.paramFloat1 !== outcomeB.paramFloat1) {
      return false;
    }
    if (outcomeA.paramFloat2 !== outcomeB.paramFloat2) {
      return false;
    }
    if (outcomeA.paramFloat3 !== outcomeB.paramFloat3) {
      return false;
    }
    if (outcomeA.paramParticipantId1 !== outcomeB.paramParticipantId1) {
      return false;
    }
    if (outcomeA.paramParticipantId2 !== outcomeB.paramParticipantId2) {
      return false;
    }
    if (outcomeA.paramParticipantId3 !== outcomeB.paramParticipantId3) {
      return false;
    }
    if (outcomeA.paramString1 !== outcomeB.paramString1) {
      return false;
    }
    if (outcomeA.typeId !== outcomeB.typeId) {
      return false;
    }
    return true;
  },

  //Used in row ids
  getOutcomeParamGroupHashId(bettingTypeId, outcome, eprList, participants) {
    if (BettingTypeUtils.BETTING_TYPES_WITH_PARAMETERS.indexOf(bettingTypeId) < 0) {
      return this.NO_PARAMETER_GROUP;
    }
    switch(bettingTypeId){
      case BettingTypeUtils.types.SET_HANDICAP:
      case BettingTypeUtils.types.CORNER_HANDICAP:
      case BettingTypeUtils.types.ASIAN_HANDICAP:
      case BettingTypeUtils.types.HOME_DRAW_AWAY_WITH_HANDICAP:
      case BettingTypeUtils.types.GAME_HANDICAP_WITH_DRAW:
      case BettingTypeUtils.types.GAME_HANDICAP:
      case BettingTypeUtils.types.POINTS_HANDICAP:
      case BettingTypeUtils.types.CORNER_ASIAN_HANDICAP: {
        const epr = _.values(eprList).find(epr => epr.participantId == outcome.paramParticipantId1);
        if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
          const formattedParameter = _formatParameter(outcome.paramFloat1, bettingTypeId);
          return (formattedParameter).toString();
        } else {
          const formattedParameter = _formatParameter(-1 * outcome.paramFloat1, bettingTypeId);
          return (formattedParameter).toString();
        }
      }

      case BettingTypeUtils.types.WIN_AND_EACH_WAY:
        if (outcome.paramFloat2 == 1) {
          return "Win Only";
        } else {
          return outcome.paramFloat1.toString() + " & 1/" + outcome.paramFloat2.toString();
        }

      case BettingTypeUtils.types.GAME_SCORE:
      case BettingTypeUtils.types.GAME_WINNER:
      case BettingTypeUtils.types.RACE_TO_X_GAMES:
      case BettingTypeUtils.types.POINT_WINNER:
      case BettingTypeUtils.types.XTH_SET_PLAYED:
      case BettingTypeUtils.types.RACE_TO_X_GOALS:
      case BettingTypeUtils.types.RACE_TO_X_CORNERS:
      case BettingTypeUtils.types.RACE_TO_X_RUNS:
      case BettingTypeUtils.types.RACE_TO_X_FRAMES:
      case BettingTypeUtils.types.RACE_TO_X_POINTS:
      case BettingTypeUtils.types.MATCHBET_AND_TOTALS:
      case BettingTypeUtils.types.TOP_X:
        return (outcome.paramFloat1).toString();


      case BettingTypeUtils.types.TIME_RANGE_OF_TEAM_TO_SCORE_GOAL_X:
        return participants[outcome.paramParticipantId1].name + "\/" + outcome.paramFloat3;

      case BettingTypeUtils.types.TIME_OF_NEXT_TEAM_GOAL:
      case BettingTypeUtils.types.TEAM_ODD_EVEN:
      case BettingTypeUtils.types.TEAM_TO_SCORE_IN_BOTH_HALVES:
      case BettingTypeUtils.types.TEAM_CLEAN_SHEET:
      case BettingTypeUtils.types.TEAM_TO_WIN_TO_NIL:
      case BettingTypeUtils.types.TEAM_TO_WIN_BOTH_HALVES:
      case BettingTypeUtils.types.TEAM_TO_WIN_EITHER_HALF:
      case BettingTypeUtils.types.TEAM_TO_SCORE:
      case BettingTypeUtils.types.TO_WIN_AT_LEAST_ONE_SET:
      case BettingTypeUtils.types.METHOD_OF_VICTORY:
      case BettingTypeUtils.types.TEAM_NUMBER_OF_CORNERS:
      case BettingTypeUtils.types.TEAM_NUMBER_OF_PENALTIES:
        return participants[outcome.paramParticipantId1].name;

      case BettingTypeUtils.types.HEAD_TO_HEAD:
        return participants[outcome.paramParticipantId1].name + "\/" + participants[outcome.paramParticipantId2].name;

      case BettingTypeUtils.types.HEAD_TO_HEAD_TO_HEAD:
        return participants[outcome.paramParticipantId1].name + "\/" + participants[outcome.paramParticipantId2].name
          + "\/" + participants[outcome.paramParticipantId3].name;

      case BettingTypeUtils.types.SCORINGS_OVER_UNDER_IN_TIME_RANGE:
      case BettingTypeUtils.types.CORNERS_OVER_UNDER_IN_TIME_RANGE:
        const formattedParameter = _formatParameter(outcome.paramFloat3, bettingTypeId);
        if(outcome.paramFloat2){
          if(outcome.paramFloat1 == outcome.paramFloat2){
            return outcome.paramFloat1 + "\/" + formattedParameter;
          }
          return outcome.paramFloat1 + "-" + outcome.paramFloat2 + "\/" + formattedParameter;
        }
        return outcome.paramFloat1 + "+" + "\/" + formattedParameter;

      case BettingTypeUtils.types.TEAM_GOAL_IN_TIME_RANGE:
        if(outcome.paramFloat2){
          if(outcome.paramFloat1 == outcome.paramFloat2){
            return participants[outcome.paramParticipantId1].name + "\/" + outcome.paramFloat1;
          }
          return participants[outcome.paramParticipantId1].name + "\/" + outcome.paramFloat1 + "-" + outcome.paramFloat2;
        }
        return participants[outcome.paramParticipantId1].name + "\/" + outcome.paramFloat1 + "+";

      case BettingTypeUtils.types.GOAL_IN_TIME_RANGE:
      case BettingTypeUtils.types.CORNER_KICK_IN_TIME_RANGE:
      case BettingTypeUtils.types.GAME_X_AND_Y_WINNER:
      case BettingTypeUtils.types.TEAM_TO_SCORE_MOST_IN_TIME_RANGE:
      case BettingTypeUtils.types.WINNER_OF_TIME_RANGE:
        if(outcome.paramFloat2 != null){
          if(outcome.paramFloat1 == outcome.paramFloat2){
            return outcome.paramFloat1;
          }
          return outcome.paramFloat1 + "-" + outcome.paramFloat2;
        }
        return outcome.paramFloat1 + "+";

      case BettingTypeUtils.types.TEAM_TOTAL_SCORE:
        if(outcome.paramFloat2 != null){
          if(outcome.paramFloat1 == outcome.paramFloat2){
            return outcome.paramFloat1;
          }
          return outcome.paramFloat1 + "-" + outcome.paramFloat2;
        }
        return "Over " + outcome.paramFloat1;

      case BettingTypeUtils.types.TEAM_SCORE_OVER_UNDER:
      case BettingTypeUtils.types.PLAYER_CENTURIES_OVER_UNDER: {
        const formattedParameter = _formatParameter(outcome.paramFloat1, bettingTypeId);
        return participants[outcome.paramParticipantId1].name + "\/" + formattedParameter;
      }

      case BettingTypeUtils.types.OVER_UNDER:
      case BettingTypeUtils.types.SETS_OVER_UNDER:
      case BettingTypeUtils.types.TIE_BREAK_POINTS_OVER_UNDER:
      case BettingTypeUtils.types.GAMES_WON_OVER_UNDER:
      case BettingTypeUtils.types.CORNERS_OVER_UNDER:
      case BettingTypeUtils.types.TRIES_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_CORNERS_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_BOOKINGS_OVER_UNDER:
      case BettingTypeUtils.types.CARDS_OVER_UNDER:
      case BettingTypeUtils.types.YELLOW_CARDS_OVER_UNDER:
      case BettingTypeUtils.types.POINTS_OVER_UNDER:
      case BettingTypeUtils.types.WIDES_OVER_UNDER:
      case BettingTypeUtils.types.SHORTEST_TOUCHDOWN_SCORED:
      case BettingTypeUtils.types.LONGEST_TOUCHDOWN_SCORED:
      case BettingTypeUtils.types.SUCCESSFUL_FIELD_GOALS_MADE:
      case BettingTypeUtils.types.LONGEST_FIELD_GOAL_MADE:
      case BettingTypeUtils.types.TOUCHDOWNS_OVER_UNDER:
      case BettingTypeUtils.types.SACKS_OVER_UNDER:
      case BettingTypeUtils.types.POINTS_WON_OVER_UNDER:
      case BettingTypeUtils.types.SHOTS_ON_TARGET_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_CARDS_OVER_UNDER:
      case BettingTypeUtils.types.OFFSIDES_OVER_UNDER:
      case BettingTypeUtils.types.OVER_UNDER_180S:
      case BettingTypeUtils.types.CHECKOUT_OVER_UNDER: {
        const formattedParameter = _formatParameter(outcome.paramFloat1, bettingTypeId);
        return formattedParameter.toString();
      }

      case BettingTypeUtils.types.PLAYER_3_DART_AVERAGE: {
        return participants[outcome.paramParticipantId1].name + "/" + outcome.paramFloat1.toString();
      }
    }

  },

  eventParticipantRelation(participantRelation, participantId) {
    if(participantId) {
      var epr, key, ref;
      ref = participantRelation;
      for (key in ref) {
        epr = ref[key];
        if (epr && epr.participantId === participantId) {
          return epr;
        }
      }
    }
    return null;
  },

  calculateProviderPayout(offers) {
    return offers.reduce((prev, next, index, source) => {
      var accumulator = null;
      // if this is the first accumulation
      if (index == 1)
        accumulator = (1 / prev) + (1 / next);
      else
        accumulator = prev + (1 / next);
      // has reached end
      if (index == source.length - 1)
        accumulator = Math.round(100 / accumulator) + '%';
      return accumulator;
    });
  },

  valueIsNull(value) {
    return (value === null && typeof value === 'object');
  },

  valueOrNull(value, replacement = '$', separator = ':') {
    //TODO: ENSURE SEPARATOR GUARANTEES UNIQUNESS FOR STRINGS
    return OutcomeUtils.valueIsNull(value) ? replacement : value+separator
  },

  generateOutcomeHashcode(outcome) {

    var hashCode = '';
    hashCode += OutcomeUtils.valueOrNull(outcome.paramBoolean1);
    hashCode += OutcomeUtils.valueOrNull(outcome.paramEventPartId1);
    hashCode += OutcomeUtils.valueOrNull(outcome.paramFloat1);
    hashCode += OutcomeUtils.valueOrNull(outcome.paramFloat2);
    hashCode += OutcomeUtils.valueOrNull(outcome.paramFloat3);
    hashCode += OutcomeUtils.valueOrNull(outcome.paramParticipantId1);
    hashCode += OutcomeUtils.valueOrNull(outcome.paramParticipantId2);
    hashCode += OutcomeUtils.valueOrNull(outcome.paramParticipantId3);
    hashCode += OutcomeUtils.valueOrNull(outcome.paramString1);
    hashCode += OutcomeUtils.valueOrNull(outcome.typeId);
    return hashCode;
  },


  // for parameterized betting types, for the same column header we
  // have distinct outcome parameters that refer that column (so
  // we can't use the generic hashing)
  generateOutcomeHashCodeForBettingTypeWithParameters(bettingTypeId, outcome){
    switch (parseInt(bettingTypeId, 10)) {
      case BettingTypeUtils.types.SET_HANDICAP:
      case BettingTypeUtils.types.CORNER_HANDICAP:
      case BettingTypeUtils.types.ASIAN_HANDICAP:
      case BettingTypeUtils.types.TEAM_TOTAL_SCORE:
      case BettingTypeUtils.types.HOME_DRAW_AWAY_WITH_HANDICAP:
      case BettingTypeUtils.types.GAME_HANDICAP_WITH_DRAW:
      case BettingTypeUtils.types.GAME_HANDICAP:
      case BettingTypeUtils.types.GAME_SCORE:
      case BettingTypeUtils.types.GAME_WINNER:
      case BettingTypeUtils.types.RACE_TO_X_GAMES:
      case BettingTypeUtils.types.POINT_WINNER:
      case BettingTypeUtils.types.RACE_TO_X_GOALS:
      case BettingTypeUtils.types.RACE_TO_X_CORNERS:
      case BettingTypeUtils.types.RACE_TO_X_RUNS:
      case BettingTypeUtils.types.RACE_TO_X_FRAMES:
      case BettingTypeUtils.types.RACE_TO_X_POINTS:
      case BettingTypeUtils.types.TEAM_TO_SCORE_MOST_IN_TIME_RANGE:
      case BettingTypeUtils.types.WINNER_OF_TIME_RANGE:
      case BettingTypeUtils.types.POINTS_HANDICAP:
      case BettingTypeUtils.types.CORNER_ASIAN_HANDICAP:
        return OutcomeUtils.valueOrNull(outcome.paramParticipantId1) + outcome.typeId.toString();

      case BettingTypeUtils.types.TIME_OF_NEXT_TEAM_GOAL:
      case BettingTypeUtils.types.TIME_RANGE_OF_TEAM_TO_SCORE_GOAL_X:
      case BettingTypeUtils.types.TEAM_NUMBER_OF_CORNERS:
      case BettingTypeUtils.types.TEAM_NUMBER_OF_PENALTIES:
        return OutcomeUtils.valueOrNull(outcome.paramFloat1) + OutcomeUtils.valueOrNull(outcome.paramFloat2);

      case BettingTypeUtils.types.HEAD_TO_HEAD:
      case BettingTypeUtils.types.HEAD_TO_HEAD_TO_HEAD:
      case BettingTypeUtils.types.METHOD_OF_VICTORY:
        return outcome.paramString1;

      case BettingTypeUtils.types.GOAL_IN_TIME_RANGE:
      case BettingTypeUtils.types.TEAM_GOAL_IN_TIME_RANGE:
      case BettingTypeUtils.types.SCORINGS_OVER_UNDER_IN_TIME_RANGE:
      case BettingTypeUtils.types.CORNERS_OVER_UNDER_IN_TIME_RANGE:
      case BettingTypeUtils.types.TEAM_SCORE_OVER_UNDER:
      case BettingTypeUtils.types.CORNER_KICK_IN_TIME_RANGE:
      case BettingTypeUtils.types.SETS_OVER_UNDER:
      case BettingTypeUtils.types.TIE_BREAK_POINTS_OVER_UNDER:
      case BettingTypeUtils.types.GAMES_WON_OVER_UNDER:
      case BettingTypeUtils.types.CORNERS_OVER_UNDER:
      case BettingTypeUtils.types.TRIES_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_CORNERS_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_BOOKINGS_OVER_UNDER:
      case BettingTypeUtils.types.CARDS_OVER_UNDER:
      case BettingTypeUtils.types.YELLOW_CARDS_OVER_UNDER:
      case BettingTypeUtils.types.POINTS_OVER_UNDER:
      case BettingTypeUtils.types.WIDES_OVER_UNDER:
      case BettingTypeUtils.types.SHORTEST_TOUCHDOWN_SCORED:
      case BettingTypeUtils.types.LONGEST_TOUCHDOWN_SCORED:
      case BettingTypeUtils.types.SUCCESSFUL_FIELD_GOALS_MADE:
      case BettingTypeUtils.types.LONGEST_FIELD_GOAL_MADE:
      case BettingTypeUtils.types.TOUCHDOWNS_OVER_UNDER:
      case BettingTypeUtils.types.SACKS_OVER_UNDER:
      case BettingTypeUtils.types.POINTS_WON_OVER_UNDER:
      case BettingTypeUtils.types.SHOTS_ON_TARGET_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_CARDS_OVER_UNDER:
      case BettingTypeUtils.types.OFFSIDES_OVER_UNDER:
      case BettingTypeUtils.types.OVER_UNDER_180S:
      case BettingTypeUtils.types.CHECKOUT_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_ODD_EVEN:
      case BettingTypeUtils.types.OWN_GOAL_SCORED:
      case BettingTypeUtils.types.BOTH_TEAMS_TO_SCORE:
      case BettingTypeUtils.types.NEXT_PENALTY_SCORED:
      case BettingTypeUtils.types.TIE_BREAK:
      case BettingTypeUtils.types.GAME_TO_DEUCE:
      case BettingTypeUtils.types.PENALTY_AWARDED:
      case BettingTypeUtils.types.PENALTY_SCORED:
      case BettingTypeUtils.types.GAME_POINT_WINNER_SERVER:
      case BettingTypeUtils.types.TEAM_CLEAN_SHEET:
      case BettingTypeUtils.types.SENDING_OFF:
      case BettingTypeUtils.types.TEAM_TO_WIN_TO_NIL:
      case BettingTypeUtils.types.GOAL_IN_BOTH_HALVES:
      case BettingTypeUtils.types.TO_GO_TO_OVERTIME:
      case BettingTypeUtils.types.TEAM_TO_SCORE_IN_BOTH_HALVES:
      case BettingTypeUtils.types.HAT_TRICK_SCORED:
      case BettingTypeUtils.types.A_SUBSTITUTE_TO_SCORE:
      case BettingTypeUtils.types.TEAM_TO_WIN_BOTH_HALVES:
      case BettingTypeUtils.types.TEAM_TO_WIN_EITHER_HALF:
      case BettingTypeUtils.types.TEAM_TO_SCORE:
      case BettingTypeUtils.types.XTH_SET_PLAYED:
      case BettingTypeUtils.types.TO_WIN_AT_LEAST_ONE_SET:
      case BettingTypeUtils.types.TO_GO_TO_PENALTIES:
      case BettingTypeUtils.types.SAFETY_CAR:
      case BettingTypeUtils.types.FIFTY_SCORED:
      case BettingTypeUtils.types.CENTURY_SCORED:
      case BettingTypeUtils.types.FIRST_BALL_DOT_OR_NOT:
      case BettingTypeUtils.types.TIED_MATCH:
      case BettingTypeUtils.types.COMPLETED_MATCH:
      case BettingTypeUtils.types.THREE_UNANSWERED_SCORES:
      case BettingTypeUtils.types.SCORE_IN_THE_FINAL_TWO_MINUTES:
      case BettingTypeUtils.types.LAST_SCORING_TEAM_WINS:
      case BettingTypeUtils.types.SPECIAL_TEAM_OR_DEFENSIVE_TOUCHDOWN_SCORED:
      case BettingTypeUtils.types.FIRST_SCORING_TEAM_WINS:
      case BettingTypeUtils.types.FIRST_TRY_CONVERTED:
      case BettingTypeUtils.types.DROP_GOAL:
      case BettingTypeUtils.types.CHECKOUT_170:
      case BettingTypeUtils.types.PLAYER_3_DART_AVERAGE:
      case BettingTypeUtils.types.NINE_DART_FINISH:
      case BettingTypeUtils.types.GAME_TO_DEUCE:
      case BettingTypeUtils.types.PLAYER_CENTURIES_OVER_UNDER:
        return outcome.paramBoolean1.toString();

      case BettingTypeUtils.types.OVER_UNDER:
        return outcome.typeId.toString();

      case BettingTypeUtils.types.GAME_X_AND_Y_WINNER:
      case BettingTypeUtils.types.TOP_X:
      case BettingTypeUtils.types.WIN_AND_EACH_WAY:
        return OutcomeUtils.valueOrNull(outcome.paramParticipantId1);

      case BettingTypeUtils.types.MATCHBET_AND_TOTALS:{
        return outcome.paramBoolean1.toString() + OutcomeUtils.valueOrNull(outcome.paramParticipantId1);
      }

      default:
        // TODO: maybe throw an exception to mark that this betting type wasn't implemented?
        return this.generateOutcomeHashcode(outcome);
    }
  },

  //Used in outcome headers
  getOutcomeHashcode(bettingTypeId, outcome){
    if(BettingTypeUtils.isBettingTypeWithParameters(bettingTypeId)){
      return this.generateOutcomeHashCodeForBettingTypeWithParameters(bettingTypeId, outcome);
    } else {
      return this.generateOutcomeHashcode(outcome);
    }
  },

  getOutcomeLabel(bettingTypeId, outcome, eventParticipantsRelation, participants) {
    const epr = OutcomeUtils.eventParticipantRelation(eventParticipantsRelation,
        outcome.paramParticipantId1) ||  OutcomeUtils.eventParticipantRelation(eventParticipantsRelation,
        outcome.paramParticipantId2);
    return OutcomeUtils.buildOutcomeLabel(bettingTypeId, outcome, epr, participants);
  },

  buildOutcomeLabel(betTypeId, outcome, epr, participants) {
    switch (parseInt(betTypeId, 10)) {
      case BettingTypeUtils.types.CORRECT_SCORE:
        if (epr) {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return outcome.paramFloat1 + '-' + outcome.paramFloat2;
          } else {
            return outcome.paramFloat2 + '-' + outcome.paramFloat1;
          }
        }
        return "???";

      case BettingTypeUtils.types.SET_HANDICAP:
      case BettingTypeUtils.types.CORNER_HANDICAP:
      case BettingTypeUtils.types.GAME_HANDICAP_WITH_DRAW:
      case BettingTypeUtils.types.ASIAN_HANDICAP:
      case BettingTypeUtils.types.HOME_DRAW_AWAY:
      case BettingTypeUtils.types.HOME_AWAY:
      case BettingTypeUtils.types.TEAM_TOTAL_SCORE:
      case BettingTypeUtils.types.HOME_DRAW_AWAY_WITH_HANDICAP:
      case BettingTypeUtils.types.GAME_HANDICAP:
      case BettingTypeUtils.types.GAME_SCORE:
      case BettingTypeUtils.types.GAME_WINNER:
      case BettingTypeUtils.types.RACE_TO_X_GAMES:
      case BettingTypeUtils.types.QUALIFICATION:
      case BettingTypeUtils.types.NEXT_TEAM_TO_SCORE_WITH_MONEY_BACK_ON_NO_GOAL:
      case BettingTypeUtils.types.CLEAN_SHEET:
      case BettingTypeUtils.types.TO_WIN_BOTH_HALVES:
      case BettingTypeUtils.types.TO_WIN_EITHER_HALF:
      case BettingTypeUtils.types.TO_WIN_TO_NIL:
      case BettingTypeUtils.types.TO_SCORE_IN_BOTH_HALVES:
      case BettingTypeUtils.types.LAST_TEAM_TO_SCORE_WITH_MONEY_BACK_ON_NO_GOAL:
      case BettingTypeUtils.types.COME_FROM_BEHIND_AND_WIN:
      case BettingTypeUtils.types.COME_FROM_BEHIND_AND_DRAW:
      case BettingTypeUtils.types.COME_FROM_BEHIND_AND_WIN_OR_DRAW:
      case BettingTypeUtils.types.KICK_OFF:
      case BettingTypeUtils.types.TO_WIN_THE_FIRST_SET_AND_WIN_THE_MATCH:
      case BettingTypeUtils.types.TO_LOSE_THE_FIRST_SET_AND_WIN_THE_MATCH:
      case BettingTypeUtils.types.TO_WIN_THE_TOSS:
      case BettingTypeUtils.types.TO_COMMIT_FIRST_ACCEPTED_PENALTY:
      case BettingTypeUtils.types.POINT_WINNER:
      case BettingTypeUtils.types.FIRST_180:
      case BettingTypeUtils.types.LAST_180:
      case BettingTypeUtils.types.DRAW_NO_BET:
      case BettingTypeUtils.types.HOME_NO_BET:
      case BettingTypeUtils.types.AWAY_NO_BET:
      case BettingTypeUtils.types.MOST_SIXES:
      case BettingTypeUtils.types.POINTS_HANDICAP:
      case BettingTypeUtils.types.CORNER_ASIAN_HANDICAP:
      case BettingTypeUtils.types.TO_CALL_FIRST_TIMEOUT:
      case BettingTypeUtils.types.TO_SCORE_LONGEST_TOUCHDOWN:
      case BettingTypeUtils.types.TO_COMMIT_FIRST_TURNOVER:
      case BettingTypeUtils.types.TO_HAVE_FIRST_COACH_CHALLENGE:
      case BettingTypeUtils.types.TO_HAVE_THE_SHORTEST_FIELD_GOAL:
      case BettingTypeUtils.types.TO_MAKE_LONGEST_FIELD_GOAL: {
        if (OutcomeUtils.winnerOutcomeTypes.indexOf(outcome.typeId) >= 0) {
          if (epr) {
            if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
              return 'Home';
            }
            if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
              return 'Away';
            }
          }
        }
        return "Draw";
      }

      case BettingTypeUtils.types.GAME_X_AND_Y_WINNER:{
        if(outcome.paramParticipantId1){
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return 'Home';
          }
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return 'Away';
          }
        } else {
          return "Draw";
        }
      }

      case BettingTypeUtils.types.FIRST_TEAM_BOOKING:
        if (outcome.paramParticipantId1) {
            if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
              return 'Home';
            }
            if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
              return 'Away';
            }
        } else {
          if (outcome.paramBoolean1Description != null && !outcome.paramBoolean1Description){
            return "No Card";
          } else if(outcome.paramBoolean1Description == null){
            return "Card Received At The Same Time";
          } else {
            return "???";
          }
        }


      case BettingTypeUtils.types.SCORINGS_OVER_UNDER_IN_TIME_RANGE:
      case BettingTypeUtils.types.CORNERS_OVER_UNDER_IN_TIME_RANGE:
      case BettingTypeUtils.types.TEAM_SCORE_OVER_UNDER:
      case BettingTypeUtils.types.SETS_OVER_UNDER:
      case BettingTypeUtils.types.TIE_BREAK_POINTS_OVER_UNDER:
      case BettingTypeUtils.types.GAMES_WON_OVER_UNDER:
      case BettingTypeUtils.types.CORNERS_OVER_UNDER:
      case BettingTypeUtils.types.TRIES_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_CORNERS_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_BOOKINGS_OVER_UNDER:
      case BettingTypeUtils.types.CARDS_OVER_UNDER:
      case BettingTypeUtils.types.POINTS_OVER_UNDER:
      case BettingTypeUtils.types.WIDES_OVER_UNDER:
      case BettingTypeUtils.types.SHORTEST_TOUCHDOWN_SCORED:
      case BettingTypeUtils.types.LONGEST_TOUCHDOWN_SCORED:
      case BettingTypeUtils.types.SUCCESSFUL_FIELD_GOALS_MADE:
      case BettingTypeUtils.types.LONGEST_FIELD_GOAL_MADE:
      case BettingTypeUtils.types.TOUCHDOWNS_OVER_UNDER:
      case BettingTypeUtils.types.SACKS_OVER_UNDER:
      case BettingTypeUtils.types.POINTS_WON_OVER_UNDER:
      case BettingTypeUtils.types.SHOTS_ON_TARGET_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_CARDS_OVER_UNDER:
      case BettingTypeUtils.types.OFFSIDES_OVER_UNDER:
      case BettingTypeUtils.types.OVER_UNDER_180S:
      case BettingTypeUtils.types.CHECKOUT_OVER_UNDER:
      case BettingTypeUtils.types.PLAYER_CENTURIES_OVER_UNDER:
        if (outcome.paramBoolean1){
          return 'Over';
        }
        return 'Under';

      case BettingTypeUtils.types.OVER_UNDER:
      case BettingTypeUtils.types.YELLOW_CARDS_OVER_UNDER:
        if(OutcomeUtils.overOutcomeTypes.indexOf(outcome.typeId) >= 0){
          return "Over";
        }
        return "Under";

      case BettingTypeUtils.types.GOAL_IN_TIME_RANGE:
      case BettingTypeUtils.types.TEAM_GOAL_IN_TIME_RANGE:
      case BettingTypeUtils.types.CORNER_KICK_IN_TIME_RANGE:
      case BettingTypeUtils.types.OWN_GOAL_SCORED:
      case BettingTypeUtils.types.BOTH_TEAMS_TO_SCORE:
      case BettingTypeUtils.types.NEXT_PENALTY_SCORED:
      case BettingTypeUtils.types.TIE_BREAK:
      case BettingTypeUtils.types.GAME_TO_DEUCE:
      case BettingTypeUtils.types.PENALTY_AWARDED:
      case BettingTypeUtils.types.PENALTY_SCORED:
      case BettingTypeUtils.types.GAME_POINT_WINNER_SERVER:
      case BettingTypeUtils.types.TEAM_CLEAN_SHEET:
      case BettingTypeUtils.types.SENDING_OFF:
      case BettingTypeUtils.types.TEAM_TO_WIN_TO_NIL:
      case BettingTypeUtils.types.GOAL_IN_BOTH_HALVES:
      case BettingTypeUtils.types.TO_GO_TO_OVERTIME:
      case BettingTypeUtils.types.TEAM_TO_SCORE_IN_BOTH_HALVES:
      case BettingTypeUtils.types.HAT_TRICK_SCORED:
      case BettingTypeUtils.types.A_SUBSTITUTE_TO_SCORE:
      case BettingTypeUtils.types.TEAM_TO_WIN_BOTH_HALVES:
      case BettingTypeUtils.types.TEAM_TO_WIN_EITHER_HALF:
      case BettingTypeUtils.types.TEAM_TO_SCORE:
      case BettingTypeUtils.types.XTH_SET_PLAYED:
      case BettingTypeUtils.types.TO_WIN_AT_LEAST_ONE_SET:
      case BettingTypeUtils.types.TO_GO_TO_PENALTIES:
      case BettingTypeUtils.types.SAFETY_CAR:
      case BettingTypeUtils.types.FIFTY_SCORED:
      case BettingTypeUtils.types.CENTURY_SCORED:
      case BettingTypeUtils.types.FIRST_BALL_DOT_OR_NOT:
      case BettingTypeUtils.types.TIED_MATCH:
      case BettingTypeUtils.types.COMPLETED_MATCH:
      case BettingTypeUtils.types.THREE_UNANSWERED_SCORES:
      case BettingTypeUtils.types.SCORE_IN_THE_FINAL_TWO_MINUTES:
      case BettingTypeUtils.types.LAST_SCORING_TEAM_WINS:
      case BettingTypeUtils.types.SPECIAL_TEAM_OR_DEFENSIVE_TOUCHDOWN_SCORED:
      case BettingTypeUtils.types.FIRST_SCORING_TEAM_WINS:
      case BettingTypeUtils.types.FIRST_TRY_CONVERTED:
      case BettingTypeUtils.types.DROP_GOAL:
      case BettingTypeUtils.types.CHECKOUT_170:
      case BettingTypeUtils.types.PLAYER_3_DART_AVERAGE: //TODO: check if this should have "Over Under" label instead of "Yes No"
      case BettingTypeUtils.types.NINE_DART_FINISH:
      case BettingTypeUtils.types.GAME_TO_DEUCE:
      case BettingTypeUtils.types.TO_POINT_CONVERSION: {
        if (outcome.paramBoolean1) {
          return 'Yes';
        }
        return 'No';
      }

      case BettingTypeUtils.types.HEAD_TO_HEAD:
      case BettingTypeUtils.types.HEAD_TO_HEAD_TO_HEAD:
      case BettingTypeUtils.types.METHOD_OF_VICTORY:
        return outcome.paramString1;

      case BettingTypeUtils.types.TIME_OF_NEXT_TEAM_GOAL:
      case BettingTypeUtils.types.TIME_RANGE_OF_TEAM_TO_SCORE_GOAL_X:
      case BettingTypeUtils.types.TIME_OF_NEXT_GOAL:
      case BettingTypeUtils.types.NUMBER_OF_CORNERS:
      case BettingTypeUtils.types.NUMBER_OF_GAMES:
      case BettingTypeUtils.types.NUMBER_OF_CARDS:
      case BettingTypeUtils.types.TEAM_NUMBER_OF_CORNERS:
      case BettingTypeUtils.types.TEAM_NUMBER_OF_PENALTIES:
        if (outcome.paramFloat1 && outcome.paramFloat2){
          if(outcome.paramFloat1 == outcome.paramFloat2){
            return outcome.paramFloat1;
          }
          return outcome.paramFloat1 + "-" + outcome.paramFloat2;
        } else if (outcome.paramFloat1){
          return outcome.paramFloat1 + "+";
        } else if (outcome.paramFloat2) {
          return "0-" + outcome.paramFloat2;
        } else {
          return "None";
        }

      case BettingTypeUtils.types.TOTAL_SCORE:
        if(outcome.paramFloat1 == outcome.paramFloat2){
          return outcome.paramFloat1;
        } else if(outcome.paramFloat2 == null){
          return outcome.paramFloat1 + "+";
        } else {
          return outcome.paramFloat1 + "-" + outcome.paramFloat2;
        }

      case BettingTypeUtils.types.HALF_WITH_MOST_CORNERS:{
        if(outcome.paramEventPartId1 == null){
          return "Draw";
        } else if(outcome.paramEventPartId1 == EventPartUtils.types.FOOTBALL_FIRST_HALF){
          return "1st Half";
        } else if(outcome.paramEventPartId1 == EventPartUtils.types.FOOTBALL_SECOND_HALF){
          return "2nd Half";
        }
      }

      case BettingTypeUtils.types.ODD_OR_EVEN:{
        if( OutcomeUtils.oddEvenOutcomeTypes.indexOf(outcome.typeId) >= 0){
          return "Even";
        }
        return "Odd";
      }

      case BettingTypeUtils.types.TEAM_ODD_EVEN:
      case BettingTypeUtils.types.CORNERS_ODD_EVEN:
      case BettingTypeUtils.types.YELLOW_CARDS_ODD_EVEN:{
        if(outcome.paramBoolean1){
          return "Odd";
        }
        return "Even";
      }

      case BettingTypeUtils.types.DOUBLE_CHANCE:{
        if(outcome.paramParticipantId1 == null){
          return "12";
        } else {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return "1X";
          }
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return "X2";
          }
        }
      }

      case BettingTypeUtils.types.HALF_TIME_FULL_TIME:{ // "1/1", "1/X", "1/2", "X/1", "X/X", "X/2", "2/1", "2/X", "2/2"
        if(outcome.paramParticipantId1 && outcome.paramParticipantId2){
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            if(outcome.paramParticipantId1 == outcome.paramParticipantId2) {
              return "1/1";
            } else {
              return "1/2";
            }
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            if(outcome.paramParticipantId1 == outcome.paramParticipantId2) {
              return "2/2";
            } else {
              return "2/1";
            }
          }
        } else if(outcome.paramParticipantId1 && outcome.paramParticipantId2 == null){
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return "1/X";
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return "2/X";
          }
        } else if (outcome.paramParticipantId1 == null && outcome.paramParticipantId2){
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return "X/1";
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return "X/2";
          }
        } else {
          return "X/X";
        }
      }

      case BettingTypeUtils.types.NEXT_TEAM_TO_SCORE:
      case BettingTypeUtils.types.LAST_TEAM_TO_SCORE: {
        if (outcome.paramParticipantId1 == null) {
          return "No Goal";
        } else {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return "Home";
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return "Away";
          }
        }
      }

      case BettingTypeUtils.types.RACE_TO_X_GOALS:
      case BettingTypeUtils.types.RACE_TO_X_CORNERS:
      case BettingTypeUtils.types.RACE_TO_X_RUNS:
      case BettingTypeUtils.types.RACE_TO_X_FRAMES:
      case BettingTypeUtils.types.RACE_TO_X_POINTS:
      case BettingTypeUtils.types.TEAM_TO_SCORE_MOST_IN_TIME_RANGE:
      case BettingTypeUtils.types.TEAM_TO_SCORE_NEXT_TRY:
      case BettingTypeUtils.types.WINNER_OF_TIME_RANGE:
      case BettingTypeUtils.types.GAME_WIN_TO_DEUCE:
      case BettingTypeUtils.types.MOST_YELLOW_CARDS: {
        if (outcome.paramParticipantId1 == null) {
          return "None";
        } else {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return "Home";
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return "Away";
          }
        }
      }

      case BettingTypeUtils.types.MOST_BOOKINGS:
      case BettingTypeUtils.types.MOST_CORNERS:
      case BettingTypeUtils.types.MOST_180S:
      case BettingTypeUtils.types.HIGHEST_CHECKOUT:{
        if (outcome.paramParticipantId1 == null) {
          return "Draw";
        } else {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return "Home";
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return "Away";
          }
        }
      }

      case BettingTypeUtils.types.HIGHEST_OPENING_PARTNERSHIP:
      case BettingTypeUtils.types.NEXT_CORNER_KICK:
      case BettingTypeUtils.types.LAST_CORNER_KICK:
      case BettingTypeUtils.types.NEXT_THROW_IN:
      case BettingTypeUtils.types.NEXT_GOAL_KICK:
      case BettingTypeUtils.types.NEXT_FREE_KICK:
      case BettingTypeUtils.types.FIRST_FREE_THROW: {
        if (outcome.paramParticipantId1 == null) {
          return BettingTypeUtils.getActionLabelForBettingType(betTypeId);
        } else {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return "Home";
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return "Away";
          }
        }
      }

      case BettingTypeUtils.types.HIGHEST_SCORING_EVENT_PART: {
        if (outcome.paramEventPartId1 == null) {
          return "Tie";
        } else {
          if (outcome.paramFloat1 == 2) { //HALVES
            if (outcome.paramEventPartId1 == EventPartUtils.types.FOOTBALL_FIRST_HALF || outcome.paramEventPartId1 == EventPartUtils.types.AMERICAN_FOOTBALL_FIRST_HALF || outcome.paramEventPartId1 == EventPartUtils.types.HANDBALL_FIRST_HALF || outcome.paramEventPartId1 == EventPartUtils.types.RUGBY_UNION_FIRST_HALF || outcome.paramEventPartId1 == EventPartUtils.types.RUGBY_LEAGUE_FIRST_HALF || outcome.paramEventPartId1 == EventPartUtils.types.BASKETBALL_FIRST_HALF) {
              return "First Half";
            } else if (outcome.paramEventPartId1 == EventPartUtils.types.FOOTBALL_SECOND_HALF || outcome.paramEventPartId1 == EventPartUtils.types.AMERICAN_FOOTBALL_SECOND_HALF || outcome.paramEventPartId1 == EventPartUtils.types.AMERICAN_FOOTBALL_SECOND_HALF || outcome.paramEventPartId1 == EventPartUtils.types.RUGBY_UNION_SECOND_HALF || outcome.paramEventPartId1 == EventPartUtils.types.RUGBY_LEAGUE_SECOND_HALF || outcome.paramEventPartId1 == EventPartUtils.types.BASKETBALL_SECOND_HALF) {
              return "Second Half";
            }
          } else if (outcome.paramFloat1 == 3) { //PERIODS
            if (outcome.paramEventPartId1 == EventPartUtils.types.ICE_HOCKEY_FIRST_PERIOD || outcome.paramEventPartId1 == EventPartUtils.types.FLOORBALL_FIRST_PERIOD) {
              return "First Period";
            } else if (outcome.paramEventPartId1 == EventPartUtils.types.ICE_HOCKEY_SECOND_PERIOD || outcome.paramEventPartId1 == EventPartUtils.types.FLOORBALL_SECOND_PERIOD) {
              return "Second Period";
            } else if (outcome.paramEventPartId1 == EventPartUtils.types.ICE_HOCKEY_THIRD_PERIOD || outcome.paramEventPartId1 == EventPartUtils.types.FLOORBALL_THIRD_PERIOD) {
              return "Third Period";
            }
          } else if (outcome.paramFloat1 == 4) { //QUARTERS
            if (outcome.paramEventPartId1 == EventPartUtils.types.AMERICAN_FOOTBALL_FIRST_QUARTER || outcome.paramEventPartId1 == EventPartUtils.types.BASKETBALL_FIRST_QUARTER) {
              return "First Quarter";
            } else if (outcome.paramEventPartId1 == EventPartUtils.types.AMERICAN_FOOTBALL_SECOND_QUARTER || outcome.paramEventPartId1 == EventPartUtils.types.BASKETBALL_SECOND_QUARTER) {
              return "Second Quarter";
            } else if (outcome.paramEventPartId1 == EventPartUtils.types.AMERICAN_FOOTBALL_THIRD_QUARTER || outcome.paramEventPartId1 == EventPartUtils.types.BASKETBALL_THIRD_QUARTER) {
              return "Third Quarter";
            } else if (outcome.paramEventPartId1 == EventPartUtils.types.AMERICAN_FOOTBALL_FOURTH_QUARTER || outcome.paramEventPartId1 == EventPartUtils.types.BASKETBALL_FOURTH_QUARTER) {
              return "Fourth Quarter";
            }
          }
        }
      }

      case BettingTypeUtils.types.MATCHBET_AND_TOTALS:{
        if(outcome.paramBoolean1){
          if(outcome.paramParticipantId1){
            if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
              return "Home&Over";
            } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
              return "Away&Over";
            }
          } else {
            return "Draw&Over";
          }
        } else {
            if(outcome.paramParticipantId1){
              if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
                return "Home&Under";
              } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
                return "Away&Under";
              }
            } else {
              return "Draw&Under";
            }
        }
      }

      case BettingTypeUtils.types.RELEGATION_TREBLE: {
        return participants[outcome.paramParticipantId1].name + "/" + participants[outcome.paramParticipantId2].name + "/" + participants[outcome.paramParticipantId3].name;
      }

      case BettingTypeUtils.types.WIN_AND_EACH_WAY:
      case BettingTypeUtils.types.NAME_THE_FINALISTS:
      case BettingTypeUtils.types.PROMOTION:
      case BettingTypeUtils.types.RELEGATION:
      case BettingTypeUtils.types.TOP_X:
      case BettingTypeUtils.types.ROCK_BOTTOM:
      case BettingTypeUtils.types.TOP_GOALSCORER:
      case BettingTypeUtils.types.WINNER:
      case BettingTypeUtils.types.HIGHEST_SCORING_TEAM:
      case BettingTypeUtils.types.LOWEST_SCORING_TEAM:
      case BettingTypeUtils.types.TEAM_TO_CONCEDE_MOST_GOALS:
      case BettingTypeUtils.types.TEAM_TO_CONCEDE_LEAST_GOALS:
      case BettingTypeUtils.types.TEAM_TO_SCORE_FASTEST_GOAL:
      case BettingTypeUtils.types.POLE_POSITION:
      case BettingTypeUtils.types.FASTEST_LAP:
      case BettingTypeUtils.types.FIRST_TO_RETIRE:
      case BettingTypeUtils.types.FIRST_LAP_LEADER:
      case BettingTypeUtils.types.TO_REACH_QUALIFYING_SESSION_THREE:
      case BettingTypeUtils.types.TO_BE_CLASSIFIED:
      case BettingTypeUtils.types.NOT_TO_FINISH_THE_RACE:
      case BettingTypeUtils.types.HAT_TRICK:
      case BettingTypeUtils.types.PLAYER_OF_THE_TOURNAMENT:
      case BettingTypeUtils.types.YOUNG_PLAYER_OF_THE_TOURNAMENT:
      case BettingTypeUtils.types.BEST_GOALKEEPER: {
        return participants[outcome.paramParticipantId1].name;
      }


      case BettingTypeUtils.types.GRAND_SLAM:
      case BettingTypeUtils.types.TRIPLE_CROWN: {
        if(outcome.paramParticipantId1 == null){
          return "None";
        } else {
          return participants[outcome.paramParticipantId1].name;
        }
      }

      case BettingTypeUtils.types.GAME_SCORE_SERVER: {
        if(outcome.paramFloat1 == null){
          return "Break";
        } else {
          if (outcome.paramFloat1 == 0){
            return "0";
          } else if (outcome.paramFloat1 == 15) {
            return "15";
          } else if (outcome.paramFloat1 == 30){
            return "30";
          } else if (outcome.paramFloat1 == 40) {
            return "40";
          }
        }
      }

      case BettingTypeUtils.types.METHOD_OF_FIRST_POINT_SCORED: {
        if(outcome.paramString1 === "2 Point Shot"){
          return "2 Point Shot";
        } else if(outcome.paramString1 === "3 Point Shot") {
          return "3 Point Shot";
        } else if(outcome.paramString1 === "Free Throw") {
          return "Free Throw";
        }
      }

      case BettingTypeUtils.types.TOTAL_SETS:{
        return outcome.paramFloat1.toString();
      }

      default:
        return "Id " + outcome.typeId;
    }
  },

  /**
   * Computes the "weight" of an outcome header. The "weight" of an outcome dictates the column position
   * within the odds table.
   *
   * Static bet types always display outcomes in the same position while for dynamic bet types the weight
   * will depend of data within the odds table.
   */
  calculateOutcomeHeaderWeight(outcome, eventParticipantsRelation, bettingTypeId) {
    const epr = OutcomeUtils.eventParticipantRelation(eventParticipantsRelation, outcome.paramParticipantId1) || OutcomeUtils.eventParticipantRelation(eventParticipantsRelation, outcome.paramParticipantId2);

    switch (bettingTypeId) {
      case BettingTypeUtils.types.SET_HANDICAP:
      case BettingTypeUtils.types.CORNER_HANDICAP:
      case BettingTypeUtils.types.ASIAN_HANDICAP:
      case BettingTypeUtils.types.TEAM_TOTAL_SCORE:
      case BettingTypeUtils.types.HOME_AWAY:
      case BettingTypeUtils.types.HOME_DRAW_AWAY:
      case BettingTypeUtils.types.MOST_SIXES:
      case BettingTypeUtils.types.HOME_DRAW_AWAY_WITH_HANDICAP:
      case BettingTypeUtils.types.GAME_HANDICAP_WITH_DRAW:
      case BettingTypeUtils.types.GAME_HANDICAP:
      case BettingTypeUtils.types.GAME_SCORE:
      case BettingTypeUtils.types.GAME_WINNER:
      case BettingTypeUtils.types.RACE_TO_X_GAMES:
      case BettingTypeUtils.types.QUALIFICATION:
      case BettingTypeUtils.types.NEXT_TEAM_TO_SCORE_WITH_MONEY_BACK_ON_NO_GOAL:
      case BettingTypeUtils.types.CLEAN_SHEET:
      case BettingTypeUtils.types.TO_WIN_BOTH_HALVES:
      case BettingTypeUtils.types.TO_WIN_EITHER_HALF:
      case BettingTypeUtils.types.TO_WIN_TO_NIL:
      case BettingTypeUtils.types.TO_SCORE_IN_BOTH_HALVES:
      case BettingTypeUtils.types.LAST_TEAM_TO_SCORE_WITH_MONEY_BACK_ON_NO_GOAL:
      case BettingTypeUtils.types.COME_FROM_BEHIND_AND_WIN:
      case BettingTypeUtils.types.COME_FROM_BEHIND_AND_DRAW:
      case BettingTypeUtils.types.COME_FROM_BEHIND_AND_WIN_OR_DRAW:
      case BettingTypeUtils.types.KICK_OFF:
      case BettingTypeUtils.types.TO_WIN_THE_FIRST_SET_AND_WIN_THE_MATCH:
      case BettingTypeUtils.types.TO_LOSE_THE_FIRST_SET_AND_WIN_THE_MATCH:
      case BettingTypeUtils.types.TO_WIN_THE_TOSS:
      case BettingTypeUtils.types.POINT_WINNER:
      case BettingTypeUtils.types.FIRST_180:
      case BettingTypeUtils.types.LAST_180:
      case BettingTypeUtils.types.DRAW_NO_BET:
      case BettingTypeUtils.types.HOME_NO_BET:
      case BettingTypeUtils.types.AWAY_NO_BET:
      case BettingTypeUtils.types.POINTS_HANDICAP:
      case BettingTypeUtils.types.CORNER_ASIAN_HANDICAP:
      case BettingTypeUtils.types.TO_CALL_FIRST_TIMEOUT:
      case BettingTypeUtils.types.TO_SCORE_LONGEST_TOUCHDOWN:
      case BettingTypeUtils.types.TO_COMMIT_FIRST_TURNOVER:
      case BettingTypeUtils.types.TO_HAVE_FIRST_COACH_CHALLENGE:
      case BettingTypeUtils.types.TO_HAVE_THE_SHORTEST_FIELD_GOAL:
      case BettingTypeUtils.types.TO_MAKE_LONGEST_FIELD_GOAL:
      case BettingTypeUtils.types.TO_COMMIT_FIRST_ACCEPTED_PENALTY: {
        if (OutcomeUtils.winnerOutcomeTypes.indexOf(outcome.typeId) >= 0) {
          if (epr) {
            if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
              return 0;
            }
            if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
              return 2;
            }
          }
        }
        return 1;
      }

      case BettingTypeUtils.types.GAME_X_AND_Y_WINNER:
      {
        if (outcome.paramParticipantId1) {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return 0;
          }
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return 2;
          }
        } else {
          return 1;
        }
      }

      case BettingTypeUtils.types.FIRST_TEAM_BOOKING:
        if (outcome.paramParticipantId1) {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return 0;
          }
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return 1;
          }
        } else {
          if (outcome.paramBoolean1Description != null && !outcome.paramBoolean1Description) {
            return 3;
          } else if (outcome.paramBoolean1Description == null) {
            return 2;
          } else {
            return 5;
          }
        }

      case BettingTypeUtils.types.TEAM_GOAL_IN_TIME_RANGE:
      case BettingTypeUtils.types.CORNERS_OVER_UNDER_IN_TIME_RANGE:
      case BettingTypeUtils.types.GOAL_IN_TIME_RANGE:
      case BettingTypeUtils.types.CORNER_KICK_IN_TIME_RANGE:
      case BettingTypeUtils.types.SETS_OVER_UNDER:
      case BettingTypeUtils.types.TIE_BREAK_POINTS_OVER_UNDER:
      case BettingTypeUtils.types.GAMES_WON_OVER_UNDER:
      case BettingTypeUtils.types.CORNERS_OVER_UNDER:
      case BettingTypeUtils.types.TRIES_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_CORNERS_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_BOOKINGS_OVER_UNDER:
      case BettingTypeUtils.types.CARDS_OVER_UNDER:
      case BettingTypeUtils.types.POINTS_OVER_UNDER:
      case BettingTypeUtils.types.WIDES_OVER_UNDER:
      case BettingTypeUtils.types.SHORTEST_TOUCHDOWN_SCORED:
      case BettingTypeUtils.types.LONGEST_TOUCHDOWN_SCORED:
      case BettingTypeUtils.types.SUCCESSFUL_FIELD_GOALS_MADE:
      case BettingTypeUtils.types.LONGEST_FIELD_GOAL_MADE:
      case BettingTypeUtils.types.TOUCHDOWNS_OVER_UNDER:
      case BettingTypeUtils.types.SACKS_OVER_UNDER:
      case BettingTypeUtils.types.POINTS_WON_OVER_UNDER:
      case BettingTypeUtils.types.SHOTS_ON_TARGET_OVER_UNDER:
      case BettingTypeUtils.types.TEAM_CARDS_OVER_UNDER:
      case BettingTypeUtils.types.OFFSIDES_OVER_UNDER:
      case BettingTypeUtils.types.OVER_UNDER_180S:
      case BettingTypeUtils.types.CHECKOUT_OVER_UNDER:
      case BettingTypeUtils.types.OWN_GOAL_SCORED:
      case BettingTypeUtils.types.BOTH_TEAMS_TO_SCORE:
      case BettingTypeUtils.types.NEXT_PENALTY_SCORED:
      case BettingTypeUtils.types.TIE_BREAK:
      case BettingTypeUtils.types.GAME_TO_DEUCE:
      case BettingTypeUtils.types.PENALTY_AWARDED:
      case BettingTypeUtils.types.PENALTY_SCORED:
      case BettingTypeUtils.types.GAME_POINT_WINNER_SERVER:
      case BettingTypeUtils.types.TEAM_CLEAN_SHEET:
      case BettingTypeUtils.types.SENDING_OFF:
      case BettingTypeUtils.types.TEAM_TO_WIN_TO_NIL:
      case BettingTypeUtils.types.GOAL_IN_BOTH_HALVES:
      case BettingTypeUtils.types.TO_GO_TO_OVERTIME:
      case BettingTypeUtils.types.TEAM_TO_SCORE_IN_BOTH_HALVES:
      case BettingTypeUtils.types.HAT_TRICK_SCORED:
      case BettingTypeUtils.types.A_SUBSTITUTE_TO_SCORE:
      case BettingTypeUtils.types.TEAM_TO_WIN_BOTH_HALVES:
      case BettingTypeUtils.types.TEAM_TO_WIN_EITHER_HALF:
      case BettingTypeUtils.types.TEAM_TO_SCORE:
      case BettingTypeUtils.types.XTH_SET_PLAYED:
      case BettingTypeUtils.types.TO_WIN_AT_LEAST_ONE_SET:
      case BettingTypeUtils.types.TO_GO_TO_PENALTIES:
      case BettingTypeUtils.types.SAFETY_CAR:
      case BettingTypeUtils.types.FIFTY_SCORED:
      case BettingTypeUtils.types.CENTURY_SCORED:
      case BettingTypeUtils.types.FIRST_BALL_DOT_OR_NOT:
      case BettingTypeUtils.types.TIED_MATCH:
      case BettingTypeUtils.types.COMPLETED_MATCH:
      case BettingTypeUtils.types.THREE_UNANSWERED_SCORES:
      case BettingTypeUtils.types.SCORE_IN_THE_FINAL_TWO_MINUTES:
      case BettingTypeUtils.types.LAST_SCORING_TEAM_WINS:
      case BettingTypeUtils.types.SPECIAL_TEAM_OR_DEFENSIVE_TOUCHDOWN_SCORED:
      case BettingTypeUtils.types.FIRST_SCORING_TEAM_WINS:
      case BettingTypeUtils.types.FIRST_TRY_CONVERTED:
      case BettingTypeUtils.types.DROP_GOAL:
      case BettingTypeUtils.types.CHECKOUT_170:
      case BettingTypeUtils.types.PLAYER_3_DART_AVERAGE:
      case BettingTypeUtils.types.NINE_DART_FINISH:
      case BettingTypeUtils.types.TO_POINT_CONVERSION: {
        if (outcome.paramBoolean1) {
          return 0;
        }
        return 1;
      }

      case BettingTypeUtils.types.OVER_UNDER:
      case BettingTypeUtils.types.YELLOW_CARDS_OVER_UNDER: {
        if(OutcomeUtils.overOutcomeTypes.indexOf(outcome.typeId) >= 0){
          return 0;
        }
        return 1;
      }

      case BettingTypeUtils.types.TIME_OF_NEXT_TEAM_GOAL:
      case BettingTypeUtils.types.CORRECT_SCORE:
      case BettingTypeUtils.types.TIME_RANGE_OF_TEAM_TO_SCORE_GOAL_X:
      case BettingTypeUtils.types.TOTAL_SCORE:
      case BettingTypeUtils.types.TIME_OF_NEXT_GOAL:
      case BettingTypeUtils.types.NUMBER_OF_CORNERS:
      case BettingTypeUtils.types.NUMBER_OF_GAMES:
      case BettingTypeUtils.types.NUMBER_OF_CARDS:
      case BettingTypeUtils.types.TEAM_NUMBER_OF_CORNERS:
      case BettingTypeUtils.types.TEAM_NUMBER_OF_PENALTIES:
      case BettingTypeUtils.types.RELEGATION_TREBLE:
      case BettingTypeUtils.types.WINNER:
      case BettingTypeUtils.types.TOP_GOALSCORER:
      case BettingTypeUtils.types.ROCK_BOTTOM:
      case BettingTypeUtils.types.RELEGATION:
      case BettingTypeUtils.types.TOP_X:
      case BettingTypeUtils.types.PROMOTION:
      case BettingTypeUtils.types.NAME_THE_FINALISTS:
      case BettingTypeUtils.types.WIN_AND_EACH_WAY:
      case BettingTypeUtils.types.HIGHEST_SCORING_TEAM:
      case BettingTypeUtils.types.LOWEST_SCORING_TEAM:
      case BettingTypeUtils.types.TEAM_TO_CONCEDE_MOST_GOALS:
      case BettingTypeUtils.types.TEAM_TO_CONCEDE_LEAST_GOALS:
      case BettingTypeUtils.types.TEAM_TO_SCORE_FASTEST_GOAL:
      case BettingTypeUtils.types.POLE_POSITION:
      case BettingTypeUtils.types.FASTEST_LAP:
      case BettingTypeUtils.types.FIRST_TO_RETIRE:
      case BettingTypeUtils.types.FIRST_LAP_LEADER:
      case BettingTypeUtils.types.GRAND_SLAM:
      case BettingTypeUtils.types.TRIPLE_CROWN:
      case BettingTypeUtils.types.TO_REACH_QUALIFYING_SESSION_THREE:
      case BettingTypeUtils.types.TO_BE_CLASSIFIED:
      case BettingTypeUtils.types.NOT_TO_FINISH_THE_RACE:
      case BettingTypeUtils.types.HAT_TRICK:
      case BettingTypeUtils.types.PLAYER_OF_THE_TOURNAMENT:
      case BettingTypeUtils.types.YOUNG_PLAYER_OF_THE_TOURNAMENT:
      case BettingTypeUtils.types.BEST_GOALKEEPER:
        return outcome.visibleBettingOffers.length;

      case BettingTypeUtils.types.HEAD_TO_HEAD:
        if (outcome.paramString1 == 1) {
          return 0;
        }
        return 1;

      case BettingTypeUtils.types.METHOD_OF_VICTORY:
        if(outcome.paramString1 == "In 90 Minutes") {
          return 0;
        } else if(outcome.paramString1 == "In Extra Time"){
          return 1;
        } else {
          return 0;
        }

      case BettingTypeUtils.types.HEAD_TO_HEAD_TO_HEAD:
        if (outcome.paramString1 == 1) {
          return 0;
        } else if(outcome.paramString1 == 2) {
          return 1;
        } else {
          return 2;
        }

      case BettingTypeUtils.types.HALF_WITH_MOST_CORNERS:{
        if(outcome.paramEventPartId1 == null){
          return 1;
        } else if(outcome.paramEventPartId1 == EventPartUtils.types.FOOTBALL_FIRST_HALF){
          return 0;
        } else if(outcome.paramEventPartId1 == EventPartUtils.types.FOOTBALL_SECOND_HALF){
          return 2;
        }
      }

      case BettingTypeUtils.types.ODD_OR_EVEN:{
        if(OutcomeUtils.oddEvenOutcomeTypes.indexOf(outcome.typeId) >= 0){
          return 1;
        }
        return 0;
      }

      case BettingTypeUtils.types.TEAM_ODD_EVEN:
      case BettingTypeUtils.types.CORNERS_ODD_EVEN:
      case BettingTypeUtils.types.YELLOW_CARDS_ODD_EVEN:{
        if(outcome.paramBoolean1){
          return 0;
        }
        return 1;
      }

      case BettingTypeUtils.types.DOUBLE_CHANCE:{
        if(outcome.paramParticipantId1 == null){
          return 2;
        } else {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return 0;
          }
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return 1;
          }
        }
      }

      case BettingTypeUtils.types.HALF_TIME_FULL_TIME:{ // "1/1", "1/X", "1/2", "X/1", "X/X", "X/2", "2/1", "2/X", "2/2"
        if(outcome.paramParticipantId1 && outcome.paramParticipantId2){
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            if(outcome.paramParticipantId1 == outcome.paramParticipantId2) {
              return 0;
            } else {
              return 2;
            }
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            if(outcome.paramParticipantId1 == outcome.paramParticipantId2) {
              return 8;
            } else {
              return 6;
            }
          }
        } else if(outcome.paramParticipantId1 && outcome.paramParticipantId2 == null){
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return 1;
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return 7;
          }
        } else if (outcome.paramParticipantId1 == null && outcome.paramParticipantId2){
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return 3;
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return 5;
          }
        } else {
          return 4;
        }

      }

      case BettingTypeUtils.types.NEXT_TEAM_TO_SCORE:
      case BettingTypeUtils.types.LAST_TEAM_TO_SCORE:
      {
        if (outcome.paramParticipantId1 == null) {
          return 1;
        } else {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return 0;
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return 2;
          }
        }
      }

      case BettingTypeUtils.types.RACE_TO_X_GOALS:
      case BettingTypeUtils.types.RACE_TO_X_CORNERS:
      case BettingTypeUtils.types.RACE_TO_X_RUNS:
      case BettingTypeUtils.types.RACE_TO_X_FRAMES:
      case BettingTypeUtils.types.RACE_TO_X_POINTS:
      case BettingTypeUtils.types.TEAM_TO_SCORE_MOST_IN_TIME_RANGE:
      case BettingTypeUtils.types.TEAM_TO_SCORE_NEXT_TRY:
      case BettingTypeUtils.types.WINNER_OF_TIME_RANGE:
      case BettingTypeUtils.types.GAME_WIN_TO_DEUCE:
      case BettingTypeUtils.types.MOST_YELLOW_CARDS: {
        if (outcome.paramParticipantId1 == null) {
          return 2;
        } else {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return 0;
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return 1;
          }
        }
      }

      case BettingTypeUtils.types.MOST_BOOKINGS:
      case BettingTypeUtils.types.MOST_CORNERS:
      case BettingTypeUtils.types.MOST_180S:
      case BettingTypeUtils.types.HIGHEST_CHECKOUT:{
        if (outcome.paramParticipantId1 == null) {
          return 2;
        } else {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return 0;
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return 1;
          }
        }
      }

      case BettingTypeUtils.types.HIGHEST_OPENING_PARTNERSHIP: {
        if (outcome.paramParticipantId1 == null) {
          return 2;
        } else {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return 0;
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return 1;
          }
        }
      }

      case BettingTypeUtils.types.NEXT_CORNER_KICK:
      case BettingTypeUtils.types.LAST_CORNER_KICK:
      case BettingTypeUtils.types.NEXT_THROW_IN:
      case BettingTypeUtils.types.NEXT_GOAL_KICK:
      case BettingTypeUtils.types.NEXT_FREE_KICK:
      case BettingTypeUtils.types.FIRST_FREE_THROW: {
        if (outcome.paramParticipantId1 == null) {
          return 1;
        } else {
          if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
            return 0;
          } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
            return 2;
          }
        }
      }

      case BettingTypeUtils.types.HIGHEST_SCORING_EVENT_PART: {
        if (outcome.paramFloat1 == 2) { //HALVES
          if (outcome.paramEventPartId1 == null) {
            return 2;
          } else {
            if (outcome.paramEventPartId1 == 5 || outcome.paramEventPartId1 == 33 || outcome.paramEventPartId1 == 53 || outcome.paramEventPartId1 == 153 || outcome.paramEventPartId1 == 143 || outcome.paramEventPartId1 == 63) { //TODO: remove hardcodings
              return 0;
            } else if (outcome.paramEventPartId1 == 6 || outcome.paramEventPartId1 == 34 || outcome.paramEventPartId1 == 54 || outcome.paramEventPartId1 == 154 || outcome.paramEventPartId1 == 144 || outcome.paramEventPartId1 == 64) { //TODO: remove hardcodings
              return 1;
            }
          }
        } else if (outcome.paramFloat1 == 3) { //PERIODS
          if (outcome.paramEventPartId1 == null) {
            return 3;
          } else {
            if (outcome.paramEventPartId1 == 43 || outcome.paramEventPartId1 == 173) { //TODO: remove hardcodings
              return 0;
            } else if (outcome.paramEventPartId1 == 44 || outcome.paramEventPartId1 == 174) { //TODO: remove hardcodings
              return 1;
            } else if (outcome.paramEventPartId1 == 45 || outcome.paramEventPartId1 == 175) { //TODO: remove hardcodings
              return 2;
            }
          }
        } else if (outcome.paramFloat1 == 4) { //QUARTERS
          if (outcome.paramEventPartId1 == null) {
            return 4;
          } else {
            if (outcome.paramEventPartId1 == 35 || outcome.paramEventPartId1 == 65) { //TODO: remove hardcodings
              return 0;
            } else if (outcome.paramEventPartId1 == 36 || outcome.paramEventPartId1 == 66) { //TODO: remove hardcodings
              return 1;
            } else if (outcome.paramEventPartId1 == 37 || outcome.paramEventPartId1 == 67) { //TODO: remove hardcodings
              return 2;
            } else if (outcome.paramEventPartId1 == 38 || outcome.paramEventPartId1 == 68) { //TODO: remove hardcodings
              return 3;
            }
          }
        }
      }

      case BettingTypeUtils.types.MATCHBET_AND_TOTALS:{
        if(outcome.paramBoolean1){
          if (outcome.paramParticipantId1){
            if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
              return 0;
            } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
              return 4;
            }
          } else {
            return 2;
          }
        } else {
          if (outcome.paramParticipantId1){
            if (epr.participantRoleId === OutcomeUtils.participantRoleSE.HOME) {
              return 1;
            } else if (epr.participantRoleId === OutcomeUtils.participantRoleSE.AWAY) {
              return 5;
            }
          } else {
            return 3;
          }
        }
      }

      case BettingTypeUtils.types.GAME_SCORE_SERVER: {
        if (outcome.paramFloat1 == null){
          return 4;
        } else {
          if (outcome.paramFloat1 == 0){
            return 0;
          } else if (outcome.paramFloat1 == 15) {
            return 1;
          } else if (outcome.paramFloat1 == 30){
            return 2;
          } else if (outcome.paramFloat1 == 40) {
            return 3;
          }
        }
      }

      case BettingTypeUtils.types.METHOD_OF_FIRST_POINT_SCORED: {
        if (outcome.paramString1 === "2 Point Shot"){
          return 0;
        } else if(outcome.paramString1 === "3 Point Shot") {
          return 1;
        } else if(outcome.paramString1 === "Free Throw") {
          return 2;
        }
      }

      case BettingTypeUtils.types.TOTAL_SETS: {
        //TODO: depending on the type of the tournament, the max number
        // of sets played maybe 3 or 5.
        if (outcome.paramFloat1 == 2){
          return 0;
        } else if (outcome.paramFloat1 == 3){
          return 1;
        }
        //TODO: For max number of sets = 5
      }

      default:
        return -1;
    }
  }
};


function _formatParameter(parameter, bettingTypeId){
  let formattedParameter;
  switch(bettingTypeId){
    case BettingTypeUtils.types.SET_HANDICAP:
    case BettingTypeUtils.types.CORNER_HANDICAP:
    case BettingTypeUtils.types.ASIAN_HANDICAP:
    case BettingTypeUtils.types.SCORINGS_OVER_UNDER_IN_TIME_RANGE:
    case BettingTypeUtils.types.CORNERS_OVER_UNDER_IN_TIME_RANGE:
    case BettingTypeUtils.types.TEAM_SCORE_OVER_UNDER:
    case BettingTypeUtils.types.HOME_DRAW_AWAY_WITH_HANDICAP:
    case BettingTypeUtils.types.GAME_HANDICAP_WITH_DRAW:
    case BettingTypeUtils.types.GAME_HANDICAP:
    case BettingTypeUtils.types.OVER_UNDER:
    case BettingTypeUtils.types.SETS_OVER_UNDER:
    case BettingTypeUtils.types.TIE_BREAK_POINTS_OVER_UNDER:
    case BettingTypeUtils.types.GAMES_WON_OVER_UNDER:
    case BettingTypeUtils.types.CORNERS_OVER_UNDER:
    case BettingTypeUtils.types.TRIES_OVER_UNDER:
    case BettingTypeUtils.types.TEAM_CORNERS_OVER_UNDER:
    case BettingTypeUtils.types.TEAM_BOOKINGS_OVER_UNDER:
    case BettingTypeUtils.types.CARDS_OVER_UNDER:
    case BettingTypeUtils.types.YELLOW_CARDS_OVER_UNDER:
    case BettingTypeUtils.types.POINTS_OVER_UNDER:
    case BettingTypeUtils.types.WIDES_OVER_UNDER:
    case BettingTypeUtils.types.SHORTEST_TOUCHDOWN_SCORED:
    case BettingTypeUtils.types.LONGEST_TOUCHDOWN_SCORED:
    case BettingTypeUtils.types.SUCCESSFUL_FIELD_GOALS_MADE:
    case BettingTypeUtils.types.LONGEST_FIELD_GOAL_MADE:
    case BettingTypeUtils.types.TOUCHDOWNS_OVER_UNDER:
    case BettingTypeUtils.types.SACKS_OVER_UNDER:
    case BettingTypeUtils.types.POINTS_WON_OVER_UNDER:
    case BettingTypeUtils.types.SHOTS_ON_TARGET_OVER_UNDER:
    case BettingTypeUtils.types.TEAM_CARDS_OVER_UNDER:
    case BettingTypeUtils.types.OFFSIDES_OVER_UNDER:
    case BettingTypeUtils.types.OVER_UNDER_180S:
    case BettingTypeUtils.types.CHECKOUT_OVER_UNDER:
    case BettingTypeUtils.types.PLAYER_CENTURIES_OVER_UNDER:
    case BettingTypeUtils.types.POINTS_HANDICAP:
    case BettingTypeUtils.types.CORNER_ASIAN_HANDICAP: {
      if (parameter == Math.floor(parameter)) {
        formattedParameter = parseInt(parameter);
      }
      else if (Math.abs(parameter - Math.floor(parameter) - 0.25) < .0000001) {
        formattedParameter = parseInt(parameter - 0.25) + "," + (parameter + 0.25);
      }
      else if (parameter - Math.floor(parameter) == 0.75) {
        formattedParameter = (parameter - 0.25) + "," + parseInt(parameter + 0.25);
      }
      else {
        formattedParameter = parameter;
      }

      return formattedParameter;
    }
    default:
      return parameter;
  }
};

export default OutcomeUtils;
