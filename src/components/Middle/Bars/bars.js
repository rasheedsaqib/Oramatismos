import style from 'styled-components';
import Bar from './Bar/bar';

const DivContainer = style.div`
    margin: 10px 5%;
`;

const DivContent = style.div`
    position: relative;
    padding-top: 30px;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 10px;
`;

const DivProgress = style.div`
    height: ${props=>props.height+'px'};
    width: ${props=>(props.width+'%')};
    background: ${props=>props.background};
    border-radius: 20px;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: ${props=>props.margin};
`;

const Bars = (props)=>{

    const max = Math.max( ...props.array );

    const bars = props.array.map((element, i)=>{
        return <Bar 
            key={element * Math.random() + Math.random()}
            height={Math.round((element/max)*95)}
            arraySize={props.arraySize}
            stateA={props.groupA.includes(i)}
            stateB={props.groupB.includes(i)}
            stateC={props.groupC.includes(i)}
            stateD={props.groupD.includes(i)}
            sorted={props.sortedIndices.includes(i)} > {element} </Bar>;
    });

    return (
        <DivContainer>
            <DivContent> {bars} </DivContent>

            <DivProgress background='#fcfcfc' height='8'>
                <DivProgress background='#1a1b2f' width={Math.floor( (((props.currentStep+1)/props.totalSteps)*100) ? (((props.currentStep+1)/props.totalSteps)*100) : 0 )} height='5' margin='0 2px' />
            </DivProgress>
        </DivContainer>
    );
}

export default Bars;