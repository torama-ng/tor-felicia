// Creating object with object literal

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw')
//     }
// };

//  Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }
 const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);

const circle = new Circle(10);

circle.location = { x: 1 }; // add new member to object
circle['location'] = { x: 1 }; // using bracket notation

const propertyName = 'location';
circle.location

delete circle.location; // to delete a property
delete circle['location']; // delete a property


// enumerating or iterate properties

for (let key in circle) {
  if (typeof circle[key] !== 'function')
    console.log(key, circle[key]); // to get the values of the prop the bracket notation is used
}

const keys = Object.keys(circle);
console.log(keys); // to get all the keys in an array

if ('radius' in circle) // check for the existence of a property
  console.log('Circle has a radius.'); 