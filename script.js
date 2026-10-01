// Manages switching between tabs
function openTab(tabName, evt) {
    
    var i, tab, navButts, selectedTab;

    tab = document.getElementsByClassName("tab");
    navButts = document.getElementsByClassName("navButt");
    selectedTab = document.getElementById(tabName);

    // Hides all elements with class = "tab"
    for (let i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
    }

    // get all elements with class = "nabButt" and remove the class "active"
    for (i = 0; i < navButts.length; i++) {
        navButts[i].className = navButts[i].className.replace(" active"," ");
    }


    // displays the selected tab and add active cass to the button that 
    // opened the tab
    selectedTab.style.display = "block";
    evt.currentTarget.className += " active";

    
}



// I used W3Schools to do this