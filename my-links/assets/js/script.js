// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}


function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "https://i.ibb.co/1MXLbBW/moon.png") 
    {
        document.getElementById("imgClickAndChange").src = "https://i.ibb.co/hFG3LzS/sunny.png";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "https://i.ibb.co/1MXLbBW/moon.png";
    }
}


// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();