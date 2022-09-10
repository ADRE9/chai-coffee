import { totalMenu } from "../constants/menu";
export const ordersArray = (obj) => {
  let arr = [];
  arr = Object.keys(obj).map(item => {
    if (obj[item] !== 0) {
      return { quantity: obj[item], name: item, price: obj[item] * totalMenu[item].rate }
    }
    return null;
  });
  const filteredArr = arr.filter(item => item !== null);
  console.log(filteredArr);
  return filteredArr;
}