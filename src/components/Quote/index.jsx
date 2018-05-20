import React from 'react';
import './index.css';

const Quote = ({quote, textColor}) => {
    const QuoteColor = {
        color: textColor,
    }
    return (
        <div className="Quote">
            <h1 className="Quote__text" style={QuoteColor}>{quote.quote}</h1>
            <h5 className="Quote__author">{quote.author}</h5>
        </div>
    )
}
 
export default Quote;