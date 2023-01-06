

 export let getdata;
 async function fetchServicesApi()
{

let data=await fetch("http://localhost:3000/services");
     getdata=await data.json();
      getapi(getdata);
     // console.log(getdata);
}
fetchServicesApi();

import {getapi} from './accessApiModule.js';

 export let testimonials;

async function fetchTestimonialApi(){
     let testimonialData=await fetch("http://localhost:3000/testimonial");
     testimonials=await testimonialData.json();
     console.log(testimonials);
     AccessJson(testimonials);
}

fetchTestimonialApi();
 
import { AccessJson } from './accessTestimonal.js';
import { getStudy } from './displaycasestudy.js';
console.log(getStudy);