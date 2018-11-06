function ucfirst(str) {
    if (typeof str !== 'string') {
        return null;
    }

    return str.charAt(0).toUpperCase() + str.substring(1);
}

function capitalize(str) {
    if (typeof str !== 'string') {
        return null;
    }

    let temp = '';

    for (let i = 0; i < str.length; i++) {
        if (!str[i - 1] || str[i - 1] === ' ') {
            temp += str[i].toUpperCase();
        } else {
            temp += str[i];
        }
    }

    return temp;
}

function camelCase(str) {
    if (typeof str !== 'string') {
        return null;
    }

    let temp = '';

    for (let i = 0; i < str.length; i++) {
        if (!str[i - 1] || str[i - 1] === ' ') {
            temp += str[i].toUpperCase();
        } else {
            temp += str[i];
        }
    }

    return temp.replace(' ', '');
}

function snake_case(str) {
    if (typeof str !== 'string') {
        return null;
    }

    return str.replace(' ', '_').toLocaleLowerCase();
}

function leet(str) {
    if (typeof str !== 'string') {
        return null;
    }

    const voyelles = { 'A': '4', 'E': '3', 'I': '1', 'O': '0', 'U': '(_)', 'Y': '7' };
    let temp = '';
    
    for (let i = 0; i < str.length; i++) {
        if (voyelles[str[i].toUpperCase()]) {
            temp += voyelles[str[i].toUpperCase()];
        } else {
            temp += str[i];
        }
    }

    return temp;
}

function prop_access(object, path) {
    if (typeof path !== 'string' || typeof object !== 'object') {
        return null;
    }

    return true;
}

function verlan(str) {
    if (typeof str !== 'string') {
        return null;
    }

    let temp = str.split(' ');
    var verlan = [];

    for (let i = 0; i < temp.length; i++) {
        let toBeReversed = temp[i].split('');
        let reversedArray = toBeReversed.reverse();
        verlan += reversedArray.join('') + ' ';
    }

    return verlan.trim();
}

function yoda(str) {
    if (typeof str !== 'string') {
        return null;
    }

    return str.split(' ').reverse().join(' ');
}
