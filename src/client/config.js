export default {

  /*
   * Websocket endpoint for WWW-M1 stage server
   */
  bbfeWSEndpoint: 'http://10.0.11.148:8080/BBFE/websocket',

  /*
   * Websocket endpoint for a localhost BBFEtestClient repeater (if any)
   */
  // bbfeWSEndpoint:  'http://localhost:9999/BBFETestClient/repeaterWebsocket/',

  /*
   * Websocket endpoint for backend hosted on a developer's machine (use the
   * appropriate IP for the developer machine)
   */
  //bbfeWSEndpoint: 'http://10.10.1.153:8080/BBFE/websocket',

  /*
   * Used inside webapi where the updates coming from the server are batched
   * at a specific time interval
   */
  batchedUpdatesInterval: 500,

  /*
   * The default odds format for display offer/odds
   */
  defaultOddsFormat: 'EU',

  /*
   * Interval at which the odds freshness gets updated
   */
  liveFreshnessTicker: 3000,

  /*
   * Interval at which non-live events odds freshness gets updated
   */
  nonliveFreshnessTicker: 30000,

  /*
   * The timeout after which the highlight of an offer cell disappears
   */
  oddsCellHighlightTimeout: 5000,

  /*
   * Time to wait for the websocket connection to open, before logging an error
   */
  connectionTimeout: 5000

}
