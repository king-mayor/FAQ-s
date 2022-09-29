const mainHeaders = document.querySelectorAll('.header');
mainHeaders.forEach( function (hed){
hed.addEventListener("click", function (){
    hed.classList.toggle("active");
})
})