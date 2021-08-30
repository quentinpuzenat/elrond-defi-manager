import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
        <nav>
            <div className="bg-gray-800 flex flex-row text-white h-16 justify-center w-full shadow-xl fixed">
                <div className="flex flex-row items-center gap-3 h-full">
                    <Link className="flex mx-4 h-full border-b-2 border-gray-800 hover:border-white" to="/">
                        <p className="my-auto">Home</p>
                    </Link>
                    <Link className="flex mx-4 h-full border-b-2 border-gray-800 hover:border-white" to="/team">
                    <p className="my-auto">Team</p>
                    </Link>
                </div>
            </div>
        </nav>
        </>
     );
}
 
export default Header;