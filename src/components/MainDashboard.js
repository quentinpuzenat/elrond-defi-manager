import SiteCard from "./SiteCard";
import useFetchData from "../hooks/useFetchData";

import aerovekLogo from "../assets/images/aerovek-logo.jpeg"
import bhnetworkLogo from "../assets/images/bhnetwork-logo.png"
import elrondLogo from "../assets/images/elrond-logo.png"
import numeral from "numeral";

const MainDashboard = ({ myAddress }) => {
    
    const dataAddress = useFetchData(`https://devnet-api.elrond.com/accounts/${myAddress}`, myAddress);
    const dataTokens = useFetchData(`https://devnet-api.elrond.com/accounts/${myAddress}/tokens`)
    const dataEconomics = useFetchData('https://api.elrond.com/economics', myAddress)

    const currenciesArray = dataTokens.apiData

    return ( 
        <>

        <p className="mx-4" >test address: <br/>
            <span className="font-bold text-xl">erd1qlnf8vnpxkj3wcf32zmw2krdkgqepc9gy9djvk5wd23maq8mzyqs26vss9</span>
        </p>


        {/* <h1>{tokens}</h1>
        <p>{array[2]}</p> */}
        <p className="m-3">{myAddress !== "" && currenciesArray !== null? 
        currenciesArray.map(x => `${JSON.stringify(x["name"])}, `): "" }</p>



        {/* Portfolio Value & Impermanent Loss*/}
            <div className="container portfolio my-3 ">
                <div className="flex flex-row">
                    <div className=" bg-gradient-to-br from-blue-500 to-green-500 rounded-xl mb-3 mx-1 shadow-xl">
                        <h4 className="px-5 py-2 text-xl text-white font-semibold">Portfolio Value: {myAddress !== "" && !dataAddress.serverError? // if myAddress empty we take precaution for displaying balance
                                                              numeral((dataAddress.apiData.balance / 1e18)*(dataEconomics.apiData.price)).format('0.00a'): // multiply egold amount with price
                                                               <span>___</span> } $
                        </h4> 
                        <p className="px-5 py-2 text-xl text-white font-semibold">{myAddress !== "" && !dataAddress.serverError? // if myAddress empty we take precaution for displaying balance
                                                              numeral(dataAddress.apiData.balance / 1e18).format('0.00a'): // multiply egold amount with price
                                                               <span>___</span> } xEGLD</p>

                        
                    </div>
                    <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-xl mb-3 mx-1 shadow-xl">
                        <h4 className="px-5 py-2 text-xl text-white font-semibold">Impermanent Loss: ___ $</h4>
                    </div>
                </div>
            </div>
            
        {/* All sites where user have positions */}
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg bg-white shadow-sm mb-3 mx-1">
                        <SiteCard logo={ aerovekLogo } 
                                  name="Aerovek Aviation"
                                  token="AERO"/>
                    </div>
                    <div className="col-lg bg-white shadow-sm mb-3 mx-1">
                        <SiteCard logo={ bhnetworkLogo } 
                                  name="Black Hat Network"
                                  token="BHAT"/>
                    </div>
                    <div className="col-lg bg-white shadow-sm mb-3 mx-1">
                        <SiteCard logo={ elrondLogo } 
                                  name="Maiar Exchange"
                                  token="MEX"/>
                    </div>
                </div>
            </div>


        </>
     );
}
 
export default MainDashboard;