import { swap,createRange } from './helper';
import { newTrackingData, addToTrackingData, lastSorted } from './trackingData';

const QuickSort = (nums) => {
  // Initial State
  const trackingData = newTrackingData(nums);

  function choosePivot(array, start, end) {
    // randomly pick an element between start and end;
    return Math.floor(Math.random() * (end - start)) + start;
  }

  function partition(array, start, end) {
    let i = start + 1;
    let j = start + 1;

    // Visualize: Keep pivot marked
    addToTrackingData(trackingData, array, lastSorted(trackingData), [start]);

    while (j <= end) {
      if (array[j] < array[start]) {
        // Visualize: Mark item that is less than pivot
        addToTrackingData(
          trackingData,
          array,
          lastSorted(trackingData),
          [start],
          [j],
          [],
          createRange(start + 1, i)
        );

        swap(array, i, j);

        // Visualize: Move item to lesser list
        addToTrackingData(
          trackingData,
          array,
          lastSorted(trackingData),
          [start],
          [i],
          [],
          createRange(start + 1, i)
        );
        i += 1;
      }
      j += 1;
    }

    // Visualize: Mark center position
    addToTrackingData(
      trackingData,
      array,
      lastSorted(trackingData),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    swap(array, start, i - 1);

    // Visualize: Move pivot to center
    addToTrackingData(
      trackingData,
      array,
      lastSorted(trackingData),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    return i - 1;
  }

  function recursiveQuickSort(array, start, end) {
    if (start >= end) {
      if (start === end) {
        // Visualize: Mark only item as sorted
        addToTrackingData(trackingData, array, [...lastSorted(trackingData), start]);
      }
      return null;
    }

    let pivot = choosePivot(array, start, end);

    // Visualize: Mark chosen pivot
    addToTrackingData(trackingData, array, lastSorted(trackingData), [pivot]);

    swap(array, start, pivot);

    // Visualize: Move chosen pivot to start
    addToTrackingData(trackingData, array, lastSorted(trackingData), [pivot]);

    pivot = partition(array, start, end);

    // Visualize: Mark pivot after partition as sorted
    addToTrackingData(trackingData, array, [...lastSorted(trackingData), pivot]);

    recursiveQuickSort(array, start, pivot - 1);
    recursiveQuickSort(array, pivot + 1, end);
  }

  recursiveQuickSort(nums, 0, nums.length - 1);

  return trackingData;
};

export default QuickSort;
