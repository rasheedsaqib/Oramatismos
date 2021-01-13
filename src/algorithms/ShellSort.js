import { swap, createRange } from './helper';
import { newTrackingData, addToTrackingData } from './trackingData';

const ShellSort = (nums) => {
  const trackingData = newTrackingData(nums);

  for (
    let gap = Math.floor(nums.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let j = gap; j < nums.length; j++) {
      for (let i = j - gap; i >= 0; i -= gap) {
        addToTrackingData(trackingData, nums, [], [i, i + gap]);
        if (nums[i + gap] < nums[i]) {
          addToTrackingData(trackingData, nums, [], [], [i, i + gap]);
          swap(nums, i, i + gap);
          addToTrackingData(trackingData, nums, [], [], [i, i + gap]);
        } else {
          break;
        }
      }
    }
  }

  addToTrackingData(trackingData, nums, createRange(0, nums.length));
  return trackingData;
};

export default ShellSort;
