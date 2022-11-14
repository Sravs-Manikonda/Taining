var accounts=["123456","654321"];
var passwords=["123","321"];
var index;
var login=document.getElementById("logging");
var register=document.getElementById("pop");
 login.onclick=function()
    {
     register.style.display="block";
      login.classList.add('stop');
       }
             function validate()
                {
                  var useracc=document.querySelector("#accno").value;
                  console.log(useracc);
                  var userpwd=document.getElementById("pwd").value;
                    if(useracc==accounts[0]||useracc==accounts[1])
                       {
                         
                    alert("Acc number is valid");
                    index=accounts.indexOf(useracc);
                      if(userpwd==passwords[0] && useracc==accounts[0] || userpwd==passwords[1] && useracc==accounts[1])
                        {
                        console.log(userpwd);
                        alert("password is valid");
                         }
                     else
                       {
                       alert("invalid password!");
                       }
                      }
                  else
                  {
                  alert("invalid acc num!");
                  }
              }
                  var options=document.querySelector("#container");
                  var user=document.getElementById("logged");
                   
                  user.addEventListener("click",uservalue);
         
                  function uservalue()
                  {
                  options.style.display="block";
                  register.style.display="none";
                   }
                   var mod=document.getElementById("dis");
                   var userdraw=document.getElementById("draw");
                   userdraw.addEventListener("click",drawmoney);
                    function drawmoney()
                   {
                   mod.style.display="block";
                   }
