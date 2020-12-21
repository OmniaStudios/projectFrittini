let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


function changeColorNavbar(){
    document.getElementById("navContainer").style.transition = "all 0.5s";
    let colorBefore = document.getElementById("navContainer").style.background
    if(colorBefore == ''){
        colorBefore = "rgb(251, 252, 252)" 
    }
    const colorAfter = "rgb(234, 236, 238)"
    const colorDefault = "rgb(251, 252, 252)" 
    console.log(colorBefore)
    if(colorDefault != colorBefore)
    {
        document.getElementById("navContainer").style.background= colorDefault
    }else{
        document.getElementById("navContainer").style.background= colorAfter
    }
}

window.addEventListener('load', (event) => {
    let orario = new Date();
    let hours = orario.getHours();
    let minutes = orario.getMinutes();
    if(hours >= 10 || hours < 15){
        console.log("si");
    }
});

