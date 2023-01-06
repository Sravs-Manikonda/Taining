function AccessJson(content){
    let  getContent=document.querySelector("#content-div");
    let accessData=content.map(dataValues=>{
        
        return `<div class="col-xl-4 col-sm-12 col-md-6 body-div mb-5">
                    <div class="col  bg-white px-3 py-3">
                      <img src="${dataValues.img}" class="mb-4">
                       <h6 class="contentclr">${dataValues.content}</h6>
                    
                        <div class="col-12 d-flex mt-4">
                            <div class="col-3 ">
                            <img src="${dataValues.sec}" >
                            </div>
                            <div class="col-6">
                            <span class="data">${dataValues.title}</span><br>
                            <span class="text-secondary">${dataValues.ceo}</span>
                            </div>
                            <div class="col-3 text-end">
                            <span ><img src="${dataValues.quotes}"></span>
                            </div>
                        </div>
                    </div>
                 </div>
             `
        
        
       })
   getContent.innerHTML=accessData.join('');
}
export {AccessJson};