let btnAdd=document.getElementById("btnAdd");
let btnClear=document.getElementById("btnClear");
let text=document.getElementById("text");
let todoP=document.getElementById("todoP");


btnAdd.addEventListener("click",function(){
let paragraph=document.createElement("p");
paragraph.classList.add("p-style");
todoP.appendChild(paragraph);

if(text.value==""){
alert("Boş Bırakılamaz");

}
else{
    paragraph.innerHTML=`» ${text.value}`
    text.value="";
    text.focus();
        
}

paragraph.addEventListener("click",function(){
   paragraph.style.textDecoration="line-through";
   
});


paragraph.addEventListener("dblclick", function(){
todoP.removeChild(paragraph);
});

btnClear.addEventListener("click", function(){
todoP.removeChild(paragraph);

});

});


