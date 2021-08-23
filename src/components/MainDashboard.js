import SiteCard from "./SiteCard";

import aerovekLogo from "../assets/images/aerovek-logo.jpeg"
import bhnetworkLogo from "../assets/images/bhnetwork-logo.png"
import elrondLogo from "../assets/images/elrond-logo.png"

const MainDashboard = ({ myAddress }) => {

    return ( 
        <>
        <h1>{ myAddress }</h1>
        {/* Portfolio Value & Impermanent Loss*/}

            <div className="container portfolio my-3 ">
                <div className="row">
                    <div className="col-md bg-white mb-3 mx-1 shadow-sm">
                        <h4 className="p-3">Portfolio Value: ___ $</h4>
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