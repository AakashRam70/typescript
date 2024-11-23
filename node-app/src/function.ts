function newFn(fn: () => void) {
    setTimeout(fn, 1000);
}

newFn(function () {
    console.log("hello");
    console.log(1)
})

// return string 
function newFn1(fn: () => string) {
    setTimeout(fn, 1000);
}

newFn1(function () {
    return "hi";
})

// return number 
function newFn2(fn: () => number) {
    setTimeout(fn, 1000);
}

newFn2(function () {
    return 1;
})


