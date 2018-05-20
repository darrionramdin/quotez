import React from 'react';
import './index.css';

const SaveQuoteButton = ({onSaveClick}) => {
    return (
        <div className="SaveQuoteButton">
            <button onClick={onSaveClick} className="SaveQuoteButton__button">Save This Quote</button>
        </div>
    )
}
 
export default SaveQuoteButton;