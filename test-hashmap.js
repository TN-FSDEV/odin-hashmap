import { HashMap } from "./hashmap.js";
const testMap = new HashMap(16, 0.75);

testMap.set('apple', 'red');
testMap.set('banana', 'yellow');
testMap.set('carrot', 'orange');
testMap.set('dog', 'brown');
testMap.set('elephant', 'gray');
testMap.set('frog', 'green');
testMap.set('grape', 'purple');
testMap.set('hat', 'black');
testMap.set('ice cream', 'white');
testMap.set('jacket', 'blue');
testMap.set('kite', 'pink');
testMap.set('lion', 'golden');


console.log(testMap.hashBuckets);

console.log(testMap.get("grape"));

console.log(testMap.has("lion"));

console.log(testMap.length);

console.log(testMap.keys);

console.log(testMap.values);

console.log(testMap.entries);

console.log(testMap.has("lion"));

testMap.set('apple', 'gold');
console.log(testMap.entries);

testMap.set('moon', 'silver')
testMap.clear();
console.log(testMap.hashBuckets);

console.log(testMap.get("grape"));

console.log(testMap.has("lion"));

console.log(testMap.length);

console.log(testMap.keys);

console.log(testMap.values);

console.log(testMap.entries);

console.log(testMap.has("lion"));

