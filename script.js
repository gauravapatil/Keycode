bodyTag=document.getElementsByTagName("body")[0];
let h=document.getElementsByTagName("h1")[0];
        
         

bodyTag.addEventListener("keypress",Gencode);
function Gencode(event){
         let h=document.getElementsByTagName("h1")[0];
         let key=event.key;
         h.innerHTML = `You have pressed <span style="color: green">${key}</span>`;
         let pad=document.getElementById("keycode");
         pad.style.paddingTop="7.5px";
         pad.style.backgroundColor="bisque"
         let code=document.getElementsByTagName("p")[0];
         code.innerHTML=`Key code: <span style="color:green">${event.keyCode} </span>`;
         
}

