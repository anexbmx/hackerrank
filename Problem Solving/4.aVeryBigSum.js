const aVeryBigSum = (arr) => arr[0]
    ? arr.pop() + aVeryBigSum(arr) 
    : 0