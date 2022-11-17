
//Global variables
const accounts=["123456","654321"];
const passwords=["123","321"];
var balances=["10000","20000"]; 

var index;
var login=document.getElementById("logging");
var register=document.getElementById("pop");
var trans=[];

var options=document.querySelector("#container");
var user=document.getElementById("logged");

var mod=document.querySelector(".modal");
            
var userdraw=document.getElementById("draw");
var drawuser=document.getElementById("drawed");
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
			alert(" valid password\n You have successfully logged in to your account");
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

userdraw.onclick=function()
{
	mod.style.display="block";
	options.style.display="none";
}
	           

drawuser.onclick=function()
{
	alert("I am here");
	var drawmoney=document.getElementById("drawcash").value;
	
	balances[index]-=parseInt(drawmoney);
	console.log(balances[index]);
	alert(`Balance Available in your account after draw ${balances[index]}`);
	trans.push({type:"Withdraw",amount:drawmoney });
	mod.style.display="none";
	options.style.display="block";
}







var userdepo=document.getElementById("depo");

userdepo.onclick=function()
{
        var depomoney=document.getElementById("depocash").value;
        balances[index]-=parseInt(depomoney);
	console.log(balances[index]);
	mod.style.display="block";
	options.style.display="none";
	
	trans.push({type:"deposit",amount:userdepo});
}


var depouser=document.getElementById("deposited");
drawuser.onclick=function()
{
	mod.style.display="none";
	options.style.display="block";
}


usertran.onclick=function()
{
	options.style.display="none";
	distrans.style.display="block";
	let  list="";
	for(let i=0;i<trans.length;i++)
	{
	list+=(`\n${trans[i].type}-${trans[i].amount}-${balances[index]}`);
	}

}

                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
            
                  
