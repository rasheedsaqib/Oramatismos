import { swap } from './helper';
import { newTrackingData, addToTrackingData, lastSorted } from './trackingData';

const SelectionSort = (nums) => {
  // Initial State
  const trackingData = newTrackingData(nums);

  // Core Algorithm
  for (let i = 0; i < nums.length - 1; i++) {
    // Internal Loop: Find index of min value
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      // Visualize: comparing A[j] to A[minIndex]
      addToTrackingData(trackingData, nums, lastSorted(trackingData), [minIndex, j]);
      if (nums[j] < nums[minIndex]) {
        // Visualize: discovered new minIndex
        addToTrackingData(trackingData, nums, lastSorted(trackingData), [minIndex], [j]);
        minIndex = j;
        // Visualize: reassign new minIndex;
        addToTrackingData(trackingData, nums, lastSorted(trackingData), [minIndex], [j]);
      }
    }

    // Visualize: i'th value to be swapped with min value
    addToTrackingData(trackingData, nums, lastSorted(trackingData), [], [i, minIndex]);

    swap(nums, i, minIndex);

    // Visualize: i'th value has been swapped with min value
    addToTrackingData(trackingData, nums, [...lastSorted(trackingData), i], [], []);
  }

  // Visualize: Final item in the array is sorted
  addToTrackingData(trackingData, nums, [...lastSorted(trackingData), nums.length - 1]);

  return trackingData;
};

export default SelectionSort;
