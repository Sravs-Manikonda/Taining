



let fetch_Json_Api='http://localhost:3000/services';
export let getValues;
async function getData(){
    let getJsonData=await fetch(fetch_Json_Api);
   // console.log(getJsonData);

    getValues=await getJsonData.json();
   console.log(getValues);
   AccessJson(getValues);
}
getData();


import { AccessJson } from "./dispaly-module.js";