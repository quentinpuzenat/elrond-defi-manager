import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
        <nav>
            <Link className="m-2" to="/">Home</Link>
            <Link className="m-2" to="/team">Team</Link>
        </nav>
        </>
     );
}
 
export default Header;