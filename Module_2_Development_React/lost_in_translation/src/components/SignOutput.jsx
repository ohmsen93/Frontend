import { Files } from "react-bootstrap-icons";
import { useSelector, useDispatch } from 'react-redux';
import { addTranslationAsync, getTranslationsAsync } from '../redux-parts/translationSlice';




const SignOutput = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const wordToTranslate =  state.user.translations[(state.user.translations.length-1)];

    const SignTranslator = (query) => {

        const resultArr = [];

        const queryArr = query.split('');

        const imgDIR = 'individial_signs/'; 

        
        queryArr.forEach(element => {

            resultArr.push(imgDIR+element.toLowerCase()+'.png');
        });
    
        return resultArr;
        
    }


    const translationPathArr = SignTranslator(wordToTranslate);


    return (
        
        <>
            {translationPathArr.map(img => (<img srcSet={img} style={{width:50, height:50}}/>))}
        </>
    );
}

export default SignOutput;