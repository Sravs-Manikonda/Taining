
import {getdata} from './First Page.js';
     function getapi(apiData)
     {
     // console.log(apiData);
    var ourServicesContent=document.querySelector("#services-div-id");
    
   
   let getServicesContent=apiData.map(servicesContent=>{

           return `               <div class="col-xl-4 col-sm-12 col-md-6 bg-white mb-5 ">
                                     <div class="col  px-3 py-3">
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