function largestNumber(numbers) {
  const result = numbers?.length>0? Math.max(...numbers) : 0;
  return (result);
}
  console.log('Result for [2,3,4]',largestNumber([2,3,4]));
  console.log('Result for []',largestNumber([]));
  console.log('Result for not passing an array',largestNumber());