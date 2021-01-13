import style from 'styled-components';

const DivFooter = style.div`
    margin: 20px 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const footer = (props)=>(
    <DivFooter>
        <p style={{margin: '0'}}>Coded with 🤍 </p>
        <p style={{margin: '0'}}>© 2021 Oramatismós. </p>
    </DivFooter>
)

export default footer;