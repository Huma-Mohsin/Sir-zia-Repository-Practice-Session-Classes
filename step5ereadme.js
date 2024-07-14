// An intersection type is a type that merges several kinds into one. This allows you to combine many types to create a single type with all of the properties that you require. An object of this type will have members from all of the types given. The ‘&’ operator is used to create the intersection type.
let obj1 = {
    student_id: 3232,
    name: "rita",
    Teacher_Id: 7873,
    teacher_name: "seema",
};
console.log(obj1.Teacher_Id); //7873
console.log(obj1.name); // rita
let obj_1 = { prop1: "length", prop2: "width" }; // an object must have both prop1 (from A) and prop2 (from B).
let obj_2 = { prop1: "length", prop2: "width" };
// The key point is that the order of the interfaces in the intersection type doesn't matter. So, A & B is the same as B & A.
let obj_3 = { prop1: "", prop2: "", prop3: "" };
let obj_4 = { prop1: "", prop2: "", prop3: "" };
obj_3.prop3 = "height";
console.log(obj_3.prop3); //height
obj_4.prop1 = "length";
console.log(obj_4.prop1); //length
console.log(obj_3); //{ prop1: '', prop2: '', prop3: 'height' }
console.log(obj_4); //{ prop1: 'length', prop2: '', prop3: '' }
console.log(obj_3 == obj_4); // false 
console.log(typeof obj_3 == typeof obj_4); // true 
console.log(typeof obj_1 == typeof obj_2); // true
export {};
