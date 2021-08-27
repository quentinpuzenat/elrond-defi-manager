const Currency = ({name}) => {
    return ( 
        <>
        <div className="bg-gradient-to-br from-indigo-600 to-blue-400 rounded-xl text-white">
        {name}
        </div>
        {/* y a la balance a la fin du token, pense a diviser par 1e18 !!! */}
        </>
     );
}
 
export default Currency;