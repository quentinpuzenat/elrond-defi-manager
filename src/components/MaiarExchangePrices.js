import { useQuery, gql } from '@apollo/client';
import numeral from 'numeral';

const PAIR_PRICES = gql`
   query {
      pairs {
         firstToken {
            name
         }
         secondToken {
            name
         }
         firstTokenPriceUSD
         secondTokenPriceUSD
      }
   }
`;

const MaiarExchangePrices = () => {
   const { data } = useQuery(PAIR_PRICES);

   return (
      <>
         <div className="ring-2 ring-black shadow-xl p-4 mt-4 mx-5">
            {data &&
               data.pairs.map((pair) => {
                  return (
                     <div
                        key={`${pair.firstToken.name}-${pair.secondToken.name}`}
                     >
                        <p>
                           Price of {pair.firstToken.name}:{' '}
                           {numeral(pair.firstTokenPriceUSD).format('0.00a')}
                        </p>
                        <p>
                           Price of {pair.secondToken.name}:{' '}
                           {numeral(pair.secondTokenPriceUSD).format('0.00a')}
                        </p>
                     </div>
                  );
               })}
         </div>
      </>
   );
};

export default MaiarExchangePrices;
