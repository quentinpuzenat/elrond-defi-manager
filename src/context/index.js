import { createContext} from "react";
import { useState } from "react";

export const AddressContext = createContext(null);
 
const AddressProvider = ({children}) => {

    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        } 
        console.log(input)
    }

    const handleInputChange = (event) => {
        event.persist();
        setInput(event.target.value)
    }

    return ( 
        <>
        <AddressContext.Provider value={{input, setInput, handleInputChange, handleSubmit}}>
            {children}
        </AddressContext.Provider>
        </>
     );
}
 
export default AddressProvider;