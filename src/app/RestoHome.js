import React, { Component } from 'react';
// import { Button } from "react-bulma-components/full";
// import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bulma-components';
import BlockchainClient from '../blockchain';
import { addNewProduct, getProducts, getCustomerUid, addNewCustomer, earnStamp } from '../components/api';
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

class RestoHome extends Component {
    constructor(props){
        super(props);
        this.state = {open: false, redirect: false, result : '', txHash : '', restoUid: '', restoAddress: '', productName: '', requiredPts: 0, customeruid: 0, customerAddress: '', earnedPts: 0};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewCust = this.handleNewCust.bind(this);
        this.handleStamp = this.handleStamp.bind(this);
      }
    
    handleSubmit(e){
        e.preventDefault()

        let param = {
            "restoUid": this.state.restoUid,
            "productName": this.state.productName,
            "requiredPts": this.state.requiredPts
          }
          addNewProduct(param).then(res => {
            // let productParam = {
            //     "restoUid": this.state.restoUid,
            // }
            let productParam = this.state.restoUid
            // let productParam = 98
            getProducts(productParam).then(res => {
                console.log('getProducts', res)
            });
          })
          this.setState({ open: false })
          
          
    }

    handleChange (evt) {
        evt.preventDefault()
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleNewCust(e) {
        e.preventDefault()
        getCustomerUid().then(res => {
            console.log('res.customeruid', res.customeruid);
            let restoUid = this.state.restoUid
            let customerUid = res.customeruid
            let customerAddress = this.state.customerAddress
            blockchain.newCustomerRedemptionChannelId(restoUid, customerUid, customerAddress).then(res => {
              console.log('blockchainres',res);
              console.log('restoUid', restoUid)
              console.log('customerUid', customerUid)
              console.log('customerAddress', customerAddress)
              this.setState({customeruid: customerUid})
              let param = {
                "restoUid": restoUid,
                "customerUid": customerUid,
                "customerAddress": customerAddress
              }
              addNewCustomer(param)
            })
        })
    }

    handleStamp(e) {
        e.preventDefault()
        let customerUid = this.state.customeruid
            console.log('outside customerUid', customerUid)
        getCustomerUid().then(res => {
            // console.log('res.customeruid', res.customeruid);
            let restoUid = this.state.restoUid
            console.log('res restoUid', restoUid )
            let restoAddress = this.state.restoAddress
            // let customerUid = res.customeruid
            let customerUid = this.state.customeruid
            console.log('inside customerUid', customerUid)
            let earnedPts = parseInt(this.state.earnedPts)
            console.log('earnedPts', earnedPts)
            // let blockchainParam = {
            //     value: earnedPts,
            //     from: restoAddress            
            // }
            blockchain.stroStamping(restoUid, customerUid, earnedPts).then(res => {
              console.log('blockchainstampres',res);
              let param = {
                "restoUid": restoUid,
                "customerUid": customerUid,
                "earnedPts": earnedPts
              }
              earnStamp(param)
            })
        })
    }

    componentDidMount() {
        let restoUid = localStorage.getItem('restoUid');
        let restoAddress = localStorage.getItem('restoAddress');
        this.setState({restoUid: restoUid, restoAddress: restoAddress})
    }

    render () {
    return (
        <div>
            <NavBar />
            <div class="columns">

                <div>
                    <div>
                    Customer Address:
                    <input className="input" type="text" name="customerAddress" onChange={this.handleChange} required />
                    <a class="button is-black" style={{width: 150}} onClick={this.handleNewCust} is-primary>New Customer</a>
                    <br />
                    Required Points:
                    <input className="input" type="text" name="earnedPts" onChange={this.handleChange} required />
                    <a class="button is-black" style={{width: 150}} onClick={this.handleStamp}>Stamp</a>
                    </div>
                </div>
                <div>
                    <div className="button2">
                    <span><a class="button is-black" style={{width: 100}} onClick={() => this.setState({ open: true })}>Add Product</a></span>
                    </div>
                    <Gallery></Gallery>
                </div>
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
                            <input className="input" type="number" name="requiredPts" onChange={this.handleChange} required />
                        </div>
                    </div>
                    </form>
            </section>
            <footer class="modal-card-foot">
                {/* <NavLink className="navbar-item" to="/swop-amadeus/postdetails" activeClassName="is-active" exact> */}
                <button className="button is-block is-info is-fullwidth" onClick={this.handleSubmit}>Submit</button>
                {/* </NavLink> */}
                <button class="button" onClick={() => this.setState({ open: false })}>Cancel</button>
            </footer>
                    </div>
            </Modal>
        </div>
    
    )
    }};

    export default RestoHome;