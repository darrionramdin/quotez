import React from 'react';
import './index.css';

const SavedQuoteCard = ({quote, author, bgColor, textColor}) => {
    const SavedQuoteCardStyles = {
        background: bgColor,
        color: textColor
    }
    return (
        <div className="SavedQuoteCard" style={SavedQuoteCardStyles}>
            <h3 className="SavedQuoteCard__quote">{quote}</h3>
            <h5 className="SavedQuoteCard_author">{author}</h5>
        </div>
    )
}
 
export default SavedQuoteCard;