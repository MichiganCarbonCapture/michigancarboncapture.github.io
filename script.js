let hamburger = document.getElementById('hamburger');
let mobileNav = document.getElementById("navlinks");

hamburger.addEventListener("click", function() { 
    if (mobileNav.style.display == "flex"){
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'flex';
    }
}
);
