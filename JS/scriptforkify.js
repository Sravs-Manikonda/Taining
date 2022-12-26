

var remain=document.getElementById("after");
  var beforelist=document.getElementById("before");
  var ulclass=document.querySelector(".ul");
 var searchContent=document.getElementById("search");
 var num=1;
var items;
var ten=10;
var cuisines=document.getElementById("listclick");
var list_ing=document.getElementById("ingredients");
var recipeimage=document.getElementById("changeimage");
var none=document.getElementById("change");
var listitem;
var idvalue;
var getname=document.getElementById("name");
var belowtitle=document.querySelector(".title");
var loading=document.querySelector(".loaderdiv");
var minutes=document.querySelector(".text");
var input = document.getElementById("type");
 var loadimage=document.querySelector(".loadimg");
 remain.addEventListener("click",nextlist);
 beforelist.style.display="none";
  function nextlist(){
	  recipemenu();
	    num++;
		
		if(listitem.results<num*ten)
         {
	  remain.style.display="none";
	 }
	  
	  else{
		  	  beforelist.style.display="block";
	  }
     remain.innerHTML=`Page${num+1}<img src="../IMAGES/right_arrow_icon.svg" class="arrow">`;
	 beforelist.innerHTML=`<img src="../IMAGES/arrow_left_icon(1).svg" class="arrow">Page${num-1}`;
	  
	
  }
     
	 

  beforelist.addEventListener("click",beforecontent);
 function beforecontent()
 {
	 recipemenu();
	 num--;
	 
	   
	   
	if(num*ten==ten){
      beforelist.style.display="none";
	   
	 }
	 else{
		  remain.style.display="block";
	 }
 beforelist.innerHTML=`<img src="../IMAGES/arrow_left_icon(1).svg" class="arrow">Page${num-1}`;
 remain.innerHTML=`Page${num+1}<img src="../IMAGES/right_arrow_icon.svg" class="arrow">`;
 

  }
  
 
  
  input.addEventListener("keypress", function(event) {
	
  if (event.key === "Enter") {
	
loading.setAttribute("style","display:block");
setTimeout(()=>{
	  loading.setAttribute('style', 'display:none' )
  },1000);
 recipemenu();
  }
});
  function  recipemenu()
  {
    
	getresult();
  }
  
      // loading.style.display="none";
      async function getresult(items)
		{
			
		 //loading.setAttribute('style', 'display:none' );
		items=document.getElementById("type").value;	
		let result=await   fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${items}`);
		listitem=await result.json();
		
		 ulclass.innerHTML="";
		 
		for(let j=(num*ten)-ten;j<num*ten;j++){
	     idvalue=listitem.data.recipes[j].id;
		 ulclass.innerHTML+= `<li class="li"   id=${idvalue}   onclick="getingredients(this)">
            <div class="recipe"  >
               <div class="recimg">
                  <img src=${listitem.data.recipes[j].image_url} class="pizzaimg" >
               </div>
			   <div class="imgcon">
                  <h5  >${listitem.data.recipes[j].title}</h5>
                  <p>${listitem.data.recipes[j].publisher}</p>
               </div>
			   </li>` 
			  console.log(`${listitem.data.recipes[j].title}`);
			
			
			 console.log(idvalue);
			}
		
		}
 
 // getresult(items);

 

  
  
  async function getingredients(idvalue)
  {
	   
		let result=await   fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${idvalue.id}`);
		
		let item=await  result.json();
	     console.log(item);
		list_ing.innerHTML="";
		
		recipeimage.innerHTML=`<img src="${item.data.recipe.image_url}" class="pieimg" >`
			
			
			getname.innerHTML=`${item.data.recipe.title }`;
			belowtitle.innerHTML=`<span class="title">${item.data.recipe.publisher}</span>`;
		
			minutes.innerHTML=`<span class="text"><b>${item.data.recipe.cooking_time}</b> minutes</span>`
			console.log(`${item.data.recipe.publisher}`);
			
		 for(let k=0;k<=item.data.recipe.ingredients.length;k++)
		 {
		
	     list_ing.innerHTML+=`<li><span class="font">${item.data.recipe.ingredients[k].quantity}   ${item.data.recipe.ingredients[k].unit}  ${item.data.recipe.ingredients[k].description }</span>
                                                  </li>`
		
		} 
		
	
}
		
	 
	

		
		
		
		
		
