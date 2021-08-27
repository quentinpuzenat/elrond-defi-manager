import useSignUpForm from "../hooks/useSignUpForm";

const Form = ({ parentCallback }) => {

    const {handleSubmit, handleInputChange, input} = useSignUpForm(() => {console.log(`erd address is: ${input}`)});

    const onTrigger = (event) => {
        handleSubmit(event);
        parentCallback(input);
    }

    return ( 
        <>
        <form onChange={handleInputChange}>
            <div className="flex justify-center">
                <div className="m-3 flex flex-col w-2/3">
                    <div className="flex justify-center">
                        <label htmlFor="erdAddress" className="mb-1 text-xl font-semibold">Your erd address </label>
                    </div>
                    <div className="flex flex-row justify-center gap-1 w-full">
                        <input type="text"
                        className=" ring-2 ring-blue-600 focus:outline-none shadow-lg rounded-xl px-4 py-2 w-full"
                        id="erdAddress"
                        defaultValue={input}
                        required/>
                        <button type="submit" onClick={onTrigger} className="hover:shadow-xl bg-gradient-to-br from-blue-400 hover:from-indigo-600 to-blue-400 text-white ml-2 p-2 rounded-xl">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        </>
     );
}
 
export default Form;