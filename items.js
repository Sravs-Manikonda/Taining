var items=document.querySelector(".left-content");
var content=document.querySelector(".tablebody");
var amount=document.getElementById("total");
var totalamnt;
var billtag=document.querySelector("maindiv");
var getamount=document.querySelector(".charge");
var taxamnt=document.getElementById("tax");
var discount=0,tax=0;
var data;
var i=1;
var list,type,price,k;
var amount=[];
var billvalue;
var orderlist=document.querySelector(".recipe");
var customerstable=document.querySelector(".customers");


document.getElementById("current").onclick=getitems;
//to display list
async function getitems()
{
  //document.querySelector(".increment").innerHTML=`${getorderlist.length}`;
  items.innerHTML="";
  document.querySelector(".left-content").style.display="block";
  document.querySelector(".right-content").style.display="block";
   document.querySelector(".ordertable").style.display="none";
   document.querySelector(".summary").style.display="none";
    let getapi=await fetch("http://localhost:3000/items");
    console.log(getapi);
     data=await getapi.json();
     console.log(data);
      
    for(let i=1;i<=data.length;i++)
    {
        items.innerHTML+=`<button class="button" onclick="selected('${i}')">${data[i].name}<br>${data[i].price}</button>`;

    }
   
}
getitems()
//Pushing selected data to array along with index values
  function selected(idvalue){
     
     console.log(idvalue);
     content.innerHTML="";
  
    amount.push({
          name:`${data[idvalue].name}`,
          price:`${data[idvalue].price}`,
          quantity:1
                }
   
    );
    table();
  }
     //Displaying table through array
     function table(){
      content.innerHTML="";
      totalamnt=0;
    for(let k in amount){
     
    content.innerHTML+=`<tr>
                    <td>${amount[k].name}</td>
                    <td class="align"><input type=number  class="input" value=${amount[k].quantity} oninput="userquan('${k}')"></td>
                    <td class="align" id="price">${(amount[k].price)*(amount[k].quantity)}</td>
                    </tr>
                    `
                
                    totalamnt+=parseInt(`${amount[k].price*(amount[k].quantity)}`);
                    console.log(totalamnt);
                    values(k);
    }
                    
}
//calculating total,tax,discount
 function values(amnt){

   
    discount=(totalamnt)*10/100;
    console.log(discount);
    document.getElementById("discount").innerHTML=`${discount}`;
   
    tax=(totalamnt)*4/100;
    console.log(tax);
    document.getElementById("tax").innerHTML=`${tax}`;

    billvalue=totalamnt+tax-discount;
    console.log(billvalue);
   getamount.innerHTML=`<button class="charge">charge  ${billvalue}</button>`;
   
 }
 orderlist.addEventListener("click",function ()
   {
    displayorder()
  });
 //Posting order content to api
  async  function displayorder()
  {
    
   
    var name1=document.querySelector(".text").value;
    let updated=
    {
      customername:name1,
      cusdiscount:discount,
      custotal:billvalue,
      items:amount,
    }

    let orderapi=await fetch(`http://localhost:3000/orders`,
    {
    method:"POST",
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(updated)
    }
    
    );
   
    let getorder=await orderapi.json();
    console.log(getorder);
    
  }
  //clear table
  document.querySelector(".clear").onclick=cleardata;
  function cleardata(){
    content.innerHTML="";
    amount=[];
    document.getElementById("discount").innerHTML="";
    document.getElementById("tax").innerHTML="";
    
  }
  //Calculating price through quantity
  async function userquan(id){
   
    var num=document.querySelectorAll(".input");
    amount[id].quantity=num[id].value;
   
    table();
       }

//displaying orders table
  document.getElementById("orderbtn").onclick=orderlisttable;

   async function orderlisttable(){
    
    customerstable.innerHTML="";
       document.querySelector(".left-content").style.display="none";
       document.querySelector(".right-content").style.display="none";
       document.querySelector(".ordertable").style.display="block";

       let ordertable=await fetch(`http://localhost:3000/orders`);
       let getorderlist=await ordertable.json();
       console.log(getorderlist);
       document.querySelector(".increment").innerHTML=`${getorderlist.length}`;
       for(let x=0;x<getorderlist.length;x++){
       
        customerstable.innerHTML+=`<tr>
                                    <td>${x+1}</td>
                                    <td>${getorderlist[x].id}</td>
                                    <td>${getorderlist[x].customername}</td>
                                    <td>${getorderlist[x].custotal}</td>
                                    <td><button onclick="summary('${x+1}')">get data</button></td>        
                                    </tr>`;


       }
  }
  //Displaying Selected users bill 
   async  function summary(customersid)
   {
    document.querySelector(".summary").innerHTML="";
   document.querySelector(".summary").style.display="block";
   //document.querySelector(".ordertable").style.display="none";
    console.log(customersid);
    let personorder=await fetch(`http://localhost:3000/orders/${customersid}`);
    let details=await personorder.json();
    console.log(details);

    document.querySelector(".summary").innerHTML+=`<div class="detail">
                                               <h3 class="cash">cash receipt</h3><br>
                                              <table>
                                              <tr>
                                              <th class="valuedata">Customer Name</th>
                                              <th class="valuedata"></th>
                                              <th class="valuedata">${details.customername}</th>
                                              </tr>
                                              <tr>
                                              <th class="valuedata">price</th>
                                              <th class="valuedata"></th>
                                              <th class="valuedata">${details.custotal}</th>
                                              </tr>
                                              <tr>
                                              <th class="valuedata">discount</th>
                                              <th class="valuedata"></th>
                                              <th class="valuedata">${details.cusdiscount}</th>
                                              </tr>
                                             
                                              </table>
                                              <p class="p">Items:<br><span class="cusitems"></span>
                                                </p>
                                             
                                          </div>`;

   for(let t=0;t<details.items.length;t++)
   {
      document.querySelector(".cusitems").innerHTML+=`${details.items[t].name}=${details.items[t].price} * ${details.items[t].quantity}<br>`;
      console.log(`${details.items[t].name}`);
   }


  }
 