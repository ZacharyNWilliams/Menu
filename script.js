function show_hide() {  
    let click = document.getElementById("list-items");  
    if(click.style.display ==="none") {  
       click.style.display ="block";  
    } else {  
       click.style.display ="none";  
    } 
    
 }  


 


 let clickLetters = document.querySelector("#letters");
 clickLetters.addEventListener('click', dissNumbers);


 function dissLetters(){
   let dissLetters = document.getElementById("lettersParagraph");
   dissLetters.classList.add("lettersDissappear");
   console.log(dissLetters);

   document.getElementById("show-me").style.display = "block";
   document.getElementById("lettersParagraph").style.display = "none";
 }

 function dissNumbers(){
   let dissNumbers = document.getElementById("show-me");
   dissNumbers.classList.add("lettersDissappear");
   console.log(dissLetters);
   document.getElementById("show-me").style.display = "none";
   document.getElementById("lettersParagraph").style.display = "block";
   
 }
