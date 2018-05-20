import React, { Component } from 'react';
import './index.css';
import SavedQuoteCard from '../../components/SavedQuoteCard';
import {NavLink} from 'react-router-dom';
import backIcon from './assets/back.png';

class SavedQuotes extends Component {
    state = {
        quotes: null
    }

    componentDidMount() {
        let values =[], keys = Object.keys(localStorage), i = keys.length;
        while (i--){
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        this.setState({quotes: values});
    }

    clearQuotes = () => {
        localStorage.clear();
        this.setState({quotes: null});
    }

    render() {
        let quotesList = null;
        if(this.state.quotes){
            quotesList = this.state.quotes.map((quote, index) => {
                return (
                    <SavedQuoteCard key={index} quote={quote.quote.quote} author={quote.quote.author} bgColor={quote.bgColor} textColor={quote.textColor} />
                )
            } ) 
        } else {
            quotesList = null;
        }
        
        return ( 
            <div className="SavedQuotes">
                <div className="SavedQuotes-container">
                    <NavLink to="/">
                        <img src={backIcon} alt="Back" width="30" />
                    </NavLink>
                    <h1 className="SavedQuotes__heading">Saved Quotes</h1>
                    <button className="SavedQuotes-clear" onClick={this.clearQuotes}>Clear All Quotes </button>
                        <div className="SavedQuotes-list">
                        {quotesList}
                    </div>
                </div>
            </div>
         )
    }
}
 
export default SavedQuotes;