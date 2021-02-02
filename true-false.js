// const name = "0";
// falsy
// 0
// null
// undefined
// ""
// NaN
// truthy
// '0'
// ' '
// []
// false

let name = 12;

console.log(name);

if (name || name == 0) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}
