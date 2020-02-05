"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.bubbleSort = function (arr) {
    var newArr = __spreadArrays(arr);
    var i = 0;
    var cycles = 0;
    while (i < newArr.length) {
        var j = i;
        while (j < newArr.length) {
            cycles++;
            if (newArr[i] > newArr[j]) {
                var temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
            j++;
        }
        i++;
    }
    return newArr;
};
/*
* Sort array using slightly optimizes bubble sort. Does not modify the original
* array, instead a copy is made
* @param arr The array to sort
* @returns The sorted array
*/
exports.bubbleSort2 = function (arr) {
    var newArr = __spreadArrays(arr);
    for (var i = newArr.length - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (newArr[j - 1] > newArr[j]) {
                var temp = newArr[j - 1];
                newArr[j - 1] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    return newArr;
};
