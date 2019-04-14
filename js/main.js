// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

const foods = [hamburger, zucchini, chickenBreast, corn, steak];

const cookedFood = [];

//shelley's method
function grill (currentObject) {
    currentObject.cooked = true;
    cookedFood.push(currentObject);
};

grill(steak);
grill(corn);
console.log(cookedFood);



//manually changed some items to cooked=true
function grilled(foodarray) {
    for (let i = 0; i < foodarray.length; i++) {
        if (foodarray[i].cooked === true) {
            cookedFood.push(foodarray[i]);
        }
    }
}

grilled(foods);
console.log("all food", foods);
console.log("cooked food", cookedFood);




// // Splice
// function grilling(i) {
//     i.cooked = true;
//     cookedFood.push(i);
//     for (var j = 0; j <= foods.length; j++) {
//         if (foods[j] === i)
//         foods.splice(i, 1);
//     }
// }
// grilling(hamburger);
// console.log("spliced", cookedFood)