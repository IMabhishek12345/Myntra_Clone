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
    
    for (let i=0; i<dot.length ; i++){
      dot[i].className=dot[i].className.replace("active","");
    }
          
    slides[slideIndex].style.display="block";
    dot[slideIndex].className+="active";

  }
  showSlide(slideIndex);