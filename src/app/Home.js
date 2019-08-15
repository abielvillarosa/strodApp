import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Modal } from 'react-bulma-components';
import swoplogo from './images/logo.svg';
import BlockchainClient from '../blockchain';
import { getRestoUid, addNewResto } from '../components/api';


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

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {registrationopen: false, signupopen: false, signinopen: false, restoUid: '', redirect: false, result : '', txHash : ''};
        this.handleClick = this.handleClick.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
      }

    handleRegister(e){
        e.preventDefault()
    
        // let customerId = 1;
        // let customerAddress = '0x10A21879783A76c20A70f4838dc18E01d0a1E8e7';
        // blockchain.newCustomerRedemptionChannel(customerId, customerAddress).then( res => {
        //   console.log(res);
        //   this.setState({txHash : res});
        // })
      
        getRestoUid().then(res => {
          console.log('res', res.restouid);
          let restouid = res.restouid
          blockchain.newStro(res.restouid).then(res => {
            console.log(res);
            let restoName = 'bk'
            let restoAddress = res
            let param = {
              "restoUid": restouid,
              "restoName": restoName,
              "restoAddress": restoAddress
            }
            addNewResto(param)
            localStorage.setItem('restoUid', restouid);
            this.setState({redirect: true, txHash :res, restoUid: restouid });
          })
        });

        // blockchain.newStro().then(res => {
        //   console.log(res);
        //   this.setState({redirect: true, txHash :res });
        // })
    };

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
          this.setState({redirect: true, txHash :res });
        })
      };

    render () {
      if (this.state.redirect) {
        return <Redirect push to={{pathname: "/stroDapp/RestoHome", state: {result: (this.state.restoUid)}}}/>;
        // return <Redirect push to={{pathname: "/stroDapp/CustomerHome"}}/>;
        }
    return (
    <div class="columns is-mobile is-centered is-vcentered">
        <section class="hero is-halfheight has-bg-img">
          <div class="hero-head heading has-text-weight-bold">
            <div class="columns is-mobile is-marginless">
              <div class="column left">
                <figure class="navbar-item image">
                  <img src={ swoplogo } style={{width: 50 , height: 200 }}></img>
                </figure>
              </div>
              <div class="column right">
                {/* <NavLink className="navbar-item" to="/swop-amadeus/swopbooking" exact> */}
                {/* <NavLink className="navbar-item" to="/stroDapp/RestoHome" activeClassName="is-active" exact> */}
                  {/* <span><a class="button" style={{width: 100}} onClick={this.handleClick}>Register</a></span> */}
                  <span><a class="button" style={{width: 100}} onClick={() => this.setState({ registrationopen: true })}>Register</a></span>
                {/* </NavLink> */}
                <span><a class="button" style={{width: 100}} onClick={() => this.setState({ signinopen: true })}>Sign In</a></span>
                {/* </NavLink> */}
                {/* <figure class="navbar-item image has-text-white center">
                  Sign In 
                  <span class="icon is-large">
                  <i class="fas fa-user" style={{width: 50 , height: 50 }}></i>
                  </span>
                </figure> */}
              </div>
            </div>
          </div>
          <Modal show={this.state.registrationopen} onClose={() => this.setState({ registrationopen: false })} style={customStyles}>
              <div class="modal-background"></div>
              <div class="modal-card">
                <section class="modal-card-body">
                <div>
                  <p class="modal-card-title" alignment="center">Sign Up</p>
                  <p>Enter your Company Name.</p>
                  <br></br>
                  </div>
                      <form>
                        <div className="field">
                            <label className="label">Company Name</label>
                            <div className="control">
                              <input className="input" type="text" name="companyName" required />
                            </div>
                        </div>
                      </form>
                </section>
                <footer class="modal-card-foot">
                  <NavLink className="navbar-item" to="/stroDapp/RestoHome" activeClassName="is-active" exact>
                    <button className="button is-block is-info is-fullwidth" onClick={this.handleRegister}>Register</button>
                  </NavLink>
                  <button class="button" onClick={() => this.setState({ registrationopen: false })}>Cancel</button>
                </footer>
              </div>
          </Modal>
          <Modal show={this.state.signinopen} onClose={() => this.setState({ signinopen: false })} style={customStyles}>
              <div class="modal-background"></div>
              <div class="modal-card">
          <section class="modal-card-body">
          <div>
            <p class="modal-card-title" alignment="center">Verification</p>
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
              <button className="button is-block is-info is-fullwidth" onClick={this.handleClick}>Submit</button>
            </NavLink>
            <button class="button" onClick={() => this.setState({ open: false })}>Cancel</button>
          </footer>
                </div>
          </Modal>
          </section>
        <td>
            <br></br>
            <br></br>
        <tr>
         {/* <img src={swoplogo} alt="logo" /> */}
         <br></br>
         <br></br>
        </tr>
        <tr></tr>
        <tr>
        {/* <span>
        <td>
        <NavLink className="navbar-item" to="/swop/postbooking" activeClassName="is-active" exact>
        <span><Button color="info" size="large" rounded outlined>Post Booking</Button></span>
        </NavLink>
        </td>
        <td>
        <NavLink className="navbar-item" to="/swop/swopbooking" activeClassName="is-active" exact>
        <span><Button color="info" size="large" rounded outlined>Swop Booking</Button></span>
        </NavLink>
        </td>
        </span> */}

        <div>
        <div>
                <NavLink className="navbar-item" to="/swop-amadeus/swopbooking" exact>
                <span><a class="button is-black" style={{width: 300}}>Restaurant Owner</a></span>
                </NavLink>
        </div>
        <div>
                <NavLink className="navbar-item" to="/stroDapp/CustomerHome" exact>
                <span><a class="button is-black" style={{width: 300}} onClick={() => this.setState({ open: true })}>Customer</a></span>
                </NavLink>
        </div>
        </div>
        </tr>
        </td>
    </div>
    )
}}
    export default Home