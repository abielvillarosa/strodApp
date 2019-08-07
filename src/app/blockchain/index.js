import { ethers } from 'ethers'
import PublicEntryABI from './abi/PublicEntry.json'


export default class BlockchainClient {

    constructor(){
        window.ethereum.enable()
        this.provider = new ethers.providers.Web3Provider(window.web3.currentProvider)
        this.signer = this.provider.getSigner()
        this.dashboardContract = new ethers.Contract("0x6f13b580a686d464d7b0c2136fb8d0cc2c0d4413", PublicEntryABI, this.signer)
    }

    async newStro() {
        let txHash = await this.dashboardContract.newStro();
        console.log(txHash);
        return txHash.hash;
    }

    async newCustomerRedemptionChannelId(customerId, channelId, customerAddress) {
        let txHash = await this.dashboardContract.newCustomerRedemptionChannelId(customerId, channelId, customerAddress);
        console.log(txHash);
        return txHash.hash;
    }

    async stroStamping(customerId, channelId) {
        let txHash = await this.dashboardContract.stroStamping(customerId, channelId);
        console.log(txHash);
        return txHash.hash;
    }

    async stroRedeem(customerId, channelId, nonce, amount, message, v, r, s) {
        let txHash = await this.dashboardContract.stroRedeem(customerId, channelId, nonce, amount, message, v, r, s);
        console.log(txHash);
        return txHash.hash;
    }

    async disputeRedemption(customerId, channelId, newNonce, amount, message, v, r, s) {
        let txHash = await this.dashboardContract.disputeRedemption(customerId, channelId, newNonce, amount, message, v, r, s);
        console.log(txHash);
        return txHash.hash;
    }

    async stroPay(customerId, channelId) {
        let txHash = await this.dashboardContract.stroPay(customerId, channelId);
        console.log(txHash);
        return txHash.hash;
    }

    async newCustomerRedemptionChannel(customerId, customerAddress) {
        let txHash = await this.dashboardContract.newCustomerRedemptionChannel(customerId, customerAddress);
        console.log(txHash);
        return txHash.hash;
    }
    
}