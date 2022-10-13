/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "448px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            xxl: "1600px",
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    primary: "#F8EA22",
                    success: "#F7F086",
                    accent: "#0e161a",
                    error: "#FF3030",
                    info: "#FF9900",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    "base-100": "#0e161a",
                    primary: "#F8EA22",
                    success: "#F7F086",
                    accent: "#0e161a",
                    error: "#FF3030",
                    info: "#FF9900",
                },
            },
            "light",
            "dark",
        ],
    },
};
