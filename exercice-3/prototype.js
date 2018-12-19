String.prototype.ucfirst = ucfirst;
String.prototype.capitalize = capitalize;
String.prototype.camelCase = camelCase;
String.prototype.snake_case = snake_case;
String.prototype.leet = leet;
String.prototype.verlan = verlan;
String.prototype.yoda = yoda;
Object.prototype.prop_access = prop_access;

function ucfirst() {
    return this.valueOf().charAt(0).toUpperCase() + this.valueOf().substring(1);
}

function capitalize() {
    let temp = '';

    for (let i = 0; i < this.valueOf().length; i++) {
        if (!this.valueOf()[i - 1] || this.valueOf()[i - 1] === ' ') {
            temp += this.valueOf()[i].toUpperCase();
        } else {
            temp += this.valueOf()[i].toLowerCase();
        }
    }

    return temp;
}

function camelCase() {
    let temp = '';

    for (let i = 0; i < this.valueOf().length; i++) {
        if (!this.valueOf()[i - 1] || this.valueOf()[i - 1] === ' ' || this.valueOf()[i - 1] === '_') {
            temp += this.valueOf()[i].toUpperCase();
        } else {
            temp += this.valueOf()[i].toLowerCase();
        }
    }

    return temp.replace(/[ _]/g, '');
}

function snake_case() {
    return this.valueOf().replace(/ /g, '_').toLowerCase();
}

function leet() {
    const voyelles = { 'A': '4', 'E': '3', 'I': '1', 'O': '0', 'U': '(_)', 'Y': '7' };
    let temp = '';
    
    for (let i = 0; i < this.valueOf().length; i++) {
        if (voyelles[this.valueOf()[i].toUpperCase()]) {
            temp += voyelles[this.valueOf()[i].toUpperCase()];
        } else {
            temp += this.valueOf()[i];
        }
    }

    return temp;
}

function verlan() {
    let temp = this.valueOf().split(' ');
    var verlan = [];

    for (let i = 0; i < temp.length; i++) {
        let toBeReversed = temp[i].split('');
        let reversedArray = toBeReversed.reverse();
        verlan.push(reversedArray.join(''));
    }

    return verlan.join(' ');
}

function yoda() {
    return this.valueOf().split(' ').reverse().join(' ');
}

function prop_access(path) {
    if (path === null || !path) {
        return this.valueOf();
    }

    var aPath = path.split('.');
    var object = this.valueOf();

    for (let i = 0; i < aPath.length; i++) {
        if (object[aPath[i]] === undefined) {
            console.log(`${aPath.slice(0, i + 1).join('.')} not exist`);
            return;
        }

        object = object[aPath[i]];
    }

    return object;
}
