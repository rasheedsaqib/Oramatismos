import { newTrackingData, addToTrackingData } from './trackingData';

const MergeSort = (nums) => {
  // Initial State
  const trackingData = newTrackingData(nums);

  function merge(original, start, mid, end) {
    const left = original.slice(start, mid);
    const right = original.slice(mid, end);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        addToTrackingData(trackingData, original, [], [], [], [k + start]);
        original[k + start] = left[i];
        i++;
        addToTrackingData(trackingData, original, [], [], [], [k + start]);
      } else {
        addToTrackingData(trackingData, original, [], [], [], [k + start]);
        original[k + start] = right[j];
        j++;
        addToTrackingData(trackingData, original, [], [], [], [k + start]);
      }
      k++;
    }
    while (i < left.length) {
      addToTrackingData(trackingData, original, [], [], [], [k + start]);
      original[k + start] = left[i];
      i++;
      k++;
      addToTrackingData(trackingData, original, [], [], [], [k + start]);
    }
    while (j < right.length) {
      addToTrackingData(trackingData, original, [], [], [], [k + start]);
      original[k + start] = right[j];
      j++;
      k++;
      addToTrackingData(trackingData, original, [], [], [], [k + start]);
    }

    left.length = 0;
    right.length = 0;
  }

  function recursiveMergeSort(original, start, end) {
    const length = end - start;
    if (length < 2) {
      // original = []
      if (length < 1) return original;
      // original = [x]
      else return [original[start]];
    }

    const midPoint = Math.floor((start + end) / 2);

    // Visualize: First Half
    addToTrackingData(
      trackingData,
      original,
      [],
      [...Array(midPoint - start).keys()].map((i) => i + start)
    );
    recursiveMergeSort(original, start, midPoint);

    // Visualize: Second Half
    addToTrackingData(
      trackingData,
      original,
      [],
      [...Array(end - midPoint).keys()].map((i) => i + midPoint)
    );
    recursiveMergeSort(original, midPoint, end);

    merge(original, start, midPoint, end);
  }

  recursiveMergeSort(nums, 0, nums.length);

  // Visualize: Mark all elements as sorted
  addToTrackingData(trackingData, nums, [...Array(nums.length).keys()]);
  return trackingData;
};

export default MergeSort;
