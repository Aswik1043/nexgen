function expandSearchBar() {
    document.getElementById("expandedSearch").style.display = "block";
    document.getElementById("mainSearchBar").style.display = "none";
}
// Function to collapse the expanded search bar
function collapseSearchBar() {
    document.getElementById("expandedSearch").style.display = "none";
    document.getElementById("mainSearchBar").style.display = "block";
}

// Close the search fields if the user clicks outside or presses "Enter"
document.addEventListener('click', function(event) {
    var expandedSearch = document.getElementById("expandedSearch");
    var mainSearchBar = document.getElementById("mainSearchBar");

    if (!expandedSearch.contains(event.target) && event.target !== mainSearchBar) {
        collapseSearchBar();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        collapseSearchBar();
    }
});
function toggleProfileMenu() {
    var profileMenu = document.getElementById("profileMenu");
    if (profileMenu.style.display === "block") {
        profileMenu.style.display = "none";
    } else {
        profileMenu.style.display = "block";
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.profile-logo')) {
        var dropdowns = document.getElementsByClassName("profile-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
