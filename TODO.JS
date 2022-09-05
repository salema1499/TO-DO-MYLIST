const button=document.querySelector("button");
const input=document.querySelector("input");
const form=document.querySelector("form");

console.log("G : " , form);
const continer=document.getElementById("continer")
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const task=`
  <div class="task">

        <span class="icon-star-full"></span>
        <span class="finish1">${input.value}</span> 
       
    
        <span>
            <span class="icon-bin"></span>
            <span class="icon-angry2"></span>
         </span>

    </div>
  
  `
  continer.innerHTML+=task;
   input.value=""
});

continer.addEventListener("click",(e)=>{

    if(e.target.className=="icon-bin"){
        e.target.parentElement.parentElement.remove()
    }else if(e.target.className=="icon-angry2"){
        e.target.classList.add("dn");
        const heart=`<span class="icon-heart"></span> `
        e.target.parentElement.parentElement.getElementsByClassName("finish1")[0].classList.add("finish");
     e.target.parentElement.innerHTML+=heart

      
    }else if(e.target.className=="icon-heart"){
        const angry=`<span class="icon-angry2"></span>`
        e.target.parentElement.parentElement.getElementsByClassName("finish1")[0].classList.remove("finish")
        e.target.classList.add("dn")
        e.target.parentElement.innerHTML+=angry;
    }else if(e.target.className=="icon-star-full"){
        e.target.classList.add("starfirst");
        continer.prepend(e.target.parentElement)
    }else if(e.target.className==("icon-star-full starfirst")){
        e.target.classList.remove("starfirst")
        continer.append(e.target.parentElement)
    }


})

