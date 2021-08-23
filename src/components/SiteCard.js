const SiteCard = ({ logo, name, token }) => {
    return ( 
        <>
        <div className="d-flex justify-content-center">
            <img src={ logo } alt="logo of the website" width="50" height="50" 
                        className='rounded-circle justify-content-start m-2 border border-white shadow-lg'/>
            <h3 className="m-3">{ name }</h3>
        </div>
        <h5 className="p-3 d-flex justify-content-center"> ___ { token } / ___ USD</h5>           
        </>
     );
}
 
export default SiteCard;