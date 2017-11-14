"use strict";

function findMessage(data) {
    let indexArray;
    let resultValue = "";
    for (indexArray = 0; indexArray < data.length; indexArray++)
    {
        if(data.charAt(indexArray) >= "A" && data.charAt(indexArray) <= "Z")
        {
            resultValue += data[indexArray];
        }
    }

    return resultValue;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
    assert.equal(findMessage("hello world!"), "", "Nothing");
    assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}