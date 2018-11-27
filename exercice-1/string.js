function ucfirst(str) {
    if (typeof str !== 'string') {
        return '';
    }

    return str.charAt(0).toUpperCase() + str.substring(1);
}

function capitalize(str) {
    if (typeof str !== 'string') {
        return '';
    }

    let temp = '';

    for (let i = 0; i < str.length; i++) {
        if (!str[i - 1] || str[i - 1] === ' ') {
            temp += str[i].toUpperCase();
        } else {
            temp += str[i].toLowerCase();
        }
    }

    return temp;
}

function camelCase(str) {
    if (typeof str !== 'string') {
        return '';
    }

    let temp = '';

    for (let i = 0; i < str.length; i++) {
        if (!str[i - 1] || str[i - 1] === ' ' || str[i - 1] === '_') {
            temp += str[i].toUpperCase();
        } else {
            temp += str[i].toLowerCase();
        }
    }

    return temp.replace(/[ _]/g, '');
}

function snake_case(str) {
    if (typeof str !== 'string') {
        return '';
    }

    return str.replace(/ /g, '_').toLowerCase();
}

function leet(str) {
    if (typeof str !== 'string') {
        return '';
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

function verlan(str) {
    if (typeof str !== 'string') {
        return '';
    }

    let temp = str.split(' ');
    var verlan = [];

    for (let i = 0; i < temp.length; i++) {
        let toBeReversed = temp[i].split('');
        let reversedArray = toBeReversed.reverse();
        verlan.push(reversedArray.join(''));
    }

    return verlan.join(' ');
}

function yoda(str) {
    if (typeof str !== 'string') {
        return '';
    }

    return str.split(' ').reverse().join(' ');
}

function prop_access(object, path) {
    if (typeof object !== 'object') {
        return '';
    }
    if (path === null || !path) {
        return object;
    }

    var aPath = path.split('.');

    for (let i = 0; i < aPath.length; i++) {
        if (object[aPath[i]] === undefined) {
            console.log(`${aPath.slice(0, i + 1).join('.')} does not exist`);
            return;
        }
        
        object = object[aPath[i]];
    }

    return object;
}
