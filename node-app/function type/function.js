"use strict";
function newFn(fn) {
    setTimeout(fn, 1000);
}
newFn(function () {
    console.log("hello");
    console.log(1);
});
// return string 
function newFn1(fn) {
    setTimeout(fn, 1000);
}
newFn1(function () {
    return "hi";
});
// return number 
function newFn2(fn) {
    setTimeout(fn, 1000);
}
newFn2(function () {
    return 1;
});
