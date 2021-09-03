import useFetchData from '../hooks/useFetchData';
import Transaction from './Transaction';

const ShowTransactions = ({ myAddress }) => {
   let number = 500; // nombre de transactions que l'on veut voir dans le récap

   const transactions = useFetchData(
      `https://devnet-api.elrond.com/transactions?from=0&size=${number}&sender=${myAddress}`
   );

   let txArray = transactions.apiData; // array des transactions

   return (
      <>
         <div className="mt-8">
            <h1 className="mx-6 font-bold text-2xl">Your transactions</h1>
         </div>
         <div className="flex flex-wrap flex-shrink-1 mx-5">
            {txArray !== undefined
               ? txArray.map((item) => (
                    <div
                       key={JSON.stringify(item['txHash'])}
                       className="shadow-xl flex flex-shrink-1 my-2 p-2 w-full ring-2 ring-black "
                    >
                       <Transaction tx={item} />
                    </div>
                 ))
               : 'Data Loading'}
         </div>
      </>
   );
};

export default ShowTransactions;
