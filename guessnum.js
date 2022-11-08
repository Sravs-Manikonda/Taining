var score=20;
var highscore=0;
var guessnumber;
var secretNumber=Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
count=0;
 
function checknum()
{
	
 guessnumber=document.querySelector(".guess").value;
 guessnumber=Math.trunc(guessnumber);
 console.log(guessnumber);
      if(guessnumber>20)
	  {
		  alert("guessed number is greater than 20");
	  }
	   
     if(guessnumber == secretNumber)
         {
			 //show();
			 if(score>highscore)
			      {
				       highscore=score;
				       document.querySelector(".highscore").textContent=highscore;
			             }
		     document.querySelector("h3").textContent ="Hurray! You Won......";
			 document.querySelector("body").style.backgroundColor="#339933";
			 document.querySelector(".que").textContent=secretNumber;
			 console.log("You Won the Game ");
			//document.getElementById("del").disabled=false ;
			 drop();
           count++;
		   
          }
		
		 
		 
      else if(secretNumber>guessnumber&&guessnumber>0)
          {
			  
	          score-=1;
			  drop();
			 
	          document.querySelector(".score").textContent = score;
			
			  document.querySelector("h3").textContent="You are too low";
               console.log("Your guessed number is low");        
						 drop();
                     }
                else if(secretNumber<guessnumber)
                       {
						   
                           document.querySelector("h3").textContent="You are too high";
	                       console.log("Your guessed number is high");

						   drop();
                       }
           
		            else if( typeof  guessnumber =="string" || guessnumber=="")
		                {
			                   document.querySelector("h3").textContent=("Empty Number value ");  
		                  }
	  
			 if(score==0)
			 {
				document.querySelector("h3").textContent ="You Loose the game"; 
				document.querySelector("body").style.backgroundColor="#ff471a";
			 }
			
                if (count ==1)
				{
	                   alert("Click on Again! button ");
	 
	                   document.querySelector("h3").textContent ="Hurray! You Won......";
                  }

			
		 
	 }
 

function again()
{
score=20;
drop();
document.querySelector(".que").textContent="?";
document.querySelector(".score").textContent = score;
document.querySelector("body").style.backgroundColor="#333333";
//document.getElementById("del").disabled=false;
view=false;
secretNumber=Math.floor(Math.random()*20)+1;
console.log(secretNumber);
}
function drop()
{
	document.querySelector(".guess").value="";
}
/*function show()
{
	document.querySelector("h3").textContent ="You Won......";
	alert("pls click again() button for another chance ");
	score++;
}*/