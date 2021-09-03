import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url, myAddress) => {
   const [fetchedData, setData] = useState({
      isLoading: true,
      error: false,
      apiData: [],
   });

   const fetchData = async (url) => {
      try {
         // try block
         const resp = await axios.get(url);
         const data = await resp?.data;

         setData({
            isLoading: false,
            error: false,
            apiData: data,
         });
      } catch (error) {
         // catch block
         console.log(`Erreur de fetch: ${error}`);
         setData({
            isLoading: false,
            error: true,
         });
      }
   };

   // only fetch if url changes (see dependencies)
   useEffect(() => {
      setData({ isLoading: true });
      fetchData(url); // we call fetchData function that we created
   }, [url, myAddress]);

   return fetchedData;
};

export default useFetchData;
