module.exports = function toReadable (number) {
    let nStr = number.toString();
    
    const getHundred = (nStr) => {
        switch(nStr[nStr.length - 3]) {
        case '1':
            return 'one hundred';
        case '2':
            return 'two hundred';
        case '3':
            return 'thee hundred';
        case '4':
            return 'four hundred';
        case '5':
            return 'five hundred';
        case '6':
            return 'six hundred';
        case '7':
            return 'seven hundred';
        case '8':
            return 'eight hundred';
        case '9':
            return 'nine hundred';
        }
    };

    const getDecimal = (nStr) => {
        switch(nStr[nStr.length - 2]) {
        case '2':
            return 'twenty';
        case '3':
            return 'thirty';
        case '4':
            return 'forty';
        case '5':
            return 'fifty';
        case '6':
            return 'sixty';
        case '7':
            return 'seventy';
        case '8':
            return 'eighty';
        case '9':
            return 'ninety';            
        }
    };

    const getUnit = (nStr) => {
        switch(nStr[nStr.length - 1]) {
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';    
        }
    };

    const getTeen = (nStr) => {
        switch(nStr.slice(-2)) {
            case '10':
                return 'ten';
            case '11':
                return 'eleven';
            case '12':
                return 'twelve';
            case '13':
                return 'thirteen';
            case '14':
                return 'fourteen';
            case '15':
                return 'fifteen';
            case '16':
                return 'sixteen';
            case '17':
                return 'seventeen';
            case '18':
                return 'eighteen';
            case '19':
                return 'nineteen';
        }
    };

    if (nStr.length === 3 && nStr[1] === '0' && nStr[2] === '0') {
        return getHundred(nStr);
    } else if (nStr.length === 3 && nStr[1] === '0' && nStr[2] !== '0') {
        return (getHundred(nStr) + ' ' + getUnit(nStr));
    } else if (nStr.length === 3 && nStr[1] !== '0' && nStr[1] !== '1' && nStr[2] === '0') {
        return (getHundred(nStr) + ' ' + getDecimal(nStr));
    } else if (nStr.length === 3 && nStr[1] === '1') {
        return (getHundred(nStr) + ' ' + getTeen(nStr));
    } else if (nStr.length === 3 && nStr[1] !== '0' && nStr[1] !== '1' && nStr[2] !== '0') {
        return (getHundred(nStr) + ' ' + getDecimal(nStr) + ' ' + getUnit(nStr));
    } else if (nStr.length === 2 && nStr[0] !== '1' && nStr[1] === '0') {
        return getDecimal(nStr);
    } else if (nStr.length === 2 && nStr[0] !== '1' && nStr[1] !== '0') {
        return (getDecimal(nStr) + ' ' + getUnit(nStr));
    } else if (nStr.length === 2 && nStr[0] === '1') {
        return getTeen(nStr);
    } else if (nStr.length === 1 && nStr !== '0') {
        return getUnit(nStr);
    } else {return 'zero';
    }
};
