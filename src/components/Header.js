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
                <div className="flex">
                <button type="submit" className="my-auto hover:shadow-xl bg-gradient-to-br from-blue-400 hover:from-indigo-600 to-blue-400 text-white p-2 rounded-xl">
                    Change Mode
                </button>
                </div>
            </div>
        </nav>
        </>
     );
}
 
export default Header;