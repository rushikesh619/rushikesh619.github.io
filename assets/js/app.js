let prevScrollpos = window.pageYOffset;
let loader = document.getElementById("loader");

window.addEventListener("load", function() {
    loader.style.display = "none";
})


window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.top = "0";
  } else {
    document.getElementById("navBar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function openExperience(idToOpen, idFirstToClose, idTwoToClose) {
    document.getElementById(idToOpen).style.cssText = 'display: block';

    document.getElementById(idFirstToClose).style.cssText = 'display: none';

    document.getElementById(idTwoToClose).style.cssText = 'display: none';
};

function closeMenu() {
    document.getElementById("menuToggle").checked = false;
};

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>{observer.observe(el)});