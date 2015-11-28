var QuoteActions = require('../actions/QuoteActions');

module.exports = {
  getQuoteData: function() {
    var urlEndpoint =
    "https://andruxnet-random-famous-quotes.p.mashape.com/cat={category}";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", urlEndpoint, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("X-Mashape-Key", "ydxl6XijNmmshwAMekCSwk1DlQHSp1NLi9JjsnAXbrLroZYKCx");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        QuoteActions.receiveQuote(data);
      }
    }
    xhr.send();
  };

}
