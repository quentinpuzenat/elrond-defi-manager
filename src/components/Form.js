import useSignUpForm from "../hooks/useSignUpForm";

const Form = ({ parentCallback }) => {

    const {input, handleInputChange, handleSubmit} = useSignUpForm(() => {console.log(`erd address is: ${input}`)});

    const onTrigger = (event) => {
        handleSubmit(event);
        parentCallback(input);
    }

    return ( 
        <>
        <div className="container my-5">
            <form onSubmit={onTrigger}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control"
                            id="floatingInput" placeholder="erd..." required
                            onChange={handleInputChange} value={input}
                            />
                            <label htmlFor="floatingInput">Your Elrond Address</label>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mx-4">
                    <button type="submit" className="btn btn-outline-success btn-sm col-sm-2">Manage</button>
                </div>
            </form>
            
        </div>
        </>
     );
}
 
export default Form;