/* eslint-disable prettier/prettier */
const NextOrFirstElement = (list, currentItem) => {
  //find current index
  const currentItemIndex = list.indexOf(currentItem);
  //get next index
  const nextItemIndex = (currentItemIndex + 1) % list.length;
  //return data from list
  return list[nextItemIndex];
};

export default NextOrFirstElement;
