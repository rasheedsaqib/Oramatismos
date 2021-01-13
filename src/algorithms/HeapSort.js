import { swap, createRange } from './helper';
import { newTrackingData, addToTrackingData, lastSorted } from './trackingData';

const HeapSort = (nums) => {
  const trackingData = newTrackingData(nums);

  // Helper functions to quickly access nodes
  const left = (i) => 2 * i + 1;
  const right = (i) => 2 * i + 2;

  const maxHeapify = (array, i, heapsize) => {
    const leftChild = left(i);
    const rightChild = right(i);

    // Visualize: Compare parent and leftChild
    addToTrackingData(trackingData, array, lastSorted(trackingData), [i, leftChild]);

    let largest =
      leftChild < heapsize && array[leftChild] > array[i]
        ? leftChild
        : i;

    // Visualize: Compare largest and rightChild
    addToTrackingData(trackingData, array, lastSorted(trackingData), [largest, rightChild]);

    if (rightChild < heapsize && array[rightChild] > array[largest])
      largest = rightChild;

    if (largest !== i) {
      // Visualize: Select largest child and parent
      addToTrackingData(trackingData, array, lastSorted(trackingData), [], [i, largest]);

      swap(array, i, largest);

      // Visualize: Swap largest child and parent
      addToTrackingData(trackingData, array, lastSorted(trackingData), [], [i, largest]);

      maxHeapify(array, largest, heapsize);
    }
  };

  const BuildMaxHeap = (array) => {
    const start = Math.floor(array.length / 2);
    const heapsize = array.length;
    for (let i = start; i >= 0; i--) {
      maxHeapify(array, i, heapsize);
    }

    // Visualize: Mark heap as built
    addToTrackingData(
      trackingData,
      array,
      lastSorted(trackingData),
      [],
      [],
      [],
      createRange(0, array.length)
    );
  };

  const heapSort = (array) => {
    BuildMaxHeap(array);
    let heapsize = array.length;
    for (let i = array.length - 1; i > 0; i--) {
      // Visualize: Select Maximum
      addToTrackingData(trackingData, array, lastSorted(trackingData), [], [0, i]);

      swap(array, 0, i);
      heapsize -= 1;

      // Visualize: Swap with last element in heap
      addToTrackingData(trackingData, array, [...lastSorted(trackingData), i], [], [0, i]);

      maxHeapify(array, 0, heapsize);

      // Visualize: Heap created
      addToTrackingData(
        trackingData,
        array,
        lastSorted(trackingData),
        [],
        [],
        [],
        createRange(0, heapsize)
      );
    }
    addToTrackingData(trackingData, array, [...lastSorted(trackingData), 0]);
  };

  // Execute Heapsort
  heapSort(nums);
  return trackingData;
};

export default HeapSort;
