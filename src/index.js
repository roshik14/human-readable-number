module.exports = function toReadable (number) {
    const units = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty'
    ]

    const dozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred',
     'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    if (number === 0) {
        return 'zero';
    }

    if (number < 100) {
        if (number <= 20 ) {
            for (let i = 1; i < units.length; i++) {
                if (i === number) {
                    return units[i];
                }
            }
        }
        else {
            for (let i = 2; i < dozens.length; i++) {
                if(Math.floor(number / 10) === i) {
                for (let j = 0; j < units.length; j++ ) {
                    if (number % 10 === 0) {
                        return dozens[i];
                    }
                    if(number % 10 === j) {
                        return dozens[i] + ' ' +  units[j];
                    }
                }
                }
            }
        }
    }
    else {
        for (let i = 1; i < hundreds.length; i++) {
            if (Math.floor(number / 100) === i) {
                const num = number % 100;
                if (number % 100 === 0) {
                    return hundreds[i];
                }
                if (num <= 20) {
                    for (let k = 0; k < units.length; k++) {
                        if (k === num ) {
                            return hundreds[i] + ' ' + units[k];
                        }
                    }
                }
                if (num > 20) {
                    for (let c = 2; c < dozens.length; c++) {
                        if ((Math.floor(number / 10) % 10) === c) {
                            for (let v = 1; v < units.length; v++) {
                                if ((number % 100 - (c * 10)) === 0) {
                                    return hundreds[i] + ' ' + dozens[c];
                                }
                                if (number % 10 === v) {
                                    return hundreds[i] + ' ' + dozens[c] + ' ' + units[v];
                                }
                            }
                        }
                    }
                }
            }

        }


    }

}
