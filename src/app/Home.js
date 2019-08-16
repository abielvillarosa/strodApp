import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Modal } from 'react-bulma-components';
import BlockchainClient from '../blockchain';
import { getRestoUid, addNewResto } from '../components/api';
import Video from './Video';
import NavBar from './NavBar';
import { Typography, makeStyles } from '@material-ui/core';


const blockchain = new BlockchainClient();

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

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

    // const styleclasses = useStyles();

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
            localStorage.setItem('restoAddress', restoAddress);
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
    
        blockchain.newStro().then(res => {
          console.log(res);
          this.setState({redirect: true, txHash :res });
        })
      };



    render () {
      if (this.state.redirect) {
        return <Redirect push to={{pathname: "/strodApp/RestoHome", state: {result: (this.state.restoUid)}}}/>;
        // return <Redirect push to={{pathname: "/strodApp/CustomerHome"}}/>;
        }

    return (
    <div>
      <NavBar />
    {/* <div class="columns is-mobile is-centered is-vcentered"> */}
    <div class="columns is-mobile">
          
        {/* <section class="hero is-halfheight has-bg-img">

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
          </section> */}

        <div>
          <Video />
        </div>
        <div>
          <div class="headingtext">
          <Typography variant="h5">
              Save the turtles. 
              Save the Earth.
          </Typography>
          </div>
          <span><a class="button is-black" style={{width: 300}} onClick={() => this.setState({ registrationopen: true })}>Register as Restaurant</a></span>
          <NavLink to="/strodApp/RestoHome" exact>
            <span><a class="button is-black" style={{width: 300}} onClick={() => this.setState({ open: true })}>Restaurant Owner</a></span>
          </NavLink>
          <NavLink to="/strodApp/CustomerHome2" exact>
            <span><a class="button is-black" style={{width: 300}} onClick={() => this.setState({ open: true })}>Customer</a></span>
          </NavLink>
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
                  <NavLink className="navbar-item" to="/strodApp/RestoHome" activeClassName="is-active" exact>
                    <button className="button is-block is-info is-fullwidth" onClick={this.handleRegister}>Register</button>
                  </NavLink>
                  <button class="button" onClick={() => this.setState({ registrationopen: false })}>Cancel</button>
                </footer>
              </div>
          </Modal>

        </div>

    )
}}
    export default Home