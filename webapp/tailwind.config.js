/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat'],
            },
            colors: {
                aqua: {
                    50: '#32E0C4',
                    100: '#0D7377',
                },
                light: '#EEEEEE',
                dark: '#212121',
            },
        },
    },
    plugins: [],
}
