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


    let array = new Array(JSON.stringify(dataTokens.apiData))
    let tokens = [];
    if (myAddress !== "" && !dataAddress.serverError) {
        for(var i = 0; i < array.length; i++) {
            console.log(array[i].name)
            tokens.push(array[i].name)
        }
    }

    return ( 
        <>
        <h1>{tokens}</h1>
        <p>{array[2]}</p>
        <p>{JSON.stringify(dataTokens.apiData)[0]}</p>



        {/* Portfolio Value & Impermanent Loss*/}
            <div className="container portfolio my-3 ">
                <div className="row">
                    <div className="col-md bg-white mb-3 mx-1 shadow-sm">
                        <h4 className="px-3">Portfolio Value: {myAddress !== "" && !dataAddress.serverError? // if myAddress empty we take precaution for displaying balance
                                                              numeral((dataAddress.apiData.balance / 1e18)*(dataEconomics.apiData.price)).format('0.00a'): // multiply egold amount with price
                                                               <span>___</span> } $
                        </h4> 
                        <p className="px-3">{myAddress !== "" && !dataAddress.serverError? // if myAddress empty we take precaution for displaying balance
                                                              numeral(dataAddress.apiData.balance / 1e18).format('0.00a'): // multiply egold amount with price
                                                               <span>___</span> } xEGLD</p>

                        

                    </div>
                    <div className="col-md bg-white shadow-sm mb-3 mx-1 ">
                        <h4 className="p-3">Impermanent Loss: ___ $</h4>
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