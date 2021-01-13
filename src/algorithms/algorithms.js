export const BubbleSortDetails = {
    name: 'Bubble Sort',
    description: 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems.',
    worstCaseTimeComplex: 'O(n²)',
    averageTimeComplex: 'O(n²)',
    bestCaseTimeComplex: 'O(n)',
    worstCaseSpaceComplex: 'O(1)'
};

export const SelectionSortDetails = {
    name: 'Selection Sort',
    description: 'Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.',
    worstCaseTimeComplex: 'O(n²)',
    averageTimeComplex: 'O(n²)',
    bestCaseTimeComplex: 'O(n²)',
    worstCaseSpaceComplex: 'O(1)'
};

export const InsertionSortDetails = {
    name: 'Insertion Sort',
    description: 'Insertion Sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.',
    worstCaseTimeComplex: 'O(n²)',
    averageTimeComplex: 'O(n²)',
    bestCaseTimeComplex: 'O(n)',
    worstCaseSpaceComplex: 'O(1)'
};

export const MergeSortDetails = {
    name: 'Merge Sort',
    description: 'Merge Sort is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows: \n1. Divide the unsorted list into n sublists, each containing one element(a list of one element is considered sorted) \n2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.',
    worstCaseTimeComplex: 'O(n log n)',
    averageTimeComplex: 'O(n log n)',
    bestCaseTimeComplex: 'O(n log n)',
    worstCaseSpaceComplex: 'O(n)'
};

export const QuickSortDetails = {
    name: 'Quick Sort',
    description: 'Quick Sort is an efficient, in-place sorting algorith that in practice is faster than MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning that the relative positioning of equal sort items is not preserved.Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. The steps are: \n1. Pick an element, called a pivot, from the array. This is usually done at random. \n2. Move pivot element to the start of the array. \n3. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation. \n4. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values. \nThe base case of the recursion is an array of size zero or one, which are sorted by definition.',
    worstCaseTimeComplex: 'O(n²)',
    averageTimeComplex: 'O(n log n)',
    bestCaseTimeComplex: 'O(n log n)',
    worstCaseSpaceComplex: 'O(log n)'
};

export const QuickSort3Details = {
    name: 'Quick Sort 3',
    description: 'Quick Sort exhibits poor performance on arrays that contain many repeated elements. This issue (Dutch national flag problem) can be solved by using an alternative linear-time partitioning routine that separates the values into three groups: values less than the pivot, values equal to the pivot, and values greater than the pivot. The values equal to the pivot are already sorted, so only the less-than and greater-than partitions need to be recursively sorted.',
    worstCaseTimeComplex: 'O(n²)',
    averageTimeComplex: 'O(n log n)',
    bestCaseTimeComplex: 'O(n)',
    worstCaseSpaceComplex: 'O(log n)'
};

export const HeapSortDetails = {
    name: 'Heap Sort',
    description: 'Heap Sort can be thought of as an improved selection sort that uses the heap data structure rather than a linear-time search to find the maximum or minimum element. It is an in-place sorting algorithm that is not stable and has a somewhat slower running time than Quicksort in practice. \nThe heapsort algorithm can be divided into two parts. In the first step, a heap is built out of the data. The heap is often placed in an array with the layout of a complete binary tree. In the second step, a sorted array is created by repeatedly removing the largest element from the heap (the root of the heap), and inserting it into the array. The heap is updated after each removal to maintain the heap property. Once all objects have been removed from the heap, the result is a sorted array.\n1. Call the buildMaxHeap() function on the list. Also referred to as heapify(), this builds a heap from a list in O(n) operations. \n2. Swap the first element of the list with the final element. Decrease the considered range of the list by one. \n3. Call the siftDown(), also called maxHeapify() function on the list to sift the new first element to its appropriate index in the heap. \n4. Go to step (2) unless the considered range of the list is one element.',
    worstCaseTimeComplex: 'O(n log n)',
    averageTimeComplex: 'O(n log n)',
    bestCaseTimeComplex: 'O(n log n)',
    worstCaseSpaceComplex: 'O(1)'
};

export const ShellSortDetails = {
    name: 'Shell Sort',
    description: "Shell Sort, also know as Shell's method is a generalization of insertion sort where elements gap distance apart are compared rather than adjacent elements. The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. Starting with far apart elements, it can move some out-of-place elements into position faster than a simple nearest neighbor exchange. The running time of Shellsort is heavily dependent on the gap sequence it uses. For many practical variants, determining their time complexity remains an open problem. It is in-place sorting algorithm that is not stable.",
    worstCaseTimeComplex: 'O(n²)',
    averageTimeComplex: 'O(n³/²)',
    bestCaseTimeComplex: 'O(n log n)',
    worstCaseSpaceComplex: 'O(1)'
};