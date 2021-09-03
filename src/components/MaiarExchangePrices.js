import { useQuery, gql } from '@apollo/client';

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
         <div>{data && JSON.stringify(data)}</div>
      </>
   );
};

export default MaiarExchangePrices;
