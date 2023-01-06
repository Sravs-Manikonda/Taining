

export function getStudy(){
    var caseStudy=document.querySelector("#displayCaseStudy");
    for(let k=1;k<10;k++){
    caseStudy.innerHTML+=`<div class="col-xl-4 col-sm-12 col-md-6 p-0">
                           
                         <img src="./${k}.png">
                         </div>`;
                          }
                         }
getStudy();