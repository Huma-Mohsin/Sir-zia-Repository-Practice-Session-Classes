var EDirection;
(function (EDirection) {
    EDirection[EDirection["Up"] = 0] = "Up";
    EDirection[EDirection["Down"] = 1] = "Down";
    EDirection[EDirection["Left"] = 2] = "Left";
    EDirection[EDirection["Right"] = 3] = "Right";
})(EDirection || (EDirection = {}));
var ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
EDirection.Up; // (enum member) EDirection.Up = 0
ODirection.Up; // (property) Up: 0
function walk(dir) {
    return ("Walking in direction ".concat(dir));
}
function run(dir) {
    return ("Running with direction value ".concat(dir));
}
console.log(walk(EDirection.Left)); // Output: Walking in direction 1
console.log(run(ODirection.Right)); // Output: Running with direction 2
