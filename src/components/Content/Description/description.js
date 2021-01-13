import style from "styled-components";
import { BubbleSortDetails, 
            SelectionSortDetails,
            InsertionSortDetails,
            MergeSortDetails,
            QuickSortDetails,
            QuickSort3Details,
            HeapSortDetails,
            ShellSortDetails
        } from "../../../algorithms/algorithms";

const DivDescription = style.div`
    margin: 10px 5% 20px 5%;
`;

const DivFlex = style.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    @media screen and (max-width: 1024px){
        align-items: center;
    }
`;

const DivContent = style.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`;

const DivOneDetail = style.div`
    box-sizing: border-box;
    width: 45%;

    @media screen and (max-width: 1024px){
        width: 100%;
    }
`;

const RenderDescription = props=>{
    return props.text.split('\n').map(str => <p key={str}>{str}</p>);
}

const Description = props=>{

    let selectAlgorithim = {
        name: 'Select Algorithm',
        description: "You must select an algorithm before you can visualize it's execution on an array of numbers.",
        worstCaseTimeComplex: '',
        averageTimeComplex: '',
        bestCaseTimeComplex: '',
        worstCaseSpaceComplex: ''
    };

    switch(props.selectedAlgorithm){
        case 'Bubble Sort':
            selectAlgorithim = BubbleSortDetails;
            break;

        case 'Selection Sort':
            selectAlgorithim = SelectionSortDetails;
            break;

        case 'Insertion Sort':
            selectAlgorithim = InsertionSortDetails;
            break;

        case 'Merge Sort':
            selectAlgorithim = MergeSortDetails;
            break;

        case 'Quick Sort':
            selectAlgorithim = QuickSortDetails;
            break;
    
        case 'Quick Sort 3':
            selectAlgorithim = QuickSort3Details;
            break;
    
        case 'Heap Sort':
            selectAlgorithim = HeapSortDetails;
            break;
    
        case 'Shell Sort':
            selectAlgorithim = ShellSortDetails;
            break;

        default:
            selectAlgorithim = {
                name: 'Select Algorithm',
                description: "You must select an algorithm before you can visualize it's execution on an array of numbers.",
                worstCaseTimeComplex: '',
                averageTimeComplex: '',
                bestCaseTimeComplex: '',
                worstCaseSpaceComplex: ''
            };
            break;
    }

    return (
        <DivDescription>
            <h1 style={{marginBottom: '0'}}> {selectAlgorithim.name} </h1>

            <DivContent>
                <DivOneDetail>
                    <RenderDescription text={selectAlgorithim.description} />
                </DivOneDetail>
                <DivOneDetail>
                    <h3>Performance</h3>
                    <DivFlex>
                        <p style={{marginBottom: '0', marginTop: '5px'}}>Worst-case time complexity</p>
                        <p style={{marginBottom: '0', marginTop: '5px'}}> {selectAlgorithim.worstCaseTimeComplex} </p>
                    </DivFlex>
                    <DivFlex>
                        <p style={{marginBottom: '0', marginTop: '5px'}}>Average time complexity</p>
                        <p style={{marginBottom: '0', marginTop: '5px'}}> {selectAlgorithim.averageTimeComplex} </p>
                    </DivFlex>
                    <DivFlex>
                        <p style={{marginBottom: '0', marginTop: '5px'}}>Best-case time complexity</p>
                        <p style={{marginBottom: '0', marginTop: '5px'}}> {selectAlgorithim.bestCaseTimeComplex} </p>
                    </DivFlex>
                    <DivFlex>
                        <p style={{marginBottom: '0', marginTop: '5px'}}>Worst-case space complexity</p>
                        <p style={{marginBottom: '0', marginTop: '5px'}}> {selectAlgorithim.worstCaseSpaceComplex} </p>
                    </DivFlex>
                </DivOneDetail>
            </DivContent>

        </DivDescription>
    );
}

export default Description;