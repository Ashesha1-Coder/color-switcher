 const buttons = document.querySelectorAll('.button');
 const body = document.querySelector("body");
  
buttons.forEach(function(button){
   button.addEventListener('click',function(e){
     console.log(button)
       if (e.target.id==="grey"){
         body.style.backgroundColor = e.target.id;
       }
       if (e.target.id==="pink"){
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id==="blue"){
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id==="yellow"){
        body.style.backgroundColor = e.target.id;
      }
   })
})
