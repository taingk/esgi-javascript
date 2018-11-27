const type_check_v1 = (check, type) => {
    switch (true) {
        case check === null && type === 'null':
            return true;
        case Array.isArray(check) && type === 'array':
            return true;
        case check === undefined && type === 'undefined':
            return true;
        case typeof check === type && check !== null && !Array.isArray(check):
            return true;
        default:
            return false;
    }
}
