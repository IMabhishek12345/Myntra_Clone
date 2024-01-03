console.log("hi");

let slideIndex=0;
const currentSlide=(index)=>{
  showSlide(index);
}

const showSlide=(index)=>{
    
    let slides=document.getElementsByClassName("image__Container");
    let dot=document.getElementsByClassName("dot");        
    console.log(dot);
   
    for (let ele of slides){
        ele.style.display="none"
    }
    
    for (let i=0; i<dot.length; i++){
      if(dot[i].classList.contains("active")){
         dot[i].classList.remove("active");
       }
    }
          
    slides[index].style.display="block";
    dot[index].className+=" active";
    
  }

  currentSlide(slideIndex);