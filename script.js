
//Global variables
const accounts=["123456","654321"];
const passwords=["123","321"];
var balances=[10000,20000]; 
var type,amount,balance;
var index,i;
var login=document.getElementById("logging");
var register=document.getElementById("pop");
var trans=[];
var tabtr=document.getElementsByTagName("tr");
var options=document.querySelector("#container");
var user=document.getElementById("logged");
var clrchge=document.getElementById("change");
var mod=document.querySelector(".modal");
 var mod1=document.querySelector(".modal1");           


var usertran=document.getElementById("transaction");
var distrans=document.getElementById("show");

user.addEventListener("click",uservalue);

//Login function
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
	if(accounts.includes(useracc))
	{
		index=accounts.indexOf(useracc);
		alert("Acc number is valid");

		if(index==passwords.indexOf(userpwd))
		{
			console.log(userpwd);
			
			alert(`Balance Available in your account ${balances[index]}`);
		}      
		else
		{
			alert("provide valid password");
		}
	}
	else
	{
		alert("provide valid account number");
	}
}


         
function uservalue()
{
	options.style.display="block";
	register.style.display="none";
}
var drawopt=document.getElementById("draw");

drawopt.onclick=function()
{
	mod.style.display="block";
	options.style.display="none";
}
	           
var drawuser=document.querySelector("#drawed");
drawuser.onclick=function()
{
	
	mod.style.display="none";
	options.style.display="block";
	
}
drawuser.addEventListener("click",drawfun);
  function drawfun()
   {
    
	var drawmoney=document.getElementById("drawcash").value;
	console.log(drawmoney);
	balances[index]-=parseInt(drawmoney);
	console.log(balances[index]);
	//alert(`Balance Available in your account after draw ${balances[index]}`);
	trans.push({type:"Withdraw",amount:drawmoney,balance:balances[index]});
	
}


var userdepo=document.getElementById("depo");

userdepo.onclick=function()
{
        
	mod1.style.display="block";
	options.style.display="none";
	
}

var depouser=document.querySelector("#deposited");
depouser.onclick=function()
{
	mod1.style.display="none";
	options.style.display="block";
	
}
depouser.addEventListener("click",depofun);
function depofun()
 {
 var depomoney=document.getElementById("depocash").value;
 balances[index]+=parseInt(depomoney);
  console.log(balances[index]);
 
//alert(`Balance Available in your account after draw ${balances[index]}`);
 trans.push({type:"deposit",amount:depomoney,balance:balances[index]});
 console.log(trans);

 }

usertran.onclick=function()
{
	options.style.display="none";
	distrans.style.display="block";
}
usertran.addEventListener("click",tranfun)
 function tranfun(){
	
for( i=0;i<trans.length;i++)
	{
		
	var tabletr=document.querySelector(".get");
	tabletr.innerHTML+=`<tr>
	<td>${i+1}</td>
	<td>${trans[i].type}</td>
	<td>${trans[i].amount}</td>
	<td>${trans[i].balance}</td>
	<tr>`
	/*let  list="";
	
	list+=(`\n${i+1}.${trans[i].type}-${trans[i].amount}-${balances[index]}`);
	
   console.log(list);*/
   if (trans[i].type==="Withdraw")
   {
	   tabtr[i+1].style.color="red";
	   
   }
   else (trans[i].type==="deposit")
   {
	   tabtr[i+1].style.color="green"; 
   }
   
	}
}

   function closepage()
   {
	   mod.style.display="none";
	   	options.style.display="block";
   }	   
                   
               
       function page()
	   {
		 options.style.display="none";
		 login.style.display="block";
		   
}		   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
            
                  
