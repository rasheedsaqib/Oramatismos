export const newTrackingData = (array) => {
    return [
      {
        array: [...array],
        groupA: [],
        groupB: [],
        groupC: [],
        groupD: [],
        sortedIndices: []
      }
    ];
  };
  
  export const addToTrackingData = (
    trace,
    array,
    sortedIndices = [],
    groupA = [],
    groupB = [],
    groupC = [],
    groupD = []
  ) => {
    trace.push({
      array: [...array],
      groupA: [...groupA],
      groupB: [...groupB],
      groupC: [...groupC],
      groupD: [...groupD],
      sortedIndices: [...sortedIndices]
    });
  };
  
  export const lastSorted = (trace) => {
    return trace[trace.length - 1].sortedIndices;
  };