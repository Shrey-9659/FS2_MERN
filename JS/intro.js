// node -v
// npm -v (node package manager)
//single line comment
/* multiline
comment */

// Variable -> var (not recommended), let, const

// Var --> hoisting, redeclaration, reinitialization
// var name = "Shrey"
// name = "Khushi"
// console.log(name)

// Let --> hoisting (temporal dead zone), no redeclaration, reinitialization
// let nameOne = "Rahul"
// nameOne = "Khushi"
// console.log(nameOne)

// Const --> hoisting (temporal dead zone), no redeclaration, no reinitialization
// const nameTwo = "Rohit"
// nameTwo = "Khushi"
// console.log(nameTwo)

// Strictness -> Less to High --> Var, Let, Const


// DataTypes - Primitive (Call by value)
// string
// let str = "Shrey"
// typeof -> string
// number
// let num = 123;
// typeof -> number

// boolean
// let bool = true;
// typeof -> boolean

// null
// let nullValue = null;
// typeof -> object

// undefined
// let undefinedValue = undefined;
// let undefinedValue;
// typeof -> undefined

// bigInt
// let bigNum = 12345678765432345678765432345678987654323456787654323456787654n
// typeof -> bigint

// symbol
// let name1 = Symbol("Shrey")
// let name2 = Symbol("Shrey")
// typeof -> symbol

// DataTypes - Non-Primitive (Call by reference)

// Object
// let obj = {
//     name : "Shrey",
//     year : 2025
// }
// typeof -> object

// Array
// let arr = [1,2,3,4,5]
// typeof -> object
