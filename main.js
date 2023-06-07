function confirmation(){
    alert("Raedy to download")
}


window.addEventListener("scroll", function(){
    var header = document.getElementById(navbar);
    header.classList.toggle("navbar", window.scrollY > 0);
})
