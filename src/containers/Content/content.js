//imports important component
import React, {Component} from 'react';
import Bars from '../../components/Middle/Bars/bars';
import Controls from '../../components/Middle/Controls/controls';
import ProcessColors from '../../components/Middle/ProcessColors/processColors';
import Description from '../../components/Middle/Description/description';

class Content extends Component{

    //state management
    state = {
        trackingData: [],

        originalArray: [],
        array: [],
        groupA: [],
        groupB: [],
        groupC: [],
        groupD: [],
        sortedIndices: [],

        timeouts: [],
        speed: 1,
        playing: false,
        currentStep: -1
    }

    //handles component update
    componentDidUpdate(prevProps) {
        if (prevProps.array !== this.props.array) {
            this.reset(this.props.array);
          }
        if (prevProps.trackingData !== this.props.trackingData) {
          this.clearTimeouts();
          this.setState({ trackingData: this.props.trackingData, array: this.props.array });
        }
    }
    
    // resets state to defaul
    reset = (array) => {
        this.setState({
          array,
          trackingData: [],
          currentStep: -1,
          groupA: [],
          groupB: [],
          groupC: [],
          groupD: [],
          sortedIndices: [],
          originalArray: [...array]
        });
    };

    //handles change in speed of execution
    speedHandler = ()=>{

        const prevState = this.state;
        const playing = this.state.timeouts.length > 0;
        this.pause();
        this.setState({speed: prevState.speed===4 ? 1 : prevState.speed*2});
        if (playing) this.continue();

    }

    //visulaizes tracking data to screen
    visulize = (unitTrackingData)=>{
        this.setState({
            array: unitTrackingData.array,
            groupA: unitTrackingData.groupA,
            groupB: unitTrackingData.groupB,
            groupC: unitTrackingData.groupC,
            groupD: unitTrackingData.groupD,
            sortedIndices: unitTrackingData.sortedIndices
        });
    }

    //clears all the timeouts
    clearTimeouts = () => {
        this.state.timeouts.forEach((timeout) =>
          clearTimeout(timeout)
        );
        this.setState({ timeouts: [] });
    };

    //starting playing algos on screen
    play = (trackingData)=>{
        this.setState({playing: true});

        const timeouts = [];
        const unitTime = 500/this.state.speed;

        trackingData.forEach((element, i) => {
            let timeOut = setTimeout((element) => {
                this.setState(
                    prevState=>({currentStep: prevState.currentStep+1}), 
                    this.visulize(element));
            }, i*unitTime, element);

            timeouts.push(timeOut);
        });

        let timeout = setTimeout(
            this.clearTimeouts,
            trackingData.length * unitTime
        );

        timeouts.push(timeout);

        this.setState({timeouts});

    }

    //pauses algos visulization
    pause = ()=>{
        this.clearTimeouts();
    }

    //resumes algos visulization
    continue = () => {
        const trackingData = this.state.trackingData.slice(this.state.currentStep);
        this.play(trackingData);
    };

    //takes visulization to one step forward
    stepForward = () => {
        const trackingData = this.state.trackingData;
        const currentStep = this.state.currentStep;
        if (currentStep < trackingData.length - 1) {
          const item = trackingData[currentStep + 1];
          this.setState(
            { currentStep: currentStep + 1 },
            this.visulize(item)
          );
        }
    };

    //takes visulization to one step backward
    stepBackward = () => {
        const trackingData = this.state.trackingData;
        const currentStep = this.state.currentStep;
        if (currentStep > 0) {
          const item = trackingData[currentStep - 1];
          this.setState(
            { currentStep: currentStep - 1 },
            this.visulize(item)
          );
        }
    };

    //renders everything to screen
    render() {
        return (
            <div>
                <Bars 
                    array = {this.state.array}
                    groupA={this.state.groupA}
                    groupB={this.state.groupB}
                    groupC={this.state.groupC}
                    groupD={this.state.groupD}
                    sortedIndices={this.state.sortedIndices}
                    totalSteps={this.state.trackingData.length}
                    currentStep={this.state.currentStep} />
    
                <Controls 
                    speedHandler={this.speedHandler}
                    speed={this.state.speed}
                    generateRandomArray = {this.props.generateRandomArray}
                    selectedAlgorithm={this.props.selectedAlgorithm}
                    playing={this.state.timeouts.length > 0}
                    play={()=>{this.state.currentStep === -1 ? this.play(this.state.trackingData) : this.continue()}}
                    pause={this.pause}
                    currentStep={this.state.currentStep}
                    stepForward={this.stepForward}
                    stepBackward={this.stepBackward}
                    trackingDataLength={this.state.trackingData.length} />
    
                <ProcessColors selectedAlgorithm={this.props.selectedAlgorithm} />
    
                <hr style={{margin: '10px 3%'}} />
    
                <Description selectedAlgorithm={this.props.selectedAlgorithm} />
    
                <hr style={{margin: '10px 3%'}} />
    
            </div>
        );
    }

}

export default Content;