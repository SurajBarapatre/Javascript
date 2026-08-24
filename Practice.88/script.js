// Array Methods in JavaScript :-

// 1.length() :- Array me kitne elements hain, ye batata hai yani ki length() array ke total elements ki counting deta hai.

// exa.
// let arr = [10, 20, 30, 40];

//console.log(arr.length);

// Output - 4

//-------------------------------------------------------------------------------------------------------------//

// 2.push() :- Array ke end me element add karta hai yani ki push() last me value add karta hai

// exa.
// let arr = [10, 20, 30];

// arr.push(40);

// console.log(arr);

// Output - [10, 20, 30, 40]    

//-------------------------------------------------------------------------------------------------------------//

// 3.pop() :- Array ke last element ko remove karta hai yani ki pop() last value ko delete karta hai

// exa
// let arr = [10, 20, 30, 40];

// arr.pop();

// console.log(arr);

// Output :- [10, 20, 30]

//-------------------------------------------------------------------------------------------------------------//

// 4.unshift() :- Array ke starting me element add karta hai yani ki unshift() array ke beginning me value add karta hai

// exa

// let arr = [20, 30, 40];

// arr.unshift(10);

// console.log(arr);

// Output - [10, 20, 30, 40]

//-------------------------------------------------------------------------------------------------------------//

// 5.shift() :- Array ke first element ko remove karta hai yani ki shift() first value ko remove karta hai

// exa.

// let arr = [10, 20, 30];

// arr.shift();

// console.log(arr);

// Output - [20, 30]

//-------------------------------------------------------------------------------------------------------------//

// 6.indexOf() :- array me Kisi value ka index find karta hai yani ki indexOf() value mil gayi to uska index return karega

// exa.

// let arr = [10, 20, 30, 40];

// console.log(arr.indexOf(30));

// Output - 2

//-------------------------------------------------------------------------------------------------------------//

// 7.lastIndexOf() :- array me Value ka last occurrence ka index return karta hai yani ki Agar same value multiple times hai, to last wali position ka index deta hai

// exa.

// let arr = [10, 20, 30, 20, 40];

// console.log(arr.lastIndexOf(20));

// Output - 3

//-------------------------------------------------------------------------------------------------------------//

// 8.includes() :- array me Check karta hai ki array me value present hai ya nahi yani ki includes() answer me true ya false deta hai

// exa.

// let arr = [10, 20, 30];

// console.log(arr.includes(20));

// Output - true

// console.log(arr.includes(50));

// Output - False

//-------------------------------------------------------------------------------------------------------------//

// 9.find() :- array me Condition ke according first matching element return karta hai yani ki Jo first value condition ko satisfy karegi, find() wahi return karega

// exa. 

// let arr = [10, 15, 20, 25, 30];

// let result = arr.find(function(value)
// {
//    return value > 20;
// });

// console.log(result);

// Output - 25

//-------------------------------------------------------------------------------------------------------------//

// 10.findIndex() :- array me Condition satisfy karne wale first element ka index return karta hai yani ki jo condition first element ke index ko satisfy karegi findIndex() uss index ko return karega

// exa.

// let arr = [10, 15, 20, 25, 30];

// let result = arr.findIndex(function(value)
// {
//     return value > 20;
// });

// console.log(result);

// Output - 3

//-------------------------------------------------------------------------------------------------------------//

// 11.ForEach() :- Array ke har element par function execute karta hai yani ki forEach() ek-ek karke har element par kaam karta hai

// exa.

// let arr = [10, 20, 30];

// arr.forEach(function(value)
// {
//     console.log(value);
// });

// Output - 
//10
//20
//30

//-------------------------------------------------------------------------------------------------------------//

// 12.map() :- Array ke har element ko modify karke new array create karta hai yani ki map() original array ko change nahi karta,ek new array return karta hai

// exa.

//  let arr = [10, 20, 30];

// let result = arr.map(function(value)
// {
//  return value * 2;
// });

// console.log(result);

