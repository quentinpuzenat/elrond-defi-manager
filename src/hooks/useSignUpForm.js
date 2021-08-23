import {useState} from 'react';

const useSignUpForm = (callback) => {
    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        } 
        callback();
    }

    const handleInputChange = (event) => {
        event.persist();
        setInput(event.target.value)
    }

    return {
        handleSubmit, 
        handleInputChange,
        input };
}
export default useSignUpForm;