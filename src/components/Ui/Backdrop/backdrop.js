import style from 'styled-components';

const DivBack = style.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: +3;
`;

const Backdrop = (props)=>{

    const backdropStyle = {
        display: props.show ? 'block' : 'none',
        height: props.height ? props.height : '100vh',
        width: props.width ? props.width : '100%',
        top: props.top ? props.top : '0',
        left: props.left ? props.left : '0',
    }

    return(
        <DivBack onClick={()=>props.clicked(false)} style={backdropStyle} />
    );
}

export default Backdrop;