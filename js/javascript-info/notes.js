// *** Type Conversions ***
"6" / "2" // string type conversion
Number("6") // normal way to read value from string source
Number("a") // NaN
Number(true) // 1
Number(false) // 0

// Boolean conversions
// 0, null, undefined, NaN, "" = false
Boolean("2") //true
Boolean("0") //true
Boolean(" ") // true
let a = Boolean("") // false

console.log(a)