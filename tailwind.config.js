/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            main: "#26c6da",
        },
        backgroundColor: {
            main: "#26c6da",
            "sub-main": "#3b82f6ed",
        },
        backgroundImage: {
            sidebar: "url('./assets/sidebar_img.jpg')",
        },
    },
    plugins: [],
};
