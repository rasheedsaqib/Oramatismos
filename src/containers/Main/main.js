// imports important components
import React, {Component} from 'react';
import Header from "../../components/Header/header";
import Content from "../Content/content";
import Footer from "../../components/Footer/footer";

// imports algorithms codes
import BubbleSort from '../../algorithms/BubbleSort';
import SelectionSort from '../../algorithms/SelectionSort';
import InsertionSort from '../../algorithms/InsertionSort';
import MergeSort from '../../algorithms/MergeSort';
import QuickSort from '../../algorithms/QuickSort';
import QuickSort3 from '../../algorithms/QuickSort3';
import HeapSort from '../../algorithms/HeapSort';
import ShellSort from '../../algorithms/ShellSort';

// Main class to be exported
class Main extends Component{

    // manage state
    state = {
        array: [],
        arraySize: 10,
        trackingData: [],
        selectedAlgorithm: null,
        appDrawerOpen: false
    }

    //array of available algos
    ALGORITHMS = {
        'Bubble Sort': BubbleSort,
        'Selection Sort': SelectionSort,
        'Insertion Sort': InsertionSort,
        'Merge Sort': MergeSort,
        'Quick Sort': QuickSort,
        'Quick Sort 3': QuickSort3,
        'Heap Sort': HeapSort,
        'Shell Sort': ShellSort
    };

    //generates random array on app start
    componentDidMount() {
        this.generateRandomArray();
    }

    // generates random array
    generateRandomArray = () => {
        // Generate pseudo-random number between 1 and max
        function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max)) + 1;
        }
    
        // Generate an array of length max
        const array = Array(this.state.arraySize)
          .fill(0)
          .map(() => getRandomInt(this.state.arraySize * 5));
    
          this.setState(
            {
              array,
              trackingData: []
            },
            ()=>{this.generateTrackingData(this.state.selectedAlgorithm)}
          );
    }

    //toggles app side drawer
    toggleAppDrawer = ()=>{
        this.setState(prevState=>({appDrawerOpen: !prevState.appDrawerOpen}));
    }

    //handles algorithim change
    algorithimHandler = (selected)=>{
        selected = Object.keys(this.ALGORITHMS).includes(selected) ? selected : null;
        this.setState({selectedAlgorithm: selected});
        this.generateRandomArray();
    }

    //handles array size change
    arraySizeHandler = (size)=>{
        size = Number(size);
        size = size > 100 ? 100 : size;
        size = size < 0 ? 0 : size;
        this.setState({arraySize: size}, this.generateRandomArray);
    }

    //generates tracking data for algo
    generateTrackingData = (selectedAlgorithm)=>{
        const array = [...this.state.array];
        const sortingAlgorithim = this.ALGORITHMS[selectedAlgorithm];

        if(sortingAlgorithim){
            const trackingData = sortingAlgorithim(array);
            this.setState({trackingData});
        }
    }

    //renders main to app
    render(){
        return (
            <div>
                <Header
                    selectedAlgorithm = {this.state.selectedAlgorithm}
                    arraySize = {this.state.arraySize}
                    appDrawerOpen = {this.state.appDrawerOpen}
                    toggleAppDrawer = {this.toggleAppDrawer}
                    algorithims = {Object.keys(this.ALGORITHMS)}
                    algorithimHandler = {this.algorithimHandler}
                    arraySizeHandler = {this.arraySizeHandler} />

                <Content 
                    array = {this.state.array}
                    arraySize = {this.state.arraySize}
                    selectedAlgorithm = {this.state.selectedAlgorithm}
                    generateRandomArray = {this.generateRandomArray}
                    algorithims={this.ALGORITHMS}
                    trackingData={this.state.trackingData} />

                <Footer />

            </div>
        );
    }
}

export default Main;