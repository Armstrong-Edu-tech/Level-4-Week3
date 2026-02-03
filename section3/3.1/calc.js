// Method 1: Define First, Export Later
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };

// Method 2: Export Directly (Inline)
module.exports = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
};

// Adding Properties One by One
module.exports.add = function (a, b) {
    return a + b;
};

module.exports.subtract = function (a, b) {
    return a - b;
};

// Using the exports Shorthand
exports.add = function (a, b) {
    return a + b;
};

exports.subtract = function (a, b) {
    return a - b;
};