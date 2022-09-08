const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ["./source/**/*.{slim,js}"],
    theme: {
        extend: {
            colors: {
                'basha-turq': '#2dc3dd',
                'basha-yellow': '#f3dc44',
                'basha-orange': '#f6a870',
                'basha-bold-orange': '#ff8732',
                'basha-green': '#94e681',
                'basha-text': '#597176',
                'basha-yellow-link': '#fffd9e'
            },
            gridRowStart: {
                '8': '8',
                '9': '9',
                '10': '10',
                '11': '11',
                '12': '12',
                '13': '13',
            },
            gridRow: {
                'span-7': 'span 7 / span 7',
                'span-8': 'span 8 / span 8',
            },
            ringWidth: {
                '5': '5px',
            }
        }
    },
    plugins: [
        plugin(function({ addUtilities }) {
            const nums = [...Array(13).keys()]
            nums.shift()
            const fullCss = {}

            for (const rowStart in nums) {
                for (const colStart in nums) {
                    for (const rowSpan in nums) {
                        for (const colSpan in nums) {
                            const settings = {
                                'grid-row': `${rowStart} / span ${rowSpan}`,
                                'grid-column': `${colStart} / span ${colSpan}`
                            }
                            fullCss[`.rc-${rowStart}-${rowSpan}-${colStart}-${colSpan}`] = settings
                        }
                    }
                    
                }
            }
            addUtilities(fullCss)
        })
      ]
}
