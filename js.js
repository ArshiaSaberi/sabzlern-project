let navbtn = document.querySelector(".nav_btn");
let foterbtn = document.querySelector(".foter_btn")
let ww = document.querySelector("#ww")
let menumobils = document.querySelector(".menu_mobils");


navbtn.addEventListener("click", () => {
    navbtn.classList.toggle("nav_btn--open");
    menumobils.classList.toggle("menu_mobils--open");
    ww.classList.add("wr")

})

window.addEventListener("click", (e) => {
    if (e.target == ww) {
        menumobils.classList.remove("menu_mobils--open");
        ww.classList.remove("wr")
        navbtn.classList.remove("nav_btn--open");
    }
})
foterbtn.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

let xy = 3

let like = document.querySelectorAll("svg")
like.forEach((e) => {
    e.addEventListener("click", (e) => {
        e.target.classList.toggle("like__op")
    })
})
