import github_photo from '../assets/images/github.svg';

const TeamCard = ({ name, job, picture, experience }) => {
   return (
      <>
         <div className=" bg-white flex flex-col gap-1 w-auto h-auto justify-items-center ring-2 ring-white rounded shadow-xl mb-8">
            <div className="flex justify-center mb-2 ">
               <img
                  src={picture}
                  alt="default picture"
                  className="mt-4 w-24 h-24 mx-6 ring-1 ring-white shadow-xl rounded-full"
               />
            </div>
            <div className="flex justify-center text-gray-400 mx-6 mt-2 text-xs font-light">
               <p>{job}</p>
            </div>
            <div className="flex justify-center mx-6">
               <p className="m-auto text-2xl text-semibold text-gray-800 font-medium">
                  {name}
               </p>
            </div>
            {/* on crée une border de taille voulue comme ça */}
            <div className="flex justify-center mx-6">
               <p className="m-auto w-auto border-b-2 border-gray-300 text-white text-xs">
                  aaaaaa
               </p>
            </div>
            <div className="flex justify-center mx-6">
               <p className="m-auto mt-2 w-64 p-2 text-sm text-center text-gray-800 font-light">
                  {experience}
               </p>
            </div>
            <div className="flex justify-center mx-6 mt-1 mb-4">
               <a href="https://github.com/quentinpuzenat" target="_blank">
                  <img
                     src={github_photo}
                     alt="github picture"
                     className="w-5 h-5"
                  />
               </a>
            </div>
         </div>
      </>
   );
};

export default TeamCard;
