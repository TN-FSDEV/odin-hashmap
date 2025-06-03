import { HashSet } from "./hashset.js";
const testSet = new HashSet(16, 0.75);

testSet.add('apple');
testSet.add('banana');
testSet.add('carrot');
testSet.add('dog');
testSet.add('elephant');
testSet.add('frog');
testSet.add('grape');
testSet.add('hat');
testSet.add('ice cream');
testSet.add('jacket');
testSet.add('kite');
testSet.add('lion');

console.log(testSet.size);
console.log(testSet.keys);
testSet.add('moon');
console.log(testSet.keys);
console.log(testSet.has('apple'));
testSet.remove('apple');
console.log(testSet.size);
testSet.clear();
console.log(testSet.keys);