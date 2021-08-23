import SiteCard from "./SiteCard";
import useFetchData from "../hooks/useFetchData";

import aerovekLogo from "../assets/images/aerovek-logo.jpeg"
import bhnetworkLogo from "../assets/images/bhnetwork-logo.png"
import elrondLogo from "../assets/images/elrond-logo.png"
import numeral from "numeral";

const MainDashboard = ({ myAddress }) => {

    const dataAddress = useFetchData(`https://api.elrond.com/accounts/${myAddress}`);
    const dataEconomics = useFetchData('https://api.elrond.com/economics')

    return ( 
        <>

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
                                                               <span>___</span> } EGLD</p>

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