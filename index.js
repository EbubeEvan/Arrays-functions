//QUESTION 1

/**
 * Mutating array methods are those methods that changes the values of the original array. Examples are .pop(), .push(), .copyWithin(), .unShift(), .fill()
 * 
 * Non-mutating array methods are those array methods that returns a new array with the new changes made to an array. It doesn't change the original array. 
 * Examples includes .filter(), .find(), .indexOf(), forEach(), .includes().
 */



//QUESTION 2
let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// Adding kotlin to the end of the array
languages.push("Kotlin")

// Adding "Java" after "Ruby"

languages.splice(languages.indexOf("Ruby")+1, 0, "Java");

// Removing the first element of the array
languages.shift()

// Adding "Scala" and "Swift" to the beginning of the array
languages.unshift("Scala", "Swift")

// Replacing "PHP" with "Go" and "Rust"
languages.splice(languages.indexOf("PHP"), 1, "Go", "Rust")


/*QUESTION 3
 * The value of fruit would be fruit = ["apple", "mango", "orange"]
 * */
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
        console.log(changeFruit(fruit))


// QUESTION 4

function arrayOfNumbs (numb){
	return Math.max(...numb)
}

console.log(arrayOfNumbs([5, 7, 76, 100, 8 ,10]))


// QUESTION 5 

let newArray = []
function valTimesIndex (numb) {
    for (let index = 0; index < numb.length; index++){
		numb[index] *= index 
	}
	return newArray.push(numb)
}

let arr = valTimesIndex([2, 4, 9, 24, 1, 0, 6])

console.log(newArray) 