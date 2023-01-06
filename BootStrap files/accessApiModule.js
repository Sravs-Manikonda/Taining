
import {getdata} from './First Page.js';
     function getapi(apiData)
     {
     // console.log(apiData);
    var ourServicesContent=document.querySelector("#services-div-id");
    
   
   let getServicesContent=apiData.map(servicesContent=>{

           return `               <div class="col-xl-4 col-sm-12 col-md-6  mb-5 ">
                                     <div class="col mx-2 px-3 bg-white py-3">
                                        <img src="${servicesContent.img_url}"><span class="number"><img src="${servicesContent.num_img}"></span><br>
                                        <span class="title">${servicesContent.title}</span><br>
                                        <span class="web">${servicesContent.website}</span><br>
                                        <span class="con"> ${servicesContent.content}</span>
                                   </div>
                                   </div>
                                                    `;
});
ourServicesContent.innerHTML=getServicesContent.join('');
}
export {getapi};