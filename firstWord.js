"use strict";

function firstWord(a, b) {
    var regText = /[ ,.]/;
    var text = a.split(regText);
    var result1 = [];
    console.log(text);

    var regText1 = /[A-Za-z]/;
    for(var i = 0; i < text.length; i++){
        if(text[i].match(regText1)){
            result1 += (text[i]);
            break;
        }
    }
    console.log(result1);
    return result1;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(firstWord("Hello world"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(firstWord("Hello world"), "Hello")
    assert.equal(firstWord(" a word "), "a")
    assert.equal(firstWord("don't touch it"), "don't")
    assert.equal(firstWord("greetings, friends"), "greetings")
    assert.equal(firstWord("... and so on ..."), "and")
    assert.equal(firstWord("hi"), "hi")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}