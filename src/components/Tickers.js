import React, { Component } from 'react';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';
class Tickers extends Component {
    constructor(props){    
    super(props);
    //this object partly contains some propetries of cyptocurrency component
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

    componentDidMount() {
        this.fetchCriptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
    }


    //make API call 4 data, axios has to be installed for this
    fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/")
            .then(response => {
                var wanted = ["bitcoin", "ethereum", "litecoin"];
                var result = response.data.filter(currency => wanted.includes(currency.id));
                this.setState({ data: result});
            })
            .catch(err => console.log(err));
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