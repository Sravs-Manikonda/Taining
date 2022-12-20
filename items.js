var items=document.querySelector(".left-content");
var content=document.querySelector(".data");
var amount=document.getElementById("total");
var totalamnt=0;
var getamount=document.querySelector(".charge");
var taxamnt=document.getElementById("tax");
var discount=0;
var tax=0;
var num=1;
var list;
var billvalue;
async function getitems(){
    let getapi=await fetch("http://localhost:3000/items");
    console.log(getapi);
      let data=await getapi.json();
     console.log(data);
      
    for(let i=1;i<=data.length;i++)
    {
        items.innerHTML+=`<button class="button" onclick="selected('${i}')">${data[i].name}<br>${data[i].price}</button>`;
      
    }

}
getitems();
 async function selected(data){

    let api=await fetch(`http://localhost:3000/items/${data}`);
    
    console.log(`http://localhost:3000/items/${data}`);
   list=await api.json();
    console.log(list);
    
    content.innerHTML+=`<tr>
                    <td>${list.name}</td>
                    <td class="align"><input type=number value=${num}></td>
                    <td class="align">${list.price*num}</td>
                    </tr>
                    `
                  
                    values(data);
                    
}
 function values(amnt){

    totalamnt+=parseInt(`${list.price*num}`);
   
    console.log(totalamnt);
  
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
 