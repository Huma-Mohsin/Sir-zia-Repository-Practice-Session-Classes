import a from "./first";
import {b, c as d} from "./second";

console.log(a + b + d);

//export and export default are both used to export entities from a module, but they serve slightly different purposes:

// Export

// - Used to export a named entity (variable, function, class, or type)
// - Makes the entity available for import in other modules

// Export Default

// - Used to export a single default entity from a module
// - Makes the entity available for import in other modules without needing to specify its name

// Key differences:

// - export requires the importing module to specify the name of the entity being imported
// - export default allows the importing module to import the entity without specifying its name

// When to use each:

// - Use export when you want to export multiple named entities from a module
// - Use export default when you want to export a single entity as the default export of a module

// Note that a module can only have one default export, but it can have multiple named exports.

// Importing examples:

// Importing named exports

// import { add, subtract } from './math';

// Importing default export

// import add from './math';