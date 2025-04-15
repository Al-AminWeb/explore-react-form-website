import './App.css'
import SimpleForm from "./Components/SimpleForm/SimpleForm.jsx";
import FormAction from "./Components/FormAction/FormAction.jsx";
import ControlledField from "./Components/ControlledField/ControlledField.jsx";

function App() {


    return (
        <>
            {<h1>Explore React Form</h1>}
            {/*<SimpleForm></SimpleForm>*/}
            {/*{<FormAction></FormAction>*/}
                <ControlledField></ControlledField>
        </>
    )
}

export default App
