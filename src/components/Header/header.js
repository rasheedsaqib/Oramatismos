import style from 'styled-components';
import Algorithims from './Algorithms/algorithms';
import ArraySize from './ArraySize/arraySize';

const DivHeader = style.div`
    margin: 10px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DivItems = style.div`
    display: flex;
    transition: 0.5s ease;

    @media screen and (max-width: 1024px){
        background: #14162e;
        position: absolute;
        left: -100%;
        top: 0;
        z-index: +1;
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

// hamburger
const Hamburger = style.div`
    cursor: pointer;
    z-index: +2;
    @media screen and (min-width: 1025px){
        display: none;
    }
`;

const BurgerLine = style.div`
    width: 35px;
    height: 5px;
    background: #fcfcfc;
    margin: 5px 0;
`;

const header = (props)=>(
    <DivHeader>
        <h2 style={{zIndex: '+2'}}>Oramatismós.</h2>
        <Hamburger onClick={props.toggleAppDrawer}>
            <BurgerLine />
            <BurgerLine />
            <BurgerLine />
        </Hamburger>
        <DivItems style={props.appDrawerOpen ? {left: '0'} : null}>
            <Algorithims
                selectedAlgorithm={props.selectedAlgorithm}
                algorithims={props.algorithims}
                algorithimHandler={props.algorithimHandler} />
            
            <ArraySize arraySize={props.arraySize} arraySizeHandler={props.arraySizeHandler} />

        </DivItems>
    </DivHeader>
);

export default header;