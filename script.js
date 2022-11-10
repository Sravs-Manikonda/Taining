/*
GAME RULES:
-------------------------------------------------
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

functions in brief:
------------------------------------------------
1. Roll the dice: The current player has to roll the dice and then a random number will be generated. If current player gets any number other than 1 on the dice then that number will be added to the current score (initially the current score will be 0) and then the new score will be displayed under Current Score section.  Note: If the current player gets 1 on the dice then the players will be switched i.e. the current player will become in-active and vice-versa.


2. Hold: If the current player clicks on HOLD, then the Current Score will be added to the Total Score. When the active player clicks the Hold button then the total score is evaluated. If the Total Score >= 100 then the current player wins else the players are switched.

3. Reset: All the scores are set to 0 and Player 1 is set as the starting player (current player).


Tasks:
---------------------
1. Add script and CSS files to HTML
2. Generate random roll dice and display dice roll
3. Set active player,(CSS class name: player--active) Add dice roll to current score and display score
4. Hold: Add current score to total score and Switch player
5. Win screen: Add "player--winner" to winner player section
6. Reset/New game.
*/
var i=0;
var num,now;
onescr=0;
twoscr=0; 
var curr=0;
var curr2=0;
var scr1=document.getElementById("score--0");
var currentScore1= document.getElementById('current--0');
//console.log(scr1.innerText);
var currentScore2= document.getElementById('current--1');
var scr2=document.getElementById("score--1");
var holdbtn=document.getElementById("stopbtn");

var rlbtn=document.getElementById("roll"); 

  rlbtn.addEventListener("click",player1);
  
  holdbtn.addEventListener("click",score1);

        function player1()
            {
          num=Math.trunc(Math.random()*6)+1;
          console.log(num);

            document.getElementById("current--0").innerHTML=num;


		if(num==6)
		{
		curr+=num;
		document.querySelector("#pic").src="/home/feuji/Downloads/js-codeing-challenge-main/dice-6.png";
		document.getElementById("current--0").innerHTML=curr;
		
		
		}

		else if(num==5)
		{
		curr+=num;
		document.querySelector("#pic").src="/home/feuji/Downloads/js-codeing-challenge-main/dice-5.png";
		document.getElementById("current--0").innerHTML=curr;
		
		}
		else if(num==4)
		{
                curr+=num;
		document.querySelector("#pic").src="/home/feuji/Downloads/js-codeing-challenge-main/dice-4.png";
		document.getElementById("current--0").innerHTML=curr;
	     
		}
		else if(num==3)
		{
                 curr+=num;
		document.querySelector("#pic").src="/home/feuji/Downloads/js-codeing-challenge-main/dice-3.png";
		document.getElementById("current--0").innerHTML=curr;
		
		}
		else if(num==2)
		{
                 curr+=num;
		document.querySelector("#pic").src="/home/feuji/Downloads/js-codeing-challenge-main/dice-2.png";
		document.getElementById("current--0").innerHTML=curr;
		
		}
		
		else 
		{
		document.querySelector("#pic").src="/home/feuji/Downloads/js-codeing-challenge-main/dice-1.png";
		zero();
		}
		}
               /* function won()
                {
                
		}*/
		 
		function zero()
		{
		curr=0;
		document.getElementById("current--0").innerHTML=0;
		}
		
		function score1()
		{
		
		rlbtn.removeEventListener("click",player1);
		holdbtn.removeEventListener("click",score1);
		//console.log(typeof(scr1.innerText));
                scr1.innerHTML= parseInt((scr1.innerText))+parseInt((currentScore1.innerText));
                console.log("scr1:",scr1.innerText);
                if(scr1.innerHTML>=100)
                {
                document.querySelector("#onewin").classList.add("player--winner");
                }
	        curr=0;
	        currentScore1.innerHTML=0;
		document.querySelector(".player--0").classList.remove("player--active");
		document.querySelector(".player--1").classList.add("player--active");
		rlbtn.addEventListener("click",player2);
		holdbtn.addEventListener("click",score2);

		}
                   
                   
            function player2()
	        {  
	        console.log(num);
		document.getElementById("current--1").innerHTML=num;		
	       if(num==6)
                {
                curr2+=num;
            document.querySelector("#pic").src="/home/feuji/Downloads/js-codeing-challenge-main/dice-6.png";
           document.getElementById("current--1").innerHTML=curr2;
            
            }

          else if(num==5)
           {
            curr2+=num;
         document.querySelector("#pic").src="/home/feuji/Downloads/js-codeing-challenge-main/dice-5.png";
         document.getElementById("current--1").innerHTML=curr2;
        
                }
      else if(num==4)
         {
             curr2+=num;
         document.querySelector("#pic").src="/home/feuji/Downloads/js-codeing-challenge-main/dice-4.png";
         document.getElementById("current--1").innerHTML=curr2;
         
          }
         else if(num==3)
       {
        curr2+=num;
        document.querySelector("#pic").src="/home/feuji/Downloads/js-codeing-challenge-main/dice-3.png";
         document.getElementById("current--1").innerHTML=curr2;
          
             }
          else if(num==2)
          {
            curr2+=num;
        document.querySelector("#pic").src="/home/feuji/Downloads/js-codeing-challenge-main/dice-2.png";
        document.getElementById("current--1").innerHTML=curr2;
      
           }
          else if(curr2>=100)
                {
                
              document.getElementById("score--1").innerHTML="WIN!";
           document.querySelector("#twowin").classList.add("player--winner");
            }
              else 
              {
        document.querySelector("#pic").src="/home/feuji/Downloads/js-codeing-challenge-main/dice-1.png";

          zero1();
            }
           }

          

	function zero1()
	{
	curr2=0;
	document.getElementById("current--1").innerHTML=0;
	}
	function score2()
	{
	         rlbtn.removeEventListener("click",player2);
		holdbtn.removeEventListener("click",score2);
		//console.log(typeof(scr1.innerText));
                scr2.innerHTML= parseInt((scr2.innerText))+parseInt((currentScore2.innerText));
                console.log("scr2:",scr2.innerText);
                if(scr2.innerHTML>=100)
                {
               document.querySelector("#twowin").classList.add("player--winner");
                }
                curr2=0;
                currentScore2.innerHTML=0;
		document.querySelector(".player--1").classList.remove("player--active");
		document.querySelector(".player--0").classList.add("player--active");
		rlbtn.addEventListener("click",player1);
		holdbtn.addEventListener("click",score1);


	}	
	  
     function again()
     {
     document.getElementById("current--0").innerHTML=0;
     document.getElementById("current--1").innerHTML=0;
     document.getElementById("score--0").innerHTML=0;
     document.getElementById("score--1").innerHTML=0;
     document.querySelector(".player--0").classList.add("player--active");
     document.querySelector(".player--1").classList.remove("player--active");
     document.querySelector("#onewin").classList.remove("player--winner");
     document.querySelector("#twowin").classList.remove("player--winner");
     rlbtn.removeEventListener("click",player2);
     holdbtn.removeEventListener("click",score2);
     rlbtn.addEventListener("click",player1);
     holdbtn.addEventListener("click",score1);
     }


















































