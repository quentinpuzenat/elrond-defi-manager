import TeamCard from "../components/TeamCard";
import defaultPicture from "../assets/images/tanjiro_pp.png"
const Team = () => {

    return ( 
        <>
        <h1>Our Team</h1>
        <div className="bg-blue-500 w-full h-full">
            <TeamCard name="Quentin" job="Developer" picture={defaultPicture} />
        </div>
        </>
     );
}
 
export default Team;