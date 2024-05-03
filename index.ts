// Question _________ 91


// Create an array of favorite fruits
let favoriteFruits: string[] = ["apple", "banana", "orange"];

// Add a new fruit to the end of the array
favoriteFruits.push("grapes");

// Log the updated array
console.log(favoriteFruits);


// Question _____________ 92 


function removeLastElement<T>(arr: T[]): T | undefined {
    // Check if the array is not empty
    if (arr.length > 0) {
        // Use the .pop() method to remove and return the last element
        return arr.pop();
    } else {
        // Return undefined if the array is empty
        return undefined;
    }
}

// Example usage
let fruits: string[] = ["apple", "banana", "orange"];
let removedFruit: string | undefined = removeLastElement(fruits);

console.log("Removed fruit:", removedFruit);
console.log("Updated array:", fruits);



// Question ____________ 93


let Fruits: string[] = ["Apple", "Banana", "Orange", "Grapes"];

// Find the index of "Banana" in the array
let bananaIndex: number = Fruits.indexOf("Banana");

// Check if "Banana" is found in the array
if (bananaIndex !== -1) {
    // Replace "Banana" with "Mango" using the index
    Fruits[bananaIndex] = "Mango";
    console.log("Replaced 'Banana' with 'Mango':", Fruits);
} else {
    console.log("The fruit 'Banana' was not found in the array.");
};
