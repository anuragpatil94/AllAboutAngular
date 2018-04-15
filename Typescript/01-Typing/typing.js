// TypeScripts - well - strong typing allows us to define types for our variables and class members
// The compiler is going to yell at us if we assign a value of a wrong type to such a variable or member
// Declaring a variable with a type
// Using the 'let' keyword to create a variable ('const' would define an immutable constant)
var myString;
myString = 'This is a string';
// Try to assign a number to a string => Error
//myString = 4;
// TypeScript can also infer types
var anotherString = 'This is a string without :string'; // => Type 'string' was inferred from the assigned value
// This will still resolve in a compilation error
// anotherString = 4;
// TypeScript may only infer values when those values are assigned at the declaration
// This does not work:
var yetAnotherString;
yetAnotherString = 'This is a string';
// TypeScript does not know the type, therefore we don't get an error ... but no we're also ignoring TypeScripts strength: Typing
yetAnotherString = 5;
// Other basic types
var aString;
var aNumber;
var aBoolean;
var anArray; // This is a generic type => May only hold 'strings' in this case
var anything; // Any can be used if we don't know the actual type => Use it rarely!
// We also got void (=> nothing) and enums (a set of numeric values)
