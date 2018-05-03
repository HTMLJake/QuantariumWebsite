/**
 * @description Navbar element
 */
var navElement = document.getElementById("nav");

// Adjust nav style when scrolling to hide or show depending on Scroll Y value
window.addEventListener("scroll", e => {
    let navY = navElement.style.top.slice(0, -2);
    if(scrollY < (3 * 45)) {
        navElement.style.top = `${45 - (scrollY / 3)}px`;
        //navElement.style.width = `${85 + (scrollY / 5)}%`
        navElement.style.backgroundColor = `rgba(48, 48, 48, ${scrollY / (3 * 45)})`;
    } else {
        //Once passed just set to expected values to bypass refresh rate issues
        navElement.style.top = "0px";
        //navElement.style.width = "98vw";
        navElement.style.backgroundColor = `rgba(48, 48, 48, 1)`;
    }
});

/** 
**  @description Get element's Y position and scroll to that location with Scroll y and nav height offset 
**  @param {DOMElement} section DOMElement of the section to scroll to    
**/
function scrollToLoc(section) {
    let navOffset = 0;
    if(window.innerWidth > 768) {
        navOffset = 75;
    } else {
        navOffset = 0;
    }
    let sectionElement = document.getElementById(section);
    if(sectionElement) {
        console.log(sectionElement.getBoundingClientRect().y);
        window.scrollTo({
            top: sectionElement.getBoundingClientRect().y + scrollY - navOffset,
            behavior: "smooth"
        })
    }
}

/**
 * @description Scrolls to the top of the page
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


