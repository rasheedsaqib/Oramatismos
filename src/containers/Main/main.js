import React, {Component} from 'react';
import Header from "../../components/Header/header";
import Content from "../../components/Content/content";
import Footer from "../../components/Footer/footer";

class Main extends Component{

    state = {
        array: [],
        arraySize: 10,
        trace: [],
        selectedAlgorithm: null,
        appDrawerOpen: false,
        algorithims: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Quick Sort 3', 'Heap Sort', 'Shell Sort'],
        speed: 1,
        playing: false
    }

    toggleAppDrawer = ()=>{
        this.setState(prevState=>({appDrawerOpen: !prevState.appDrawerOpen}));
    }

    algorithimHandler = (selected)=>{
        selected = this.state.algorithims.includes(selected) ? selected : null;
        this.setState({selectedAlgorithm: selected});
        this.generateRandomArray();
    }

    arraySizeHandler = (size)=>{
        size = Number(size);
        size = size > 100 ? 100 : size;
        size = size < 0 ? 0 : size;
        this.setState({arraySize: size}, this.generateRandomArray);
    }

    componentDidMount() {
        this.generateRandomArray();
    }

    arrayHandler = (array)=>{
        this.setState({array: array});
    }

    generateRandomArray = () => {
        // Generate pseudo-random number between 1 and max
        function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max)) + 1;
        }
    
        // Generate an array of length max
        const array = Array(this.state.arraySize)
          .fill(0)
          .map(() => getRandomInt(this.state.arraySize * 5));
    
        this.setState({array, trace: []});
    }

    speedHandler = ()=>{
        const prevState = this.state;
        this.setState({speed: prevState.speed===4 ? 1 : prevState.speed*2});
    }

    playHandler = (value)=>{
        value = (value === true || value === false) ? value : false;
        this.setState({playing: value});
    }

    render(){
        return (
            <div>
                <Header
                    selectedAlgorithm = {this.state.selectedAlgorithm}
                    arraySize = {this.state.arraySize}
                    appDrawerOpen = {this.state.appDrawerOpen}
                    toggleAppDrawer = {this.toggleAppDrawer}
                    algorithims = {this.state.algorithims}
                    algorithimHandler = {this.algorithimHandler}
                    arraySizeHandler = {this.arraySizeHandler} />

                <Content 
                    array = {this.state.array}
                    arraySize = {this.state.arraySize}
                    selectedAlgorithm = {this.state.selectedAlgorithm}
                    speed = {this.state.speed}
                    speedHandler = {this.speedHandler}
                    generateRandomArray = {this.generateRandomArray}
                    algorithims={this.algorithims}
                    playing={this.state.playing}
                    playHandler={this.playHandler}
                    arrayHandler={this.arrayHandler} />

                <Footer />

            </div>
        );
    }
}

export default Main;