let fetch_Json_Api='http://localhost:3000/services';
let getValues;
async function getData(){
    let getJsonData=await fetch(fetch_Json_Api);
   // console.log(getJsonData);

    getValues=await getJsonData.json();
   
}
getData();

export{fetch_Json_Api,getData,getValues};