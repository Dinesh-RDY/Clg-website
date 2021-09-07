var isOpen = false;
function toggleSideBar(x) {
    if (!isOpen) {
        isOpen = true;
        return openSideBar(x);
    }
    isOpen = false;
    return closeSidebar(x);
}
function openSideBar(x) {
    x.classList.toggle("change");
    document.getElementById("sidebarButton").scrollIntoView({ block: "start" });
    // document.getElementById("sidebar").style.transition = "2s";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar").style.margin = "0";
    document.getElementById("sidebar").style.float = "left";

    document.getElementById("sidebar").style.width = "30%";
    document.getElementById("sidebar").style.backgroundColor = "#fcd5ce";
    document.getElementById("sidebarButton").style.marginLeft = "0";
}
function closeSidebar(x) {
    x.classList.toggle("change");
    window.scrollTo(0, 0);
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebarButton").style.marginLeft = "0";
}