// Output - [20, 40, 60]

//-------------------------------------------------------------------------------------------------------------//

// 13.filter() :- array me Condition ke according elements ko select karke new array banata hai yani ki filter() sirf wahi values rakhta hai jo condition satisfy karti hain

// exa.

// let arr = [10, 15, 20, 25, 30];

// let result = arr.filter(function(value)
// {
//    return value % 2 == 0;
// });

// console.log(result);

// Output - [10, 20, 30]

//-------------------------------------------------------------------------------------------------------------//

// 14.reduce() :- Array ke multiple values ko combine karke single value banata hai yani ki reduce() mostly sum, total, multiplication jaise calculations ke liye use hota hai

// let arr = [10, 20, 30, 40];

// let sum = arr.reduce(function(total, value)
// {
//     return total + value;
// }, 0);

// console.log(sum);

// Output - 100

//-------------------------------------------------------------------------------------------------------------//

// 15.some() :- ye array me Check karta hai ki at least ek element ki condition satisfy karta hai ya nahi yani ki Ek bhi value condition satisfy kare to True nahi to False

// exa.

// let arr = [10, 15, 20, 25];

// let result = arr.some(function(value)
// {
//    return value > 20;
// });

// console.log(result);

// Output - true

//-------------------------------------------------------------------------------------------------------------//

// 16.every() :- ye array me check karta hai ki all elements condition satisfy karte hain ya nahi yani ki Sabhi elements condition satisfy karein tabhi True nahi to False

// exa.

// let arr = [10, 20, 30, 40];

// let result = arr.every(function(value)
// {
//    return value > 5;
// });

// console.log(result);

// Output - true

//-------------------------------------------------------------------------------------------------------------//

// 17.concat() :- ye do array ya do se jyada array ko combine karta hai yani ki concat() arrays ko jodta hai

// exa.

// let a = [10, 20];
// let b = [30, 40];

// let result = a.concat(b);

// console.log(result);

// Output - [10, 20, 30, 40]

//-------------------------------------------------------------------------------------------------------------//

// 18.slice() :- array ko ek portion ko copy karke new array return karta hai lekin isme ending index include nahi hota hai

// exa.

// let arr = [10, 20, 30, 40, 50];

// let result = arr.slice(1, 4);

// console.log(result);

// Output - [20, 30, 40]

//-------------------------------------------------------------------------------------------------------------//

// 19.splice() :- array me elements add, remove, ya replace kar sakta hai yani ki splice() original array ko modify karta hai

// exa. 

// Remove-

// let arr = [10, 20, 30, 40, 50];

// arr.splice(1, 2); (1 ----> starting index) (2 ----> kitne elements remove karne hain)

// console.log(arr);

// Output - [10, 40, 50]

// Add-

// let arr = [10, 20, 40];

// arr.splice(2, 0, 30);

// console.log(arr);

// Output - [10, 20, 30, 40]

//-------------------------------------------------------------------------------------------------------------//

// 20.join() :- ye ek array ko ek string me convert karta hai

// exa. 

// let arr = [10, 20, 30];

// console.log(arr.join("-"));

// Output - 10-20-30

//-------------------------------------------------------------------------------------------------------------//

// 21.toString() :- Ye bhi array ko string me convert karta hai

// exa.

// let arr = [10, 20, 30];

// console.log(arr.toString());

// Output - 10,20,30

//-------------------------------------------------------------------------------------------------------------//

// 22.sort() :- Array elements ko sort karta hai yani ki array ke elements ko numeric comparison kar deta hai

// exa.

// Accending order -

// let arr = [40, 10, 30, 20];

// arr.sort(function(a, b)
// {
//     return a - b;
// });

// console.log(arr);

// Output - [10, 20, 30, 40]


// Descending Order -

// arr.sort(function(a, b)
// {
//     return b - a;
// });

// Output - [40, 30, 20, 10]

//-------------------------------------------------------------------------------------------------------------//

