function updateThemeIcons() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('theme-icon-sun').style.opacity = isDarkMode ? '0' : '1';
    document.getElementById('theme-icon-moon').style.opacity = isDarkMode ? '1' : '0';
}

