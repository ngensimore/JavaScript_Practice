let side1 = 5
let side2 = 6
let side3 = 7

// Heron's Forumula to calculate area of triangle given 3 sides
// s = (a + b + c) / 2
// A = ((s(s - a)(s - b)(s - c))^(1/2))

let s = (5 + 6 + 7) / 2;

let Area = ((s * (s - side1) * (s - side2) * (s - side3)) ** (.5))

console.log(Area)