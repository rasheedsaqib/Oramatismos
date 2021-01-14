import style from 'styled-components';
import playImg from '../../../assets/images/play.svg';
import prevImg from '../../../assets/images/previous.svg';
import pauseImg from '../../../assets/images/pause.svg';
import randomizeImg from '../../../assets/images/randomize.svg';

const DivControls = style.div`
    margin: 5px 5%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgPlay =  style.img`
    width: 60px;
    height: 60px;
    margin: 0 10px;
    cursor: ${props=>props.disabled ? null : 'pointer'};
    opacity: ${props=>props.disabled ? '0.3' : '1'}
`;

const ImgPrev = style.img`
    margin: 0 10px;
    width: 25px;
    cursor: ${props=>props.disabled ? null : 'pointer'};
    opacity: ${props=>props.disabled ? '0.3' : '1'}
`;

const ImgNext = style.img`
    margin: 0 10px;
    width: 25px;
    transform: rotate(180deg);
    cursor: ${props=>props.disabled ? null : 'pointer'};
    opacity: ${props=>props.disabled ? '0.3' : '1'};
`;

const PSpeed = style.p`
    margin: 0 10px;
    cursor: pointer;
    width: 40px;
    user-select: none;
    text-align: right;
`;

const ImgRandom = style.img`
    width: 25px;
    margin: 0 10px;
    cursor: pointer;
`;

const Controls = (props)=>{

    let playButton = <ImgPlay onClick={props.play} disabled={props.selectedAlgorithm ? false : true} src={playImg} alt="Play" />;

    if(props.playing){
        playButton = <ImgPlay onClick={props.pause} disabled={props.selectedAlgorithm ? false : true} src={pauseImg} alt="Play" />;
    }

    return (
        <DivControls>
            <PSpeed onClick={props.speedHandler}>{props.speed}x</PSpeed>
            <ImgPrev 
                disabled={props.currentStep === -1}
                onClick={props.stepBackward}
                // onKeyDown={event=>{event.key === 'ArrowLeft' ? props.stepForward() : null}}
                src={prevImg} alt="Play" />

            {playButton}

            <ImgNext 
                disabled={(props.selectedAlgorithm ? false : true) || (props.currentStep >= props.trackingDataLength-1)} 
                onClick={props.stepForward}
                src={prevImg} alt="Play" />
            <ImgRandom title='Randomize' onClick={props.generateRandomArray} src={randomizeImg} />
        </DivControls>
    );
}

export default Controls;