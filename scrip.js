 var code = document.getElementById("codes");
 var remove = document.getElementById("btn_delete");
 var play= document.getElementById("btn_run");
 var result = document.getElementById("result");

onload=()=>{
    code.value=localStorage.getItem("Codes");
    result.innerHTML=code.value;
    
}
play.onclick = ()=>{
    result.innerHTML = code.value;
    localStorage.setItem("Codes",code.value);
}

remove.onclick = ()=> {
    result.innerHTML="";
}