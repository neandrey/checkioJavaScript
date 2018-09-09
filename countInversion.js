"use strict";
var swap = function(array, index1, index2){
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
};



function countInversion(sequence){
    //сортировка пузырьком наше всёёёё!!!
    var insert = 0;
    var length = sequence.length;
    for (var i=0; i<length; i++){
        for (var j=0; j<length-1; j++ ){
            if (sequence[j] > sequence[j+1]){
                swap(sequence, j, j+1);
                insert++;
            }
        }
    }
    console.log(insert);
    return insert;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, "Example");
    assert.equal(countInversion([0, 1, 2, 3]), 0, "Sorted");
    assert.equal(countInversion([99, -99]), 1, "Two numbers");
    assert.equal(countInversion([5, 3, 2, 1, 0]), 10, "Reversed");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}