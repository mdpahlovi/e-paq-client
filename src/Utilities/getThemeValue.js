const getThemeValue = () => {
    let dataTheme = document.documentElement.attributes[0];
    if (dataTheme.value === "light") {
        return "light";
    } else {
        return "dark";
    }
};

export { getThemeValue };
