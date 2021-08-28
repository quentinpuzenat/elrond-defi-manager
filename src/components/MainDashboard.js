import SiteCard from "./SiteCard";
import Currency from "./Currency";
import useFetchData from "../hooks/useFetchData";

import aerovekLogo from "../assets/images/aerovek-logo.jpeg"
import bhnetworkLogo from "../assets/images/bhnetwork-logo.png"
import elrondLogo from "../assets/images/elrond-logo.png"
import numeral from "numeral";
import { data } from "jquery";

const MainDashboard = ({ myAddress }) => {
    
    const dataAddress = useFetchData(`https://devnet-api.elrond.com/accounts/${myAddress}`, myAddress);
    const dataTokens = useFetchData(`https://devnet-api.elrond.com/accounts/${myAddress}/tokens`)
    const dataEconomics = useFetchData('https://api.elrond.com/economics', myAddress)

    // temporaire mais pour afficher le herotag, on utilise pas l'api devnet
    const dataHerotag = useFetchData(`https://api.elrond.com/accounts/${myAddress}`, myAddress);

    const currenciesArray = dataTokens.apiData

    let herotag = "";
    let herotag_useful = ""


    if (!dataHerotag.serverError && myAddress !== "") {
        herotag = dataHerotag.apiData.username
        if (herotag !== undefined) {
            herotag_useful = herotag.split('.')
        }
    }

    return ( 
        <>
        <p className=" mx-4" >test address: <br/>
            <span className="font-bold text-xl">erd1qlnf8vnpxkj3wcf32zmw2krdkgqepc9gy9djvk5wd23maq8mzyqs26vss9</span>
        </p>
        <p className=" mx-4" >test address Louis: <br/>
            <span className="font-bold text-xl">erd1wlck2dncfrzj2cxm6rkzv0w9n97wxufp0tlvgklkjxtlvt3r667qrp0z4w</span>
        </p>
        <p className=" mx-4" >test address Loris: <br/>
            <span className="font-bold text-xl">erd1y45dahl58y2ksggxqd5p7ghnalrglchch0nzg4w6djwrk9guwy0sme7dul</span>
        </p>
        

        {/* le herotag marchera sur le mainnet*/}
        <p className="mx-6 my-2 font-bold text-3xl">Hello {herotag_useful[0]} ! 👋</p> 

        {/* Portfolio Value & Impermanent Loss*/}
            <div className=" my-3 mx-4">
                <div className="flex flex-row gap-2 justify-items-center w-full">
                    <div className="flex-auto bg-gradient-to-br from-blue-500 to-green-500 rounded-xl mb-3 shadow-xl">
                        <h4 className="px-5 py-2 text-xl text-white font-semibold">Portfolio Value  $ {myAddress !== "" && !dataAddress.serverError? // if myAddress empty we take precaution for displaying balance
                                                              numeral((dataAddress.apiData.balance / 1e18)*(dataEconomics.apiData.price)).format('0.00a'): // multiply egold amount with price
                                                               <span>___</span> }
                        </h4> 
                        <p className="px-5 py-2 text-xl text-white font-semibold">{myAddress !== "" && !dataAddress.serverError? // if myAddress empty we take precaution for displaying balance
                                                              numeral(dataAddress.apiData.balance / 1e18).format('0.00a'): // multiply egold amount with price
                                                               <span>___</span> } xEGLD</p>

                        
                    </div>
                    <div className="flex-auto bg-gradient-to-br from-red-500 to-pink-500  rounded-xl mb-3 shadow-xl">
                        <h4 className="px-5 py-2 text-xl text-white font-semibold">Impermanent Loss: ___ $</h4>
                    </div>
                </div>
            </div>

        {/* Recap currencies */}

        <div>
            {myAddress !== "" && currenciesArray !== null?
            <h1 className="mx-6 font-bold text-xl">
                Your tokens
            </h1> : ""}
        </div>
            
        <div className="mx-4 my-1">
        <ul className="flex flex-row gap-2 flex-wrap justify-items-center w-full">
            {myAddress !== "" && currenciesArray !== null?
            currenciesArray.map(item =>
                <li key={JSON.stringify(item["identifier"])} 
                    className="flex-auto">
                    {/* {JSON.stringify(item)} */}
                    <Currency item={item}/>
                </li>
                ): "" }
        </ul>
        </div>


        </>
     );
}
 
export default MainDashboard;