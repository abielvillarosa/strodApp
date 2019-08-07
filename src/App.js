import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlockchainClient from './app/blockchain';

const blockchain = new BlockchainClient();

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {restaurantId: '', redirect: false, result : '', txHash : ''};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault()

    // let customerId = 1;
    // let customerAddress = '0x10A21879783A76c20A70f4838dc18E01d0a1E8e7';
    // blockchain.newCustomerRedemptionChannel(customerId, customerAddress).then( res => {
    //   console.log(res);
    //   this.setState({txHash : res});
    // })

    blockchain.newStro().then(res => {
      console.log(res);
      this.setState({txHash :res });
    })
  };


  render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
                {/* <NavLink className="navbar-item" to="/swop-amadeus/swopbooking" exact> */}
                <span><a class="button" style={{width: 30}} onClick={this.handleClick}>Register</a></span>
                {/* </NavLink> */}
      </div>
      </header>

    </div>
  );
}
};


export default Home;
