 enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

EDirection.Up; // (enum member) EDirection.Up = 0
ODirection.Up; // (property) Up: 0

function walk(dir: EDirection) {
  return(`Walking in direction ${dir}`);
}

type Direction12 = typeof ODirection[keyof typeof ODirection];

function run(dir: Direction12) {
  return(`Running with direction value ${dir}`);
}

console.log(walk(EDirection.Left)); // Output: Walking in direction 2
console.log(run(ODirection.Right)); // Output: Running with direction 3


