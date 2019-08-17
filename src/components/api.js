const devURL = 'http://localhost:5000/strodapp-backend/us-central1'
const prdURL = 'https://us-central1-strodapp-backend.cloudfunctions.net'
const flavor = 'prod'
const baseUrl = flavor === 'dev' ? devURL : prdURL

export const getMedia = async () => {
    const response = await fetch(`${baseUrl}/getStro`,{
        method: "get",
        mode: "cors",
    })
    const json = await response.json()
    console.log("get Video", json);
    return json 
}

export const getRestoUid = async () => {
    const response = await fetch(`${baseUrl}/getRestoUid`,{
        method: "get",
        mode: "cors",
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}

export const addNewResto = async (param) => {
    const response = await fetch(`${baseUrl}/addNewResto`,{
        method: "post",
        mode: "cors",
        body: JSON.stringify(param)
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}

export const addNewProduct = async (param) => {
    const response = await fetch(`${baseUrl}/addNewProduct`,{
        method: "post",
        mode: "cors",
        body: JSON.stringify(param)
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}

export const getProducts = async (param) => {
    const response = await fetch(`${baseUrl}/getProducts?restoUid=${param}`,{
        method: "get",
        mode: "cors",
        // body: JSON.stringify(param)
    })
    const json = await response.json()
    console.log("get Products", json);
    return json 
}

//Add from here
export const getCustomerUid = async () => {
    const response = await fetch(`${baseUrl}/getCustomerUid`,{
        method: "get",
        mode: "cors",
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}

export const addNewCustomer = async (param) => {
    const response = await fetch(`${baseUrl}/addNewCustomer`,{
        method: "post",
        mode: "cors",
        body: JSON.stringify(param)
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}

export const earnStamp = async (param) => {
    const response = await fetch(`${baseUrl}/earnStamp`,{
        method: "put",
        mode: "cors",
        body: JSON.stringify(param)
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}

export const redeemPts = async (param) => {
    const response = await fetch(`${baseUrl}/redeemPts`,{
        method: "put",
        mode: "cors",
        body: JSON.stringify(param)
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}