// 23.reverse() :- Array ka order reverse karta hai yani ki ye array ke elements ko descending order me karta hai

// exa.

// let arr = [10, 20, 30, 40];

// arr.reverse();

// console.log(arr);

// Output - [40, 30, 20, 10]

//-------------------------------------------------------------------------------------------------------------//

// 24.fill() :- Array ke elements ko same value se fill karta hai

// Exa.

// let arr = [1, 2, 3, 4];

// arr.fill(0);

// console.log(arr);

// Output - [0, 0, 0, 0]

//-------------------------------------------------------------------------------------------------------------//

// 25.flat() :- ye Nested array ko flat yani ki simple array banata hai

// exa.

// let arr = [1, 2, [3, 4], [5, 6]];

// console.log(arr.flat());

// Output - [1, 2, 3, 4, 5, 6]

//-------------------------------------------------------------------------------------------------------------//

// 26.flatMap() :- ye map() + flat() ka combination hai 

// exa. 

// let arr = [1, 2, 3];

// let result = arr.flatMap(function(value)
// {
//     return [value, value * 2];
// });

// console.log(result);

// Output - [1, 2, 2, 4, 3, 6]

//-------------------------------------------------------------------------------------------------------------//

// 27.at() :- Specific index ka element access karta hai.

// exa.

//  let arr = [10, 20, 30, 40];

// console.log(arr.at(2));

// Output - 30


// Negative index bhi use kar sakte hain jisse last elements mil jata hai

// exa.

// let arr = [10, 20, 30, 40];

// console.log(arr.at(-1));

// Output - 40

//-------------------------------------------------------------------------------------------------------------//

// 28.Array.isArray() :- Check karta hai ki given value array hai ya nahi agar array hai to true nahi to false

// exa.

// let arr = [10, 20, 30];

// console.log(Array.isArray(arr));

// Output - true


// let num = 10;

// console.log(Array.isArray(num));

// Output - false

//-------------------------------------------------------------------------------------------------------------//

// 29.toSorted() :- ye new array return karta hai

// exa.

// let arr = [30, 10, 20];

// let result = arr.toSorted();

// console.log(result);
// console.log(arr);

// Output - 

//[10, 20, 30]
//[30, 10, 20]

//-------------------------------------------------------------------------------------------------------------//

// 30.toReversed() :- ye Reverse array ko return karta hai

// exa.

// let arr = [10, 20, 30];

// let result = arr.toReversed();

// console.log(result);

// Output - [30, 20, 10]

//-------------------------------------------------------------------------------------------------------------//

// 31.toSpliced() :- iska splice() jaisa kaam karta hai, lekin original array ko change nahi karta

// exa.

// let arr = [10, 20, 30, 40];

// let result = arr.toSpliced(1, 2);

// console.log(result);
// console.log(arr);

// [10, 40]
// [10, 20, 30, 40]

//-------------------------------------------------------------------------------------------------------------//

// 32.with() :- ye Specific index ki value ko replace karke new array return karta hai

// exa.

// let arr = [10, 20, 30];

// let result = arr.with(1, 100);

// console.log(result);

// Output - [10, 100, 30]


// Original array :

// [10, 20, 30]

//-------------------------------------------------------------------------------------------------------------//

// to ye hai array ke methods inme se jo most importent aur mostly practical use hone wali methods niche diye gaye list hai.

// push()
// pop()
//shift()
//unshift()
//indexOf()
//includes()
//forEach()
//map()
//filter()
//find()
//reduce()
//sort()
//reverse()
//slice()
//splice()
//concat()


// inme sabse importent difference yaad rakhe.

// push()     → End me add
// pop()      → End se remove

// unshift()  → Start me add
// shift()    → Start se remove

// slice()    → Copy karta hai, original generally unchanged
// splice()   → Original array ko modify karta hai

// map()      → New array
// filter()   → New filtered array
// reduce()   → Single value
// forEach()  → Mainly iteration, return value useful nahi

//-------------------------------------------------------------------------------------------------------------//











