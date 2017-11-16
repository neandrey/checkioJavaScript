"use strict";

function digitsMultip(data) {

    let countValue = 1;
    data = data.toString()
    console.log(data);

    for (let i = 0 ; i < data.length; i++){
        if(data[i] === '0')
            continue;
        countValue *= Number(data[i]);
    }

    return countValue;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(digitsMultip(123405), 120, "1st");
    assert.equal(digitsMultip(999), 729, "2nd");
    assert.equal(digitsMultip(1000), 1, "3rd");
    assert.equal(digitsMultip(1111), 1, "4th");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
