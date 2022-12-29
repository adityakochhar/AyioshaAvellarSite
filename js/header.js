document
    .getElementsByTagName("body")[0]
    .addEventListener("click", function (e) {
        clickListener(e);
    });

function closeSideNav() {
    document.getElementById("mySidenav").style.width = "0px";
}
function clickListener(e) {
    let clickedId = e.target.id;
    let navState = window.getComputedStyle(
        document.getElementById("mySidenav")
    ).width;
    if (clickedId !== "mySidenav" && navState === "250px") {
        closeSideNav();
    }
    if (clickedId === "menuIcon" && navState === "0px") {
        document.getElementById("mySidenav").style.width = "250px";
    }
}
