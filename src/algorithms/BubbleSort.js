import { swap } from './helper';
import { newTrackingData, addToTrackingData, lastSorted } from './trackingData';


const BubbleSort = (array)=>{

    const trackingData = newTrackingData(array);

    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length-i-1; j++){

            addToTrackingData(trackingData, array, lastSorted(trackingData), [j, j+1]);

            if(array[j] > array[j+1]){

                swap(array, j, j+1);

                addToTrackingData(trackingData, array, lastSorted(trackingData), [], [j, j+1]);

            }

        }

        addToTrackingData(trackingData, array, [...lastSorted(trackingData), array.length-i-1]);
    }

    return trackingData;

}

export default BubbleSort;