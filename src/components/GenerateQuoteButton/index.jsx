import React from 'react';
import './index.css';

const GenerateQuoteButton = ({onGenerateClick}) => {
    return (
        <div className="GenerateQuoteButton">
            <button onClick={onGenerateClick} className="GenerateQuoteButton__button">Show a new quote</button>
        </div>
    )
}
 
export default GenerateQuoteButton;