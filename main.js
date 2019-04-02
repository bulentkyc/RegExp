//----------------------RegExp--------------------//
/* With Regex:
    1) Search text in a string
    2) Replace substrings in a string
    3) Extract information from a string

*/

//Create pattern with RegExp object
const myFirstRegExp = new RegExp('hey');

//Create pattern with literal
const mySecondRegExp = /hey/;

console.log(myFirstRegExp, mySecondRegExp);

//search pattern text inside a string
console.log(myFirstRegExp.test('asdasda hey sdfsdfs'));
//true
console.log(mySecondRegExp.test('asdasda hey sdfsdfs'));
//true
console.log(myFirstRegExp.test('asdasdaheysdfsdfs'));
//true

//Anchoring: Limitation

//Search on the beginning of string
console.log('/^string/');
console.log('same text:',/^hey/.test('hey'));                //t
console.log('mid of the string merged:',/^hey/.test('asdasdaheysdfsdfs'));  //f
console.log('end of the first word:',/^hey/.test('asdasdahey sdfsdfs'));//f
console.log('mid of the string alone:',/^hey/.test('asdasda hey sdfsdfs'));//f
console.log('beginning of the second word:',/^hey/.test('asdasda heysdfsdfs'));//f
console.log('beginning of the first word:',/^hey/.test('heysdfsdfs dfsdfgs'));//t

//Search on the end of string
const reEnding = /hey$/;
console.log('/string$/');
console.log('same text:',reEnding.test('hey'));                //t
console.log('mid of the string merged:',reEnding.test('asdasdaheysdfsdfs'));  //f
console.log('end of the first word:',reEnding.test('asdasdahey sdfsdfs'));//f
console.log('mid of the string alone:',reEnding.test('asdasda hey sdfsdfs'));//f
console.log('beginning of the second word:',reEnding.test('asdasda heysdfsdfs'));//f
console.log('beginning of the first word:',reEnding.test('heysdfsdfs dfsdfgs'));//f
console.log('end of the last word:',reEnding.test('heysdfsdfs dfsdfgshey'));//t

//Exactly match
const testSample = /^hey$/;
console.log('/^string$/');
console.log('same text:',testSample.test('hey'));                //t
console.log('mid of the string merged:',testSample.test('asdasdaheysdfsdfs'));  //f
console.log('end of the first word:',testSample.test('asdasdahey sdfsdfs'));//f
console.log('mid of the string alone:',testSample.test('asdasda hey sdfsdfs'));//f
console.log('beginning of the second word:',testSample.test('asdasda heysdfsdfs'));//f
console.log('beginning of the first word:',testSample.test('heysdfsdfs dfsdfgs'));//f
console.log('end of the last word:',testSample.test('heysdfsdfs dfsdfgshey'));//f

//Check for beginning and ending differently
//To match a string that starts with a substring and ends with another, you can use .*, 
//which matches any character repeated 0 or more times:
const reDiffBegEnd = /^hello.*world$/;
console.log('/^string$/');
console.log('same text without space:',
    reDiffBegEnd.test('helloworld'));//t

console.log('outside of another text merged:'
    ,reDiffBegEnd.test('helloasdasdasdfsdfsworld'));  //t

console.log('same text with space:',
    reDiffBegEnd.test('hello world'));  //t

console.log('end of the first word:',
    reDiffBegEnd.test('asdasdahello world sdfsdfs'));//f

console.log('beginning of the first word:',
    reDiffBegEnd.test('helloworldasdasda hey sdfsdfs'));//f

console.log('mid of the string:',
    reDiffBegEnd.test('asdasda helloworld heysdfsdfs'));//f

console.log('end of the last word:',
    reDiffBegEnd.test('heysdfsdfs dfsdfgshelloworld'));//f

console.log('outside of another text spaced:',
    reDiffBegEnd.test('hello heysdfsdfs dfsdfgshey world'));//t


//Sample for same beginning and ending
const testSample2 = /^hey.*hey$/;
console.log('on the beginning and ending:',
    testSample2.test('heysdfsdfs dfsdfgshey'));//t

//Match items in ranges

/*
/[a-z]/   // a, b, c, ... , x, y, z
/[A-Z]/   // A, B, C, ... , X, Y, Z
/[0-9]/   // 0, 1, 2, ... , 9 
/[a-d]/   // a, b, c, d 
*/

const matchLcLet = /[a-z]/; // for match lowercase letters

console.log('check "d" between a-z',
    matchLcLet.test('d')); //t

//Combine ranges
const combineRanges = /[A-Z0-9a-z]/;
console.log('lower case letter: ',
    combineRanges.test('b'));

console.log('upper case letter: ',
    combineRanges.test('H'));

console.log('number: ',
    combineRanges.test('15'));

console.log('chechk the string with arranges: ',
    combineRanges.test('DCi FbW6'));

console.log('special char on the begginning: ',
    combineRanges.test('@DCi FbW6')); //f

console.log('special char on the ending: ',
    combineRanges.test('DCi FbW6@')); //t

console.log('special char on the mid: ',
    combineRanges.test('DCi@FbW6')); //t


//Combine ranges for only one letter
const combineRangesforLet = /^[A-Za-z0-9]$/;
console.log('lower case letter: ',
    combineRangesforLet.test('b'));

console.log('upper case letter: ',
    combineRangesforLet.test('H'));

console.log('number: ',
    combineRangesforLet.test('15'));

console.log('chechk the string with arranges: ',
    combineRangesforLet.test('DCi FbW6'));


//Combine ranges for beginning
console.log('Combine ranges for beginning');
const combineRangesforBeg = /^[A-Za-z0-9]/;
console.log('lower case letter: ',
    combineRangesforBeg.test('b'));

console.log('upper case letter: ',
    combineRangesforBeg.test('H'));

console.log('number: ',
    combineRangesforBeg.test('15'));

console.log('chechk the string with arranges: ',
    combineRangesforBeg.test('DCi FbW6'));

console.log('special char on the begginning: ',
    combineRangesforBeg.test('@DCi FbW6')); //f

console.log('special char on the ending: ',
    combineRangesforBeg.test('DCi FbW6@')); //t

console.log('special char on the mid: ',
    combineRangesforBeg.test('DCi@FbW6')); //t


//Negating of the pattern
console.log('Negating of the pattern');
const negatePattern = /[^A-Za-z0-9]/;
console.log('lower case letter: ',
    negatePattern.test('b')); //f

console.log('upper case letter: ',
    negatePattern.test('H')); //f

console.log('number: ',
    negatePattern.test('1'));  //f

console.log('capital A: ',
    negatePattern.test('A'));  //f

console.log('special char on the begginning: ',
    negatePattern.test('@DCi FbW6')); //t


//Or operator |
const regExOr = /hey|hi/;
console.log('/string|another string/');
console.log('hey:',
    regExOr.test('hey'));

console.log('hi:',
    regExOr.test('hi'));

console.log('hey between text:',
    regExOr.test('fgsfgsdfheyfxbxfbdf'));

console.log('hi between text:',
    regExOr.test('fgsfgsdfhifxbxfbdf'));
