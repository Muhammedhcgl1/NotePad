const baslık = document.querySelector(".addbaslık")
const not = document.querySelector(".addnote")
const ekle = document.querySelector(".add")
const notes = document.querySelector(".notes")
const reset = document.querySelectorAll(".adds")
const hide = document.querySelectorAll(".header")




ekle.addEventListener("click", e => {
    e.preventDefault();
   if(baslık.value.trimStart().length>0){
    if(not.value.trimStart().length>0){
        addnote()
    }
    else{
        alert("NOTUNUZU EKLEYİN!")
    }
   }
   else{
    alert("BAŞLIK EKLEYİN!")
   }  
   reset.forEach(e => e.reset())
   
})


notes.addEventListener("click", e=>{
    if(e.target.classList.contains("delete"))
    {
        e.target.parentElement.parentElement.remove();
    }
})


// var i;
//     for(i=0;i<hide.length;i++){
//         hide[i].addEventListener("click",e =>{
//             var panel= e.nextElementSibling;
//             console.log(panel)
//             if(panel.classList=="close"){
//                 panel.classList.replace("close","open")
//             }
//             else{
//                 panel.classList.replace("open","close")
//             }
//         })
//     }




const addnote = () => {
    const html = `
    <div class="note">
    <h3 class="header">${baslık.value}<i class="fa-solid fa-trash delete"></i></h3>
    <p class="content">${not.value}</p>
    </div>`
    notes.innerHTML+=html
}

