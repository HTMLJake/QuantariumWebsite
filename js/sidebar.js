/* 
*   TODO: Don't toggle off when selecting currently selected
*   TODO: Show Home selected on load
*/

/** 
**  @description Toggles sidebar visibilty  
**  @param {DOMElement} Hamburger Hamburger Element reference    
**/
function toggleSidebar(hamburger) {
    var sidebarElem = window.document.getElementById("sidebar");
    var mainElem = window.document.getElementsByClassName("main")[0];
    sidebarElem.classList.toggle("open");
    hamburger.classList.toggle("open")
}

var prevSelection;

function SidebarSelection(item) {
    if(prevSelection) {
        if(prevSelection !== item) {
            prevSelection.classList.toggle("selected");
            item.classList.toggle("selected");
            prevSelection = item;
        }
    } else {
        item.classList.toggle("selected");
        prevSelection = item;
    }
}