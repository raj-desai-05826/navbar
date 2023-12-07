console.log("Develop by Raj Desai.");

let bar = document.getElementById("bars");
let Close = document.getElementById("close");
let navbar = document.getElementById("navbar");

bar.onclick = () => {
    navbar.style.top = "100%";
    navbar.style.height = "28rem";
    bar.style.display = "none";
    Close.style.display = "inline-block";
}

Close.onclick = () => {
    navbar.style.top = "-200%";
    navbar.style.height = "0";
    Close.style.display = "none";
    bar.style.display = "inline-block";
}