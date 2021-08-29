import TeamCard from "../components/TeamCard";
import defaultPicture from "../assets/images/tanjiro_pp.png"
const Team = () => {

    return ( 
        <>
        <div className="h-full bg-gray-50 bg-opacity-75 pt-20">
            <div className="flex justify-center">
                <h1 className="mt-4 text-gray-900 font-semibold text-2xl">Our Team</h1>
            </div>
            <div className="w-full h-full mt-4 flex flex-wrap gap-8 justify-center">
                <TeamCard name="Quentin Puzenat" job="FRONT-END WEB DEVELOPER" picture={defaultPicture} />
                <TeamCard name="Quentin Puzenat" job="FRONT-END WEB DEVELOPER" picture={defaultPicture} />
                <TeamCard name="Quentin Puzenat" job="FRONT-END WEB DEVELOPER" picture={defaultPicture} />
                <TeamCard name="Quentin Puzenat" job="FRONT-END WEB DEVELOPER" picture={defaultPicture} />
                <TeamCard name="Quentin Puzenat" job="FRONT-END WEB DEVELOPER" picture={defaultPicture} />
                <TeamCard name="Quentin Puzenat" job="FRONT-END WEB DEVELOPER" picture={defaultPicture} />
                <TeamCard name="Quentin Puzenat" job="FRONT-END WEB DEVELOPER" picture={defaultPicture} />
                <TeamCard name="Quentin Puzenat" job="FRONT-END WEB DEVELOPER" picture={defaultPicture} />
                <TeamCard name="Quentin Puzenat" job="FRONT-END WEB DEVELOPER" picture={defaultPicture} />
                <TeamCard name="Quentin Puzenat" job="FRONT-END WEB DEVELOPER" picture={defaultPicture} />
                
                
            </div>
        </div>
        </>
     );
}
 
export default Team;