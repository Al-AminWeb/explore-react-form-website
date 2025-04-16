import './App.css'
import SimpleForm from "./Components/SimpleForm/SimpleForm.jsx";
import FormAction from "./Components/FormAction/FormAction.jsx";
import ControlledField from "./Components/ControlledField/ControlledField.jsx";
import HookForm from "./Components/HookForm/HookForm.jsx";
import ProductManagement from "./Components/prroductManagement/ProductManagement.jsx";

function App() {


    return (
        <>
            {<h1>Explore React Form</h1>}
            {/*<SimpleForm></SimpleForm>*/}
            {/*{<FormAction></FormAction>*/}
            {/*    <ControlledField></ControlledField>*/}
            {/*<HookForm></HookForm>*/}
            <ProductManagement/>
        </>
    )
}

export default App
