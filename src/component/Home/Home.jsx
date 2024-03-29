import Banar from "../Banar/Banar";
import CatagoriList from "../CatagoriList/CatagoriList";

const Home = () => {
  return (
    <div>
        <Banar></Banar>
       
      <div className="md:flex items-center space-x-80 mt-10 ml-[88px] bg-slate-300 mr-[85px] p-4 rounded-lg">
        
            <div className="p-16">
                <h2 className="text-5xl w-[441px]">Books to freshen up your bookshelf</h2>
                <button className="bg-green-500 h-12 w-40 rounded-md text-white text-xl mt-6">View The List</button>
            </div>
            <div>
                <img src="https://i.ibb.co/khnHTKm/pngwing-1-1.png" alt="" />
            </div>
      </div> 
      <CatagoriList></CatagoriList>
    </div>
  );
};

export default Home;
