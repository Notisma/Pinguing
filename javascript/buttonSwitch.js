var stylesheet = sessionStorage.getItem('selectedTheme');

document.getElementById("darklightbtn").addEventListener("click", function() {
    
    if (stylesheet.includes('lightStyle.css')) {
        sessionStorage.setItem('selectedTheme', "../styles/darkStyle.css");
    } else {
        sessionStorage.setItem('selectedTheme', "../styles/lightStyle.css");
    }

    location.reload();
});
