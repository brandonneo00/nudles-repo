const merge = (left, right) => {
    let sortedArray = [];

    while (left.length && right.length) {
      if (left[0][0] < right[0][0]) {
        sortedArray.push(left.shift());
      } else if (left[0][0] === right[0][0]) {
        if (left[0][1] <= right[0][1]) {
          sortedArray.push(left.shift());
        } else {
          sortedArray.push(right.shift());
        }
      } else {
        sortedArray.push(right.shift());
      }
    }

    return [...sortedArray, ...left, ...right];
  };

  const mergeSort = (array) => {
    const half = array.length / 2;
    if (array.length <= 1) {
      return array;
    }

    const left = array.splice(0, half);
    const right = array;
    return merge(mergeSort(left), mergeSort(right));
  };

  export default mergeSort;