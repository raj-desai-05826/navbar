console.log("Develop by Raj Desai.");

let bar = document.querySelector("#bars");
let cls = document.querySelector(".close")
let navbar = document.querySelector("#navbar");

bar.onclick = () => {
    // bar.classList.toggle('fa-times');
    navbar.classList.toggle("active");
    bar.style.background = "var(--blue)";
    bar.style.color = "#fff";
    bar.style.display = "none";
    navbar.style.display = "block";
    cls.style.display = "inline-block";
}

cls.onclick = () => {
    cls.style.background = "var(--blue)";
    cls.style.color = "#fff";
    cls.style.display = "none";
    navbar.style.display = "none";
    bar.style.display = "inline-block";
}