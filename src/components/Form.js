import useSignUpForm from "../hooks/useSignUpForm";

const Form = ({ parentCallback }) => {

    const {input, handleInputChange, handleSubmit} = useSignUpForm(() => {console.log(`erd address is: ${input}`)});

    const onTrigger = (event) => {
        handleSubmit(event);
        parentCallback(input);
    }

    return ( 
        <>
        <div className="bg-red-300 w-full h-full">
            <h1>a</h1>
        </div>
        </>
     );
}
 
export default Form;