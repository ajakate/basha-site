module.exports = {
    content: ["./source/**/*.{slim,js}"],
    theme: {
        extend: {
            colors: {
                'basha-turq': '#2dc3dd',
                'basha-yellow': '#fffd72',
                'basha-orange': '#f6a870',
                'basha-bold-orange': '#ff8732',
                'basha-green': '#94e681'
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
            }
        }
    }
}
