import TextInput from "./TextInput";
import SignOutput from "./SignOutput";

const Translator = () => {
    return (
        <div id="TranslationContainer" className="content container col">
            <div className="row">
                <TextInput/>
                <SignOutput/>
            </div>
                <button type="button" className="btn btn-primary mb-3">Translate</button>

        </div>
    )
}

export default Translator;