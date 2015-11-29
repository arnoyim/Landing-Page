var React = require('react');
var QuoteStore = require('../stores/QuoteStore');
var FluxQuote = require('./FluxQuote.react');

// Method to retrieve state from Stores.

function getQuoteState() {
  return {
    quote : QuoteStore.getQuote()
  };
}

// Quote Controller View.
var QuoteComponent = React.createClass({

  getInitialState: function() {
    return getQuoteState();
  },
  // Future features (change location).
  componentDidMount: function() {
    QuoteStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    QuoteStore.removeChangeListener(this._onChange);
  },

  // Rendering the Child components.
  render: function() {
    return (
      <div className="quote">
      <FluxQuote quote={this.state.quote} />
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getQuoteState());
  }

});

module.exports = QuoteComponent;
