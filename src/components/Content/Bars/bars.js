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
    height: 5px;
    width: ${props=>props.background};
    background: ${props=>props.background};
    border-radius: 10px;
    border: 1px solid #fcfcfc;
    text-align: left;
`;

const Bars = (props)=>{

    const max = Math.max( ...props.array );

    const bars = props.array.map(element=>{
        return <Bar 
            height={Math.round((element/max)*95)}
            key={element * Math.random() + Math.random()}
            arraySize={props.arraySize}> {element} </Bar>;
    });

    return (
        <DivContainer>
            <DivContent> {bars} </DivContent>

            <DivProgress background='#fcfcfc'>
                <DivProgress />
            </DivProgress>
        </DivContainer>
    );
}

export default Bars;