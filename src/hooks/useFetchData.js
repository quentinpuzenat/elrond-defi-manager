import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, myAddress) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(false);

    const fetchData = async (url) => {
      try { // try block
        const resp = await axios.get(url);
        const data = await resp?.data;

        setApiData(data); // Once the data is awaited we store it in apiData using setApiData
        setIsLoading(false); // loading is set to false, we finished fetching
        setServerError(false)
      } catch (error) { // catch block
        setServerError(error);
        setIsLoading(false);
      }
    };

    // only fetch if url changes (see dependencies)
    useEffect(() => {

        setIsLoading(true); // we want to show the loader when the API has initiated a call to the server
        fetchData(url); // we call fetchData function that we created
        
        
      }, [url, myAddress]);


    return { isLoading, apiData, serverError };
}
 
export default useFetchData;