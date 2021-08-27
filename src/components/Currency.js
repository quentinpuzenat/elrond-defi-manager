import numeral from "numeral";

const Currency = ({item}) => {

    // on split le "identifier" avec le "-"
    const usefulIdentifier = item["identifier"].split('-')

    return ( 
        <>
        <div className="flex flex-col bg-gradient-to-br from-black to-black hover:to-blue-600 rounded-xl p-4 shadow-2xl text-white">
            <div className="flex-auto text-lg font-semibold">
                {item["name"]}
            </div>
            <span>{numeral(item["balance"] / 1e18).format('0.0000a')} {usefulIdentifier[0]}</span>
            
        </div>
        {/* y a la balance a la fin du token, pense a diviser par 1e18 !!! */}
        </>
     );
}
 
export default Currency;