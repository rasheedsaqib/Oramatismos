import style from 'styled-components';

const DivBar = style.div`
    height: ${props=>props.height};
    width: 100%;
    margin: 0 5px;
    background: ${props=>props.background ? props.background : '#fcfcfc'};
    color: #1a1b2f;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: 0.5s ease;
`;

const PContent = style.p`
    margin-bottom: 3px;
    
    @media screen and (max-width: 900px){
        display: ${props => props.show ? null : 'none'};
    }

    @media screen and (max-width: 500px){
        display: none;
    }
`;

const Bar = (props)=>{

    let background = '#fcfcfc';

    if(props.sorted){
        background = '#00d4bd';
    }

    if(props.stateD){
        background = '#357dec';
    }
    else if(props.stateC){
        background = '#ff4646';
    }
    else if(props.stateB){
        background = '#d84756';
    }
    else if(props.stateA){
        background = '#e64c06';
    }

    return (
        <DivBar background={background} height={(props.height+5) + '%'}>
                <PContent show={props.arraySize < 20}> {props.children} </PContent>
        </DivBar>  
)};

export default Bar;