var AppDispatcher = require('../dispatcher/AppDispatcher');
var QuoteConstants = require('../constants/QuoteConstants');

// Define quote actions object

var QuoteActions = {

  // Receive inital quote data.
  receiveQuote: function(data) {
    AppDispatcher.handleAction({
      actionType: QuoteConstants.RECEIVE_DATA,
      data:data
    })
  }

};

module.exports = QuoteActions;
