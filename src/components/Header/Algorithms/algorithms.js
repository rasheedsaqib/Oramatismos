import React, {useState} from 'react';
import style from 'styled-components';
import Backdrop from "../../Ui/Backdrop/backdrop";

const PAlgorithm = style.p`
    color: rgba(252, 252, 252, ${props=>props.alt});
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 10px;
    user-select: none;

    @media screen and (max-width: 1024px){
        margin: 20px 0;
    }
`;

const DivPropmt = style.div`
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 200px;
    overflow: scroll;
    background: #fcfcfc;
    display: none;
    transition: 0.3s ease;
    z-index: +4;
`;

const DivPropmtContent = style.div`
    padding: 10px;
    color: #1a1b2f;
    cursor: pointer;

    &:hover{
        color: #fcfcfc;
        background: rgba(26,27,47,0.5);
    }
`;

const Algorithms = (props)=>{

    const [isPromptActive, setPromptActive] = useState(false);

    const prompt = props.algorithims.map(algorithm=>{
        return <DivPropmtContent key={algorithm} onClick={()=>{props.algorithimHandler(algorithm); setPromptActive(!isPromptActive)}}> {algorithm} </DivPropmtContent>
    });

    return (
        <div>
            <div style={{position: 'relative'}}>    
                <PAlgorithm
                    onClick={()=>{setPromptActive(!isPromptActive)}}
                    title='Select Algorithim' alt={props.selectedAlgorithm ? 1 : 0.3}> {props.selectedAlgorithm ? props.selectedAlgorithm : 'Select Algorithm'} <span style={{paddingRight: '10px', transform: 'rotate(180deg)'}}> ^ </span> </PAlgorithm>
                <DivPropmt style={isPromptActive ? {display: 'block'} : null}> {prompt} </DivPropmt>
                <Backdrop clicked={setPromptActive} show={isPromptActive} />
            </div>
        </div>
    )
};

export default Algorithms;