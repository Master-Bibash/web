let menu = document.querySelector(".menu-icon");
let navbar=document.querySelector(".navbar");
menu.onclick=()=>{
    navbar.classList.toggle('open-menu');
    menu.classList.toggle("move");
};
menu.onscroll=()=>{
    navbar.classList.remove('open-menu')
    menu.classList.remove("move")
}
var swiper = new Swiper(".reviews-conent",
{
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:5000,
        disableOnInteration:false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
});
function validate(){
    let name=document.querySelector('.name');
    let email=document.querySelector('.email');
    let msg=document.querySelector('.message');
    let sendBtn=document.querySelector('.send-btn');

    sendBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value== ""){
            emptyerror();
        }else{
            sendmail(name.value,email.value,msg.value);
            success();
        }
    })
}
validate();
function sendmail(name,email,msg){
    emailjs.send("service_k9kjk3e","template_3xmjxl1",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}
function emptyerror(){
    swal({
        title: "gaddamm!!!",
        text: "Fields cannot be empty sir !",
        icon: "error",
      });
}
function success(){
    swal({
        title: "Email sent successfully!!!",
        text: "We will try to reply with an hour!",
        icon: "success",
      });
}
let header = document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('header-active',window.scrollY>0)
});
let scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll',()=>{
    scrollTop.classList.toggle('screen-active',window.scrollY>0)
});




