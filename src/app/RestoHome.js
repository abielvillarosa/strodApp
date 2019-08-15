import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bulma-components';
import swoplogo from './images/logo.svg';
import BlockchainClient from '../blockchain';
import {getMedia} from '../components/api';
import { getRestoUid, addNewProduct } from '../components/api';

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

class RestoHome extends Component {
    constructor(props){
        super(props);
        this.state = {open: false, redirect: false, result : '', txHash : '', restoUid: '', productName: '', requiredPts: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleSubmit(e){
        e.preventDefault()

        let param = {
            "restoUid": this.state.restoUid,
            "productName": this.state.productName,
            "requiredPts": this.state.requiredPts
          }
          addNewProduct(param)
          this.setState({ open: false })
    }

    handleChange (evt) {
        evt.preventDefault()
        this.setState({ [evt.target.name]: evt.target.value });
      }

    componentDidMount() {
        getMedia();
        let restoUid = localStorage.getItem('restoUid');
        console.log('restoUid2', restoUid)
        this.setState({restoUid: restoUid})
        let currRestoUid = this.state.restoUid
        console.log('currRestoUid', currRestoUid)
    }

    render () {
    return (
        <div>
            <div class="column right">
                {/* <NavLink className="navbar-item" to="/swop-amadeus/swopbooking" exact> */}
                <span><a class="button" style={{width: 100}} onClick={() => this.setState({ open: true })}>Add Product</a></span>
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
            <Modal show={this.state.open} onClose={() => this.setState({ open: false })} style={customStyles}>
                <div class="modal-background"></div>
                <div class="modal-card">
            <section class="modal-card-body">
            <div>
                <p class="modal-card-title" alignment="center">Add Product: </p>
                <p>Enter your product details to add to the catalogue.</p>
                <br></br>
                </div>
                    <form>
                    <div className="field">
                        <label className="label">Product Name</label>
                        <div className="control">
                            <input className="input" type="text" name="productName" onChange={this.handleChange} required />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Required Points</label>
                        <div className="control">
                            <input className="input" type="text" name="requiredPts" onChange={this.handleChange} required />
                        </div>
                    </div>
                    </form>
            </section>
            <footer class="modal-card-foot">
                <NavLink className="navbar-item" to="/swop-amadeus/postdetails" activeClassName="is-active" exact>
                <button className="button is-block is-info is-fullwidth" onClick={this.handleSubmit}>Submit</button>
                </NavLink>
                <button class="button" onClick={() => this.setState({ open: false })}>Cancel</button>
            </footer>
                    </div>
            </Modal>
        </div>
    
    )
    }};

    export default RestoHome;