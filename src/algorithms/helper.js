export const swap = (array, i, j) => {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};
  
export const createRange = (start, end) => {
    return [...Array(end - start).keys()].map((elem) => elem + start);
};