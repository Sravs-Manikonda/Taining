var ser_btn=document.querySelector("#services");

  async function gettable()
 {
    document.querySelector(".gettable").innerHTML+="";
  document.querySelector(".servicestable").style.display="block";
 let getdata=await fetch("http://localhost:3000/services");
 let getservice=await getdata.json();
 console.log(getservice );
 for(let i=0;i<getservice.length;i++){
    if(getservice[i].status=="active"){
 document.querySelector(".gettable").innerHTML+=`<tr>
                                                  <td>${i+1}</td>
                                                  
                                                  <td>${getservice[i].title}</td>
                                                  <td>${getservice[i].website}</td>
                                                  <td>${getservice[i].content}</td>
 
                                                   </tr>`

    }
}

}
gettable();