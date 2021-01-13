import { newTrackingData, addToTrackingData } from './trackingData';

const InsertionSort = (nums) => {
  // Initial State
  const trackingData = newTrackingData(nums);

  // Core Algorithm
  for (let i = 1; i < nums.length; i++) {
    let value = nums[i];
    let hole = i;
    // Visualize: Hole has been selected for comparison
    addToTrackingData(trackingData, nums, [], [i]);
    while (hole > 0 && nums[hole - 1] > value) {
      // Visualize: Compare hole to value
      addToTrackingData(trackingData, nums, [], [hole], [hole - 1]);
      nums[hole] = nums[hole - 1];
      hole -= 1;
      // Visualize: Overwrite hole with hole - 1
      addToTrackingData(trackingData, nums, [], [], [hole, hole + 1]);
    }
    // Visualize: Overwrite hole with value
    addToTrackingData(trackingData, nums, [], [], [], [hole]);
    nums[hole] = value;
    // Visualize: value is in sorted position
    addToTrackingData(trackingData, nums, [], [], [], [hole]);
  }

  // Visualize: Mark all elements as sorted
  addToTrackingData(trackingData, nums, [...Array(nums.length).keys()]);
  return trackingData;
};

export default InsertionSort;
