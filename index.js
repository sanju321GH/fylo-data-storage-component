function displayer(range){
    document.getElementById("range-displayer").innerHTML = range * 5 ;
    document.getElementById("GB").innerHTML = 1000 - (range * 5);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('range').oninput = function(){
        const value = ((this.value * 5)/2) + 4 + "px";
        document.getElementById("progre").style.width = value;
        

    };
});