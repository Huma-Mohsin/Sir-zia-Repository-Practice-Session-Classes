// An intersection type is a type that merges several kinds into one. This allows you to combine many types to create a single type with all of the properties that you require. An object of this type will have members from all of the types given. The ‘&’ operator is used to create the intersection type.

//Example 

interface Student { 
    student_id: number; 
    name: string; 
    } 
    
    interface Teacher { 
    Teacher_Id: number; 
    teacher_name: string; 
    } 
    
    type intersected_type = Student & Teacher; 
    
    let obj1: intersected_type = { 
    student_id: 3232, 
    name: "rita", 
    Teacher_Id: 7873, 
    teacher_name: "seema", 
    }; 
    
    console.log(obj1.Teacher_Id); //7873
   
    console.log(obj1.name);// rita

    //-------------------------------------------------------------------------------

    //Example 2: In this example, we create two interfaces A and B, in which there are two properties named ‘feauA’ and ‘feauB’. But the type of feauA isn’t the same in both the interfaces, 
    
    //When we try to assign a value 20 to feauA typescript compiler raises an error as the intersection type is of the type ‘string & number’. If we try to assign a string to feauA, the error is not raised as to when intersected the type is String.
     
   // interface A { 
   //      feauA: string ;
   //      feauB: string; 
   //      } 
        
   //      interface B { 
   //      feauA: number; 
   //      feauB: string; 
   //      } 
        
   //      type AB = A & B; 
        
        
   //      let obj11: AB ={feauA:"w", feauB:"a"};
   //      let obj12: AB ={feauA:"b",feauB:"c"}
        
        
   //      // Error, Type '20' is not assignable 
   //      // to type 'string & number' 
   //      obj11.feauA = 20;      
   //      console.log(obj11.feauA); //error TS2322: Type 'number' is not assignable to type 'never'.
   //      //obj11.feauA = 20; 
   //      // Error, Type '20' is not assignable
   //      // to type 'string & number'
        
   //      obj12.feauB = "c"; 
   //      console.log(obj12.feauB); 
        
        //-------------------------------------------------------------------------------

        


        //Example 3: Intersection types are commutative and associative: The order of the intersection doesn’t matter when we intersect two or more types. Even if the order of intersection changes the type of the intersected objects are the same, the ‘typeof’ operator is used to check that, the properties of the intersected objects are also the same. 

        //commutative property:  A&B = B&A
     //associative property: (A&B)&C = A&(B&C)

     interface A { 
        prop1: String; 
        } 
        
        interface B { 
        prop2: String; 
        } 
        
        interface C { 
        prop3: String; 
        } 
        
        let obj_1: A & B = { prop1: "length", prop2: "width" }; // an object must have both prop1 (from A) and prop2 (from B).

        let obj_2: B & A = { prop1: "length", prop2: "width" }; 
        // The key point is that the order of the interfaces in the intersection type doesn't matter. So, A & B is the same as B & A.

        let obj_3: A & (B & C) = { prop1: "", prop2: "", prop3: "" }; 
        let obj_4: (A & B) & C = { prop1: "", prop2: "", prop3: "" }; 
        
        obj_3.prop3 = "height"; 
        console.log(obj_3.prop3); //height
        
        obj_4.prop1 = "length"; 
        console.log(obj_4.prop1); //length
        
console.log(obj_3);//{ prop1: '', prop2: '', prop3: 'height' }

console.log(obj_4); //{ prop1: 'length', prop2: '', prop3: '' }

        console.log(obj_3 == obj_4); // false 
        
        console.log(typeof obj_3 == typeof obj_4); // true 
        console.log(typeof obj_1 == typeof obj_2); // true
        
