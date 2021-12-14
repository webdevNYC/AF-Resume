
import { useRouter } from 'next/router';

/*
The string.match() is an inbuilt function in JavaScript used to search a string 
for a match against any regular expression. 
If the match is found, then this will return the match as an array. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
*/

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

function isItOnlyAB(str) {
  const verifyMatch = str.match(/[c-z]/gi);
  return verifyMatch ? false : true;
}
function checkStringABOrder(array) {

  const arrayLength = array.length;
  let isSectionB = false;
  let resultArrayA = [];
  let resultArrayB = [];

  const result = array.reduce((previousValue, currentValue, currentIndex, array) => {
    const tAheadA = countOccurrences(array.slice(currentIndex), 'A');
    const tAheadB = countOccurrences(array.slice(currentIndex), 'B');
    const nextElement = array[currentIndex + 1];

    //If its A element and Section B didn't start yet 
    if (currentValue === 'A' && !isSectionB) {
      resultArrayA.push(currentValue)
      console.log('its A')
    }
    //IF it's B check if sum of A elem ahead < B elem ahead  if Has more B's than A's, filter all the B's
    // Also checks if B is not in between ABA (previous its an A and next is another A and B)
    // To Filter need first to splice the Array to get ONLY the remaining part of the array
    // Return the second part of the array only B's
    else if (currentValue === 'B' && tAheadA < tAheadB && nextElement !== 'A') {
      isSectionB = true;
      resultArrayB = array.splice(currentIndex).filter(value => value !== 'A');
    }
    return resultArrayA.concat(resultArrayB)
  }, [])

  const numberDeleted = arrayLength - result.length

  return { array: result, deleted: numberDeleted };
}

export default function stringABOrder() {
  const router = useRouter();
  //const str = 'ABA' 
  //const str = 'AAABAAABBBBAB' //AAAAAA(6) BBBBB(5) - AAAAAABBBBB - 2
  //const str = 'BAAABAB' // AAAAB
  //const str = 'BBABAA' 
  const str = 'AABBBB'

  const arrayAB = isItOnlyAB(str) ? [...str] : null
  let result;

  if (arrayAB) {
    result = checkStringABOrder(arrayAB);
  } else {
    return <div>String is Not Only A's and B's</div>
  }

  return (
    <>
      <div>
        <img
          src={`${router.basePath}/assets/images/ab_string.png`}
          alt="AB String"
        />
        Original Array {str}
      </div>
      <div>
        RESULT: {result.array} - Deleted {result.deleted} 'As and B's
      </div>
    </>
  )
}