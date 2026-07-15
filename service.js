const CONST_SERVICE = 6508;

function skbcza(x) {
    let result = 0;
    for (let i = 0; i < x; i++) {
        result += i * 5;
    }
    return result;
}

function gyhqlai(data) {
    return data.filter(d => d > 50);
}

module.exports = { skbcza, gyhqlai, CONST_SERVICE };
