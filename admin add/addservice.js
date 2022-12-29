var servicename=document.querySelector("#sername");
var usertitle=document.querySelector("#title");
var usertag=document.querySelector("#tag");
var usercontext=document.querySelector("#sercontext");
var submitvalue=document.querySelector(".adminbtn");
var userstatus=document.querySelector("#status");

submitvalue.addEventListener("click",postService);
async function postService()
{
 
    var data={
       title:servicename.value,
       website:usertag.value,
       content:usercontext.value,
        status:userstatus.value
    }
let post=await fetch(" http://localhost:3000/services",{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)

});
 

let getapi = await post.json();
    console.log(getapi);
}

   
