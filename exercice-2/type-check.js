const type_check_v1 = (check, type) => {
    switch (true) {
        case check === null && type === 'null':
        case Array.isArray(check) && type === 'array':
        case check === undefined && type === 'undefined':
        case typeof check === type && check !== null && !Array.isArray(check):
            return true;
        default:
            return false;
    }
}

const type_check_v2 = (check, type) => {
    switch (true) {
        case type.hasOwnProperty('type') && !type.hasOwnProperty('value') && !type.hasOwnProperty('enum'):
            return type_check_v1(check, type.type);
        case type.hasOwnProperty('type') && type.hasOwnProperty('value') && !type.hasOwnProperty('enum'):
            return type_check_v1(check, type.type) && JSON.stringify(check) === JSON.stringify(type.value);
        case !type.hasOwnProperty('type') && !type.hasOwnProperty('value') && type.hasOwnProperty('enum'):
            return check === type.enum.length;
        default:
            return false;
    }
}
