var isstatus=document.querySelector("h5")
var btn = document.querySelector("#Add")
var check=0;
// var removefriend=document.querySelector("#remove")
btn.addEventListener("click",function(){
    if(check==0){
     isstatus.innerHTML="Friends"
     isstatus.style.color="green"
     isstatus.style.backgroundColor="white"
     btn.innerHTML="Remove Friend"
     check=1
    }else{
        isstatus.innerHTML="Unknown"
        isstatus.style.background="red"
        isstatus.style.color="black"
        btn.innerHTML="Add Freind"
        check=0;

    }
})

// removefriend.addEventListener("click",function(){
//     isstatus.innerHTML="Unknown"
//     isstatus.style.background="red"
//     isstatus.style.color="black"
// })