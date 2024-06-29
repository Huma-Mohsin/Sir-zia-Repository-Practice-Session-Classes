// can we do narrowing with any data type
// Yes, you can use type guards to narrow the type of any data type in TypeScript, not just strings. Here are some examples:
export {};
// 1. Number:
// function isNumber(x: any): x is number {
//   return typeof x === 'number';
// }
// 1. Array:
// function isArray<T>(x: any): x is T[] {
//   return Array.isArray(x);
// }
// 1. Object:
// function isObject(x: any): x is object {
//   return typeof x === 'object' && x !== null;
// }
// 1. Boolean:
// function isBoolean(x: any): x is boolean {
//   return typeof x === 'boolean';
// }
// 1. Null or Undefined:
// function isNullorUndefined(x: any): x is null | undefined {
//   return x === null || x === undefined;
// }
// 1. Specific types like dates or regex:
// function isDate(x: any): x is Date {
//   return x instanceof Date;
// }
// function isRegExp(x: any): x is RegExp {
//   return x instanceof RegExp;
// }
// These are just a few examples. You can create type guards for any data type or custom type you need.
// Remember, the key is to use the appropriate check (like typeof, instanceof, or other checks) to verify the type of the value, and then return a type predicate that indicates the narrowed type.
