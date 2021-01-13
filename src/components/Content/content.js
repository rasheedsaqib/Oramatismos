import Bars from './Bars/bars';
import Controls from './Controls/controls';
import ProcessColors from './ProcessColors/processColors';
import Description from './Description/description';

const Content = (props)=>{
    return (
        <div>
            <Bars 
                array = {props.array}
                arraySize = {props.arraySize}
                selectedAlgorithm={props.selectedAlgorithm}
                algorithims = {props.algorithims}
                playing={props.playing}
                arrayHandler={props.arrayHandler} />

            <Controls 
                speedHandler={props.speedHandler}
                speed={props.speed}
                generateRandomArray = {props.generateRandomArray}
                selectedAlgorithm={props.selectedAlgorithm}
                playing={props.playing}
                playHandler={props.playHandler} />

            <ProcessColors selectedAlgorithm={props.selectedAlgorithm} />

            <hr style={{margin: '10px 3%'}} />

            <Description selectedAlgorithm={props.selectedAlgorithm} />

            <hr style={{margin: '10px 3%'}} />

        </div>
    );
}

export default Content;