import { ethers } from 'ethers'
import PublicEntryABI from './abi/PublicEntry.json'


export default class BlockchainClient {

    constructor(){
        window.ethereum.enable()
        this.provider = new ethers.providers.Web3Provider(window.web3.currentProvider)
        this.signer = this.provider.getSigner()
        // this.dashboardContract = new ethers.Contract("0xd6c2cbb9439d0fb901babc5403dc6eb6921e00a4", PublicEntryABI, this.signer)
        this.dashboardContract = new ethers.Contract("0x729d5f93149e8e03851015a67c5fcde799ebc487", PublicEntryABI, this.signer)
    }

    async newStro(restoUid) {
        let txHash = await this.dashboardContract.newStro(restoUid);
        // console.log(txHash);
        return txHash.from;
    }

    async newCustomerRedemptionChannelId(restoId, channelId, customerAddress) {
        let txHash = await this.dashboardContract.newCustomerRedemptionChannelId(restoId, channelId, customerAddress);
        console.log(txHash);
        return txHash.hash;
    }

    async stroStamping(restoId, channelId, blockchainParam) {
        let txHash = await this.dashboardContract.stroStamping(restoId, channelId).send(blockchainParam);
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