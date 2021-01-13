import React, {useState} from 'react';
import style from 'styled-components';
import Backdrop from "../../Ui/Backdrop/backdrop";

const PSize = style.p`
    color: rgba(252, 252, 252, 1);
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
    width: 100px;
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

const ArraySize = (props)=>{

    const [isPromptActive,setPromptActive] = useState(false);

    const prompt = [5,10,15,20,25].map(size=>{
        return <DivPropmtContent key={size} onClick={()=>{props.arraySizeHandler(size);setPromptActive(!isPromptActive)}}> {size} </DivPropmtContent>
    });

    return (
        <div style={{position: 'relative'}}>   
            <PSize
                onClick={()=>{setPromptActive(!isPromptActive)}}
                title='Select Array Size' alt={1}> Array Size : <span style={{width: '15px', padding: '0 5px'}}>{props.arraySize}</span> <span style={{paddingRight: '10px', transform: 'rotate(180deg)'}}> ^ </span> </PSize>
            <DivPropmt style={isPromptActive ? {display: 'block'} : null}> {prompt} </DivPropmt>
            <Backdrop clicked={setPromptActive} show={isPromptActive} />
        </div>
    )
};

export default ArraySize;