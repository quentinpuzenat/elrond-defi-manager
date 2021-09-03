const Transaction = ({ tx }) => {
   const txDate = tx.timestamp * 1000; // date de la transaction

   return (
      <>
         <div className="flex flex-row gap-1 flex-shrink-1 m-1">
            <div className="flex flex-col gap-1 flex-shrink-1">
               <p className="">
                  <span className=" font-semibold">Hash</span>:{' '}
                  {tx !== undefined ? tx.txHash : 'hash'}
               </p>
               <p className="">
                  <span className=" font-semibold">Sender</span>:{' '}
                  {tx !== undefined ? tx.sender : 'sender'}
               </p>
               <p className="">
                  <span className=" font-semibold">Receiver</span>:{' '}
                  {tx !== undefined ? tx.receiver : 'receiver'}
               </p>
               <p className="">
                  <span className=" font-semibold">Date</span>:{' '}
                  {tx !== undefined
                     ? Intl.DateTimeFormat('en-US', {
                          dateStyle: 'full',
                          timeStyle: 'short',
                       }).format(new Date(txDate))
                     : 'receiver'}
               </p>
            </div>
         </div>
      </>
   );
};

export default Transaction;
