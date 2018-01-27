import React, { Component } from 'react';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';


class Tickers extends Component {
    constructor(props){    
    super(props);
    //this object partly contains stuff from cyptocurrency component
        this.state = {
            data: [
                {
                    id: "bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                    id: "ethereum",
                    name: "Ethereum",
                    symbol: "ETH",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                    id: "litecoin",
                    name: "Litecoin",
                    symbol: "LTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                }
            ]
        }
    }

    render() {
        //iterates through the this.state.data array
        //inserting each element into its own Cryptocurrency component
        //by passing the information in as a property called  data
        //for the child component to access using  this.props.data
        var tickers = this.state.data.map((currency) =>
        <Cryptocurrency data={currency} key={currency.id} />
    );
            // initial code, replaced with above after a single currency component cerated
            // var tickers = this.state.data.map((currency) =>
            //     <li key={currency.id}>
            //         <h3>{currency.id}</h3>
            //         <h4>{currency.price} USD</h4>
            //     </li>
            // );

        return (
            <div className="tickers-container">
                <ul className="tickers">{tickers}</ul>
                <p>Information updated every 10 seconds courtesy of coinmarketcap.com</p>
        </div>
        );
    }
}


export default Tickers;