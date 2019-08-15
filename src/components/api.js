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