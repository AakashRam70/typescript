enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
    if (keyPressed == Direction.Up) {
        console.log("Hello")
    }
}

doSomething(Direction.Right);
doSomething(Direction.Down);
console.log(Direction.Down)
console.log(Direction.Up)