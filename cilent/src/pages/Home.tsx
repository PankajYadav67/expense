import Sidebar from "../components/Sidebar.tsx/Sidebar";
import HomeRight from "./HomeRight";



const Home: React.FC = () => {

  return (
    <div className="bg-white font-[SF-Pro] mt-[55px] " >

      {/* left */}
      <div className="sm:grid sm:grid-cols-12 w-[1360px]">
        <div className="sm:col-span-2">
          <Sidebar />
        </div>


        {/* right */}
        <div className="sm:col-span-10 justify-center sm:text-3xl sm:mx-5 sm:ml-12  sm:px-6 sm:space-y-6 text-xl  rounded-md ">
          <HomeRight />
  

        </div>
      </div>

    </div>
  );
};

export default Home;