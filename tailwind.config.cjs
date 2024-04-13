/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                Box: '0px 4px 8px 0px #DBDDE980',
            },
            fontFamily: {
                'maple-light': ['Maplestory Light'],
                'maple-bold': ['Maplestory Bold'],
            },
            colors: {
                bg100: '#f7f8fd',
                bg200: '#e8ebf6',
                gd: 'linear-gradient(270deg, #00DC7A 0%, #00C3A1 33.33%, #119FFF 66.67%, #0076FF 100%);',
                gdh: 'linear-gradient(270deg, #04D363 0%, #04AAA4 33.33%, #0B8AF8 66.67%, #0163FF 100%);',
            },
        },
    },
    plugins: [],
}
