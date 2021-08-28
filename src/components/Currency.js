import numeral from "numeral";

const Currency = ({item}) => {

    // on split le "identifier" avec le "-"
    const usefulIdentifier = item["identifier"].split('-')

    return ( 
        <>
        <div className="flex flex-row justify-between bg-gradient-to-br from-black to-black hover:to-blue-600 rounded-xl ">
            <div className="flex flex-col  p-4 shadow-2xl ">
                <div className="flex-auto text-lg font-semibold text-white">
                    {item["name"]}
                </div>
                <span className="text-white">{numeral(item["balance"] / 1e18).format('0.0000a')} {usefulIdentifier[0]}</span>
            
            </div>
            <div className="text-white flex justify-end">
                <div className=" mx-8 flex-1 p-4 text-xl font-semibold">$ 1.32k</div>
            </div>
        </div>
        {/* Ajouter le prix que représente les tokens */}
        </>
     );
}
 
export default Currency;