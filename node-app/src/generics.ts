function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myself");
let output2 = identity<number>(34)