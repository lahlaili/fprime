var nav_tr = false;

function toggleNav() { // Changed function name to toggleNav
    let n = document.getElementById("nav");
    if (nav_tr === false) { // Use nav_tr instead of nav
        n.style.display = "block"; // Changed .style.display("block") to .style.display = "block"
        nav_tr = true; // Update nav_tr
    } else {
        n.style.display = "none"; // Changed .style.display("none") to .style.display = "none"
        nav_tr = false; // Update nav_tr
    }
}
