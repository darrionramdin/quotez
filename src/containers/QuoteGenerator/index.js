import React, { Component } from 'react';
import axios from 'axios';
import randomColor from 'randomcolor';
import './index.css';
import Quote from '../../components/Quote';
import GenerateQuoteButton from '../../components/GenerateQuoteButton';
import SaveQuoteButton from '../../components/SaveQuoteButton';
import {NavLink} from 'react-router-dom';

class QuoteGenerator extends Component {
    state = {
        quote: {
            quote: '',
            author: ''
        },
        bgColor: '',
        textColor: ''
    }

    componentDidMount() {
        this.setState({
            quote: {
                quote: 'being grateful makes you gorgeous',
                author: 'Emily Davidson'
            },
            bgColor: randomColor(),
            textColor: randomColor()
        })
    }

    generateNewColor = () => {
        this.setState({
            bgColor: randomColor(),
            textColor: randomColor()
        })
    }

    generateQuote = () => {
        axios.get('https://talaikis.com/api/quotes/random/')
            .then(response => {
                let newQuote = Object.assign({}, this.state.quote, {
                    quote: response.data.quote,
                    author: response.data.author
                });
                this.setState({quote: newQuote});
                this.generateNewColor();
            })
    }

    saveQuote = () => {
        let key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        let value = {
            quote: this.state.quote,
            bgColor: this.state.bgColor, 
            textColor: this.state.textColor,
        }
        localStorage.setItem(key, JSON.stringify(value));
    }

    render() { 
        const QuoteGeneratorStyles = {
            height: "100vh",
            width: "100%",
            background: this.state.bgColor,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }
        return ( 
            <div className="QuoteGenerator" style={QuoteGeneratorStyles}>
                <NavLink className="QuoteGenerator-nav" to="/saved">View Saved Quotes</NavLink>
                <Quote quote={this.state.quote} textColor={this.state.textColor} />
                <GenerateQuoteButton onGenerateClick={this.generateQuote} />
                <SaveQuoteButton onSaveClick={this.saveQuote} />
            </div>
         )
    }
}

 
export default QuoteGenerator;