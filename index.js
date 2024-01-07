console.log("hi");

let slideIndex=0;
let slides=document.getElementsByClassName("image__Container");
let dot=document.getElementsByClassName("dot");        

const currentSlide=(index)=>{
  showSlide(index);
}
const showSlide=(index)=>{
     // let dot=document.getElementsByClassName("dot");        
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
  setInterval(()=>{
    if (slideIndex!==3){
      showSlide(slideIndex)
      slideIndex++;
    }else{
      slideIndex=0;
    }
  },2000)
  
  currentSlide(slideIndex);