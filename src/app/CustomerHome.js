import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";
import { Box, Tile, Image, Heading } from "react-bulma-components/full";
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bulma-components';
import swoplogo from './images/logo.svg';
import coffee from './images/coffee.JPG';
import bagel from './images/bagel.JPG';
import wrap from './images/wrap.JPG';
import donuts from './images/donuts.JPG';
import timbits from './images/timbits.JPG';
import pastries from './images/pastries.JPG';
import BlockchainClient from '../blockchain';
import {getMedia} from '../components/api';
import {getRestoUid} from '../components/api';

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
            <div class="column right">
                {/* <NavLink className="navbar-item" to="/swop-amadeus/swopbooking" exact> */}
                <span><a class="button" style={{width: 100}} onClick={() => this.setState({ open: true })}>Complete Profile</a></span>
                {/* </NavLink> */}
                {/* <figure class="navbar-item image has-text-white center">
                  Sign In 
                  <span class="icon is-large">
                  <i class="fas fa-user" style={{width: 50 , height: 50 }}></i>
                  </span>
                </figure> */}
                <span><a class="button" style={{width: 100}}>New Customer</a></span>
                <span><a class="button" style={{width: 100}}>Stamp</a></span>
            </div>

            <div class="center">

              {/* <Tile size={3} vertical>
                <Tile kind="parent">
                  <Tile renderAs="article" kind="child" notification color="success">
                    <div className="content">
                      <Heading>Tall tile</Heading>
                      <Heading subtitle>With even more content</Heading>
                    </div>
                  </Tile>
                </Tile>
              </Tile> */}

              <Box>

              {/* <Tile size={3} vertical>
                <Tile kind="parent">
                  <Tile renderAs="article" kind="child" notification color="success">
                    <div className="content">
                      <Heading>Tall tile</Heading>
                      <Heading subtitle>With even more content</Heading>
                    </div>
                  </Tile>
                </Tile>
              </Tile> */}

                <Tile kind="ancestor">

                  <Tile size={15} vertical>

                    <Tile>
                      <Tile kind="parent">
                        <Tile renderAs="article" kind="child" notification color="gray">
                          <Heading>Coffee</Heading>
                          <Image size="4by3" src={ coffee } />
                          <NavLink className="navbar-item" to="/swop-amadeus/postdetails" activeClassName="is-active" exact>
                            <button className="button is-rounded is-black is-fullwidth" onClick={this.handleClick}>Redeem</button>
                          </NavLink>
                        </Tile>
                      </Tile>
                      <Tile kind="parent">
                        <Tile renderAs="article" kind="child" notification color="gray">
                          <Heading>Bagel</Heading>
                          <Image size="4by3" src={ bagel } />
                          <NavLink className="navbar-item" to="/swop-amadeus/postdetails" activeClassName="is-active" exact>
                            <button className="button is-rounded is-black is-fullwidth" onClick={this.handleClick}>Redeem</button>
                          </NavLink>
                        </Tile>
                      </Tile>
                      <Tile kind="parent">
                        <Tile renderAs="article" kind="child" notification color="gray">
                          <Heading>Wrap</Heading>
                          <Image size="4by3" src= { wrap } />
                          <NavLink className="navbar-item" to="/swop-amadeus/postdetails" activeClassName="is-active" exact>
                            <button className="button is-rounded is-black is-fullwidth" onClick={this.handleClick}>Redeem</button>
                          </NavLink>
                        </Tile>
                      </Tile>
                    </Tile>
                  </Tile>
                </Tile>
                <Tile kind="ancestor">
                  <Tile size={8} vertical>
                    <Tile>
                      <Tile kind="parent">
                        <Tile renderAs="article" kind="child" notification color="gray">
                          <Heading>Donuts</Heading>
                          <Image size="4by3" src={ donuts } />
                          <NavLink className="navbar-item" to="/swop-amadeus/postdetails" activeClassName="is-active" exact>
                            <button className="button is-rounded is-black is-fullwidth" onClick={this.handleClick}>Redeem</button>
                          </NavLink>
                        </Tile>
                      </Tile>
                      <Tile kind="parent">
                        <Tile renderAs="article" kind="child" notification color="gray">
                          <Heading>Timbits</Heading>
                          <Image size="4by3" src={ timbits } />
                          <NavLink className="navbar-item" to="/swop-amadeus/postdetails" activeClassName="is-active" exact>
                            <button className="button is-rounded is-black is-fullwidth" onClick={this.handleClick}>Redeem</button>
                          </NavLink>
                        </Tile>
                      </Tile>
                      <Tile kind="parent">
                        <Tile renderAs="article" kind="child" notification color="gray">
                          <Heading>Pastries</Heading>
                          <Image size="4by3" src={ pastries } />
                          <NavLink className="navbar-item" to="/swop-amadeus/postdetails" activeClassName="is-active" exact>
                            <button className="button is-rounded is-black is-fullwidth" onClick={this.handleClick}>Redeem</button>
                          </NavLink>
                        </Tile>
                      </Tile>
                    </Tile>
                  </Tile>
                </Tile>
              </Box>
            </div>

            <Modal show={this.state.open} onClose={() => this.setState({ open: false })} style={customStyles}>
                <div class="modal-background"></div>
                <div class="modal-card">
            <section class="modal-card-body">
            <div>
                <p class="modal-card-title" alignment="center">Complete your profile: </p>
                <p>Enter your User ID and password.</p>
                <br></br>
                </div>
                    <form>
                    <div className="field">
                        <label className="label">User ID</label>
                        <div className="control">
                            <input className="input" type="text" name="userId" required />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" name="password" required />
                        </div>
                    </div>
                    </form>
            </section>
            <footer class="modal-card-foot">
                <NavLink className="navbar-item" to="/swop-amadeus/postdetails" activeClassName="is-active" exact>
                <button className="button is-block is-info is-fullwidth" onClick={this.handleSubmit}>Redeem</button>
                </NavLink>
                <button class="button" onClick={() => this.setState({ open: false })}>Cancel</button>
            </footer>
                    </div>
            </Modal>
        </div>
    
    )
    }};

    export default CustomerHome;