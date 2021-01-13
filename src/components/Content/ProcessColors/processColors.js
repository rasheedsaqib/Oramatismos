import style from 'styled-components';
import ProcessColor from './ProcessColor/processColor'

const DivContainer = style.div`
    margin: 10px 5%;
    display: flex;
    flex-wrap: wrap;
`;

const processColors = (props)=>{

    let allColors = <DivContainer>
                        <ProcessColor show background='#fcfcfc' text='Unsorted' />
                    </DivContainer>;

    if(props.selectedAlgorithm){
        allColors = <DivContainer>
            <ProcessColor show background='#00d4bd' text='Sorted' />
            <ProcessColor show={props.selectedAlgorithm !== 'Merge Sort'} background='#e64c06' text='Comparing' />
            <ProcessColor show={props.selectedAlgorithm !== 'Merge Sort'} background='#d84756' text='Swaping' />

            <ProcessColor show={props.selectedAlgorithm === 'Merge Sort'} background='#e64c06' text='Call Merge Sort' />
            <ProcessColor show={props.selectedAlgorithm === 'Insertion Sort'} background='#ff4646' text='Overwrite from memory' />
            <ProcessColor show={props.selectedAlgorithm === 'Merge Sort'} background='#ff4646' text='Overwrite from axillary array' />

            <ProcessColor show={props.selectedAlgorithm === 'Quick Sort' || props.selectedAlgorithm === 'Quick Sort 3'} background='#357dec' text='Less than pivot' />
            <ProcessColor show={props.selectedAlgorithm === 'Heap Sort'} background='#357dec' text='Heap Built' />
        </DivContainer>
    }

    return (
        <div>
            {allColors}
        </div>
    );
}

export default processColors;