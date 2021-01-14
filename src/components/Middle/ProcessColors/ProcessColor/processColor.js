import style from 'styled-components';

const DivContainer = style.div`
    margin-right: 20px;
    display: flex;
    align-items: center;
`;

const DivColor = style.div`
    height: 20px;
    width: 20px;
    background: ${props=>props.background};
    margin-right: 10px;
    border: 1px solid black;
`;

const processColors = (props)=>{
    return (
        <DivContainer style={{display: props.show ? null : 'none'}}>
            <DivColor background={props.background} />
            <p> {props.text} </p>
        </DivContainer>
    );
}

export default processColors;