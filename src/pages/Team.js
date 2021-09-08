import TeamCard from '../components/TeamCard';
import defaultPicture from '../assets/images/tanjiro_pp.png';
import { useContext } from 'react';
import { AddressContext } from '../context';

const Team = () => {
   const { input } = useContext(AddressContext);
   console.log(`Value input:${input}`);

   return (
      <>
         <div className="h-full bg-gray-50 bg-opacity-75 pt-20">
            <div>{input !== undefined ? input : 'no value provided'}</div>
            <div className="flex justify-center">
               <h1 className="mt-4 text-gray-900 font-semibold text-2xl">
                  Our Team
               </h1>
            </div>
            <div className="flex justify-center ">
               <div className="w-full h-full mt-4 flex flex-wrap gap-8 justify-center">
                  <TeamCard
                     name="Quentin Puzenat"
                     job="FRONT-END WEB DEVELOPER"
                     picture={defaultPicture}
                     experience="French engineering student in Mathematics and Applied Statistics. Blockchain enthusiast and self-taught front-end web developer."
                  />
                  <TeamCard
                     name="Loïc Thiriet"
                     job="FRONT-END WEB DEVELOPER"
                     picture={defaultPicture}
                     experience="French engineering student in data science, passionated by Elrond blockchain."
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Team;
