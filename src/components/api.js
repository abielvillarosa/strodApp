export const getMedia = async () => {
    const response = await fetch('http://localhost:5000/strodapp-backend/us-central1/getStro',{
        method: "get",
        mode: "cors",
    })
    const json = await response.json()
    console.log("get Video", json);
    return json 
}

export const getRestoUid = async () => {
    const response = await fetch('http://localhost:5000/strodapp-backend/us-central1/getRestoUid',{
        method: "get",
        mode: "cors",
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}

export const addNewResto = async (param) => {
    const response = await fetch('http://localhost:5000/strodapp-backend/us-central1/addNewResto',{
        method: "post",
        mode: "cors",
        body: JSON.stringify(param)
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}

export const addNewProduct = async (param) => {
    const response = await fetch('http://localhost:5000/strodapp-backend/us-central1/addNewProduct',{
        method: "post",
        mode: "cors",
        body: JSON.stringify(param)
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}

export const getProducts = async (param) => {
    const response = await fetch(`http://localhost:5000/strodapp-backend/us-central1/getProducts?restoUid=${param}`,{
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
    const response = await fetch('http://localhost:5000/strodapp-backend/us-central1/getCustomerUid',{
        method: "get",
        mode: "cors",
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}

export const addNewCustomer = async (param) => {
    const response = await fetch('http://localhost:5000/strodapp-backend/us-central1/addNewCustomer',{
        method: "post",
        mode: "cors",
        body: JSON.stringify(param)
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}

export const earnStamp = async (param) => {
    const response = await fetch('http://localhost:5000/strodapp-backend/us-central1/earnStamp',{
        method: "put",
        mode: "cors",
        body: JSON.stringify(param)
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}

export const redeemPts = async (param) => {
    const response = await fetch('http://localhost:5000/strodapp-backend/us-central1/redeemPts',{
        method: "put",
        mode: "cors",
        body: JSON.stringify(param)
    })
    const restoUid = await response.json()
    console.log("get RestoUid", restoUid);
    return restoUid 
}