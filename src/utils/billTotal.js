export const billTotal = (obj1,obj2) => {
  const sum=Object.keys(obj1).map(item => {
    if (obj1[item] !== 0) {
      return obj1[item]*obj2[item].rate
    }
    return 0;
  }).reduce((result, number) => result + number);
  console.log(sum)
  return sum;
}