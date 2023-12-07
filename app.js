console.log("Develop by Raj Desai");

let bar = document.getElementById("bar");
let Close = document.getElementById("close");
let links = document.getElementById("links");

bar.onclick = () => {
    links.style.top = "100%";
    links.style.height = "14rem";
    bar.style.display = "none";
    Close.style.display = "block";
}

Close.onclick = () => {
    links.style.top = "-200%";
    links.style.height = "0rem";
    bar.style.display = "block";
    Close.style.display = "none";
}