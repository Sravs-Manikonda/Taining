var items=document.querySelector(".left-content");
var content=document.querySelector(".tablebody");
var amount=document.getElementById("total");
var totalamnt;
var billtag=document.querySelector("maindiv");
var getamount=document.querySelector(".charge");
var taxamnt=document.getElementById("tax");
var discount=0;
var tax=0;
var data;
var i=1;
var list,type,price,k;
var amount=[];
var billvalue;
var orderlist=document.querySelector(".recipe");
var customerstable=document.querySelector(".customers");

async function getitems(){
    let getapi=await fetch("http://localhost:3000/items");
    console.log(getapi);
     data=await getapi.json();
     console.log(data);
      
    for(let i=1;i<=data.length;i++)
    {
        items.innerHTML+=`<button class="button" onclick="selected('${i}')">${data[i].name}<br>${data[i].price}</button>`;

    }
   
}
getitems();
  function selected(idvalue){
     
   content.innerHTML="";
   // console.log(`http://localhost:3000/items/${idvalue}`);
  
   // console.log(idvalue);
    amount.push({
          name:`${data[idvalue].name}`,
          price:`${data[idvalue].price}`,
          quantity:1
    }
   

    );
    table();
  }
     // console.log(amount);
     function table(){
      content.innerHTML="";
      totalamnt=0;
    for(let k in amount){
     
    content.innerHTML+=`<tr>
                    <td>${amount[k].name}</td>
                    <td class="align"><input type=number  class="input" onchange="userquan('${k}')"></td>
                    <td class="align" id="price">${(amount[k].price)*(amount[k].quantity)}</td>
                    </tr>
                    `
                
    
                    totalamnt+=parseInt(`${amount[k].price*(amount[k].quantity)}`);
                    console.log(totalamnt);
                    values(k);
    }
                    
}
 function values(amnt){

    console.log(amnt);
  
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
 
  async  function displayorder()
  {
    document.querySelector(".increment").innerHTML=i++;
   // document.querySelector(".tableorder").classList.add("display");
   // document.querySelector(".maindiv").style.display="none;"
    var name1=document.querySelector(".text").value;
    let updated={
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
  document.querySelector(".clear").onclick=cleardata;
  function cleardata(){
    document.getElementById("discount").innerHTML="";
    document.getElementById("tax").innerHTML="";
    content.innerHTML="";
  }
  async function userquan(id){
   
    var num=document.querySelectorAll(".input");
    amount[id].quantity=num[id].value;
   
    table();
       }


  document.getElementById("current").onclick=orderlisttable;

   async function orderlisttable(){
    
       document.querySelector(".left-content").style.display="none";
       document.querySelector(".right-content").style.display="none";
       document.querySelector(".ordertable").classList.add("display");

       let ordertable=await fetch(`http://localhost:3000/orders`);
       let getorderlist=await ordertable.json();
       console.log(getorderlist);
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
 async  function summary(customersid){
   document.querySelector(".summary").style.display="block";
   //document.querySelector(".ordertable").style.display="none";
      console.log(customersid);
    let personorder=await fetch(`http://localhost:3000/orders/${customersid}`);
    let details=await personorder.json();
    console.log(details);

    document.querySelector(".summary").innerHTML+=`<div class="detail">
                                              <h3> customer summary</h3><br><br>
                                              <p>customer name:<span>${details.customername}</span></p><br>
                                              <p>customer total:<span>${details.custotal}</span></p><br>
                                              <p>customer discount:<span>${details.cusdiscount}</span></p><br>
                                             
                                          </div>`;



  }