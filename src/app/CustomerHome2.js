import React, { Component } from 'react';
// import { Button } from "react-bulma-components/full";
import { Box, Tile, Image, Heading } from "react-bulma-components/full";
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bulma-components';
import coffee from './images/coffee.JPG';
import bagel from './images/bagel.JPG';
import wrap from './images/wrap.JPG';
import donuts from './images/donuts.JPG';
import timbits from './images/timbits.JPG';
import pastries from './images/pastries.JPG';
import BlockchainClient from '../blockchain';
import {getRestoUid} from '../components/api';

import Gallery from './Gallery.js';
import NavBar from './NavBar';

const blockchain = new BlockchainClient();

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class CustomerHome extends Component {
    constructor(props){
        super(props);
        this.state = {open: false, restaurantId: '', redirect: false, result : '', txHash : ''};
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
    
        blockchain.stroRedeem().then(res => {
          console.log(res);
          this.setState({txHash :res });
        })
      };

      componentDidMount() {
        // getMedia();
        getRestoUid().then(res => {
          console.log('res', res.restouid);
        });
      }

    render () {
    return (
        <div>
            <NavBar />
            <div class="columns">
                <Gallery></Gallery>
            </div>
        </div>
    )
    }
}

export default CustomerHome;