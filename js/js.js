// FORM LOGIN
function openForm(){
  document.getElementById("myForm").style.display = "block";
  document.getElementById("login").style.display = "none"
}

function closeForm(){
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myRegister").style.display = "none";
  document.getElementById("login").style.display = "block";
}
function openRegister(){
  document.getElementById("myRegister").style.display="block";
  document.getElementById("myForm").style.display="none";
}


// WINDOW STORAGE

let txtuser = document.querySelector(".txtuser");
let txtpass = document.querySelector(".txtpass");
let submit = document.querySelector(".submit");


if (window.localStorage) {
  
// REGISTER


let increase = localStorage.length;

let regSubmit = document.getElementById("reg-submit");

regSubmit.addEventListener("click",()=>{
  let count =0;
  for (let i=0;i<localStorage.length;i=i+2){
    
    if (document.getElementById("reguser").value == localStorage.getItem(`user${i}`)){
      count+=1;
    }}
    if (count > 0) {
      alert("Username already exists!");
      document.getElementById("reguser")=none;
      document.getElementById("regpass")=none;
      
    } else {
      
      localStorage.setItem(`user${increase}`,document.getElementById("reguser").value);
      localStorage.setItem(`pass${increase}`,document.getElementById("regpass").value);
      alert("Register successfully!");
    }
    count=0;
  
})

// LOGIN
let message = document.querySelector(".message")

submit.addEventListener("click",()=>{
  for (let i=0;i<localStorage.length;i++){
    if (localStorage.getItem(`user${i}`) == txtuser.value && txtpass.value==localStorage.getItem(`pass${i}`)) {
      alert("Login Successfull.");
      document.getElementById("myForm").style.display = "none"
      document.getElementById("myRegister").style.display = "none"
      document.getElementById("login").innerHTML = "Hello!, <span style='color:#f5df4d;font-weight:700'>"+txtuser.value+"</span>";
      document.getElementById("login").style.display = "block";
    }
    else {
      message.innerHTML = "Username or Password Is Invalid."
    }
  }
})
  
} else{
  console.log("Not Supported..")
}


// IMAGE GROUP 2
class ImageList{
  constructor(img_1,img_2){
    this.img_1 = img_1;
    this.img_2 = img_2;
  }
  setImg(link_1,link_2){
    this.img_1 = link_1;
    this.img_2 = link_2;
  }
}

let exc_1 = new ImageList("images/IMG_G201_1.png","images/IMG_G201_2.png");
let exc_2 = new ImageList("images/IMG_G202_1.png","images/IMG_G202_2.png");
let exc_3 = new ImageList("images/IMG_G203_1.png","images/IMG_G203_2.png");


function changeImg(exc){
  document.getElementById('img-201').src = exc.img_1;
  document.getElementById('img-202').src = exc.img_2;

}



















// SLIDE SHOW

let imgList = ["images/IMG_G301.png","images/IMG_G302.png","images/IMG_G303.png"];
let imgSlide = document.getElementById("slideshow");


document.getElementById("s")

for (let i=0;i<imgList.length;i++){
  imgSlide.innerHTML += `<div class="mySlides fade" <a href="#"><img src="${imgList[i]}" style="width:100%"></a></div>`
}


var slideIndex = 1;
showSlides(slideIndex);



function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}