let Dark = document.getElementById("Home")
console.log(document.getElementById("Home"));

let flag = false;
Dark.addEventListener("click" , (n) =>{

    console.log(n.target.className);
    console.log(n.target);

    if(n.target.className == "light" && flag == false){
        Dark.style.backgroundColor="rgb(32, 32, 32)";
        flag = true;
    }
    else if (n.target.className == "light" && flag == true){
        Dark.style.backgroundColor="white";
        flag = false;
    }

})