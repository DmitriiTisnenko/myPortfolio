import { useState, useEffect} from 'react';
// import {Container} from 'react-bootstrap';
// import './App.css';

const useInputWithValidation = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChangeValue = (e) => setValue(e.target.value);

    const onValidateInput = () => value.search(/\d/) >= 0;

    return {value, onChangeValue, onValidateInput};
}

const Form = () => {
    const input = useInputWithValidation('');
    const textArea = useInputWithValidation('');

    const color = input.onValidateInput() ? {color: 'red'} : null;

    return (
        // <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input value={`${input.value} / ${textArea.value}`} type="text" className="form-control" readOnly/>
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input onChange={input.onChangeValue} 
                    value={input.value}
                    style={color}
                    type="email"
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea 
                    onChange={textArea.onChangeValue}
                    value={textArea.value}
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"></textarea>
                </div>
            </form>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;