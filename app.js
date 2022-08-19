console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers=[2, 2, 1, 7, 8, 3, 1];

function arraySum (array)
{
    let sum = 0;
    for (let i =0;i< array.length;i++){
        sum +=array[i];
    }
    return sum;
}
let sum1 =arraySum([1,3,4,5]);
let sum2 =arraySum(numbers);
console.log(sum1)
console.log(sum2)
 
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book ={
    Title:"sky",
    author:"aman", 
    pages:100,
    Readed:3,
    info:function() {
        return `${this.Title} by ${this.author} is ${this.pages} pages long,and has been read ${this.Readed} tims
        .`
    } };
book.author;
book.Readed++;
console.log(book.info());
 
console.log("EXERCISE 3:\n==========\n");
let text=("The quick brown fox jumps over the lazy dog");
function reverseString(str)
{   let reversetext="";
    for (let i=str.length-1;i>=0;i--)
    {
        reversetext += str[i];
    }
    console.log(reversetext);
} reverseString(text);
let sentence = "The quick brown fox jumps over the lazy do";



console.log("EXERCISE 4:\n==========\n");