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
console.log('end of the last word:',testSample.test('heysdfsdfs dfsdfgshey'));//t

//Check for beginning and ending differently
const reDiffBegEnd = /^hello.*world$/;
console.log('/^string$/');
console.log('same text:',reDiffBegEnd.test('helloworld'));                //t
console.log('mid of the string merged:',reDiffBegEnd.test('helloasdasdasdfsdfsworld'));  //f
console.log('mid of the string merged:',reDiffBegEnd.test('hello world'));  //f
console.log('end of the first word:',reDiffBegEnd.test('asdasdahello world sdfsdfs'));//f
console.log('mid of the string alone:',reDiffBegEnd.test('helloworldasdasda hey sdfsdfs'));//f
console.log('beginning of the second word:',reDiffBegEnd.test('asdasda helloworld heysdfsdfs'));//f
console.log('beginning of the first word:',reDiffBegEnd.test('heysdfsdfs dfsdfgshelloworld'));//f
console.log('end of the last word:',reDiffBegEnd.test('hello heysdfsdfs dfsdfgshey world'));//t
