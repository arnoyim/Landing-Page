var React = require('react');

// Flux quote view.

var FluxQuote = React.createClass({
  render: function() {
    var quote = this.props.quote;
    var author = quote.author;
    return (
      <div className="flux-quote">
        <h3>{quote.quote}</h3>
        <p>{author}</p>
      </div> || ""
    );
  },

});

module.exports = FluxQuote;
