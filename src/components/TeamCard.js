const TeamCard = ({name, job, picture}) => {
    return ( 
        <>
        <div className="flex flex-col gap-1 bg-gray-500">
            <img src={picture} alt="default picture" className="w-32 h-32 rounded-3xl"/>
            <h1>{name}</h1>
            <p>{job}</p>
            
        </div>
        </>
     );
}
 
export default TeamCard;