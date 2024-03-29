import { Link } from "react-router-dom";


const Cetagori = ({list}) => {

    
        const {bookId,bookName,author,image,rating,tags,category}=list
    return (
        <div>
     <Link to={`/Listed/${bookId}`}>
     
            
     <div className=" border-2  w-[323px] ml-[88px] mt-24">
        <h1></h1>
            <div className="bg-slate-200 rounded-lg w-[320px] h-[210px] p-[23px] pl-16">
                <img  src={image} alt="" />
            </div>
            <div className="p-4">
                <div className="space-x-24 mb-4">
                    <button className="bg-slate-100 h-6 w-20 text-[#23BE0A] rounded-xl">Fiction</button>
                    <button className="bg-slate-100 h-6 w-20 text-[#23BE0A] rounded-xl">Romanec</button>
                </div>
                <h3 className="text-xl">{bookName}</h3>
                <p>By : {author}</p>
                <hr />
                <div className="flex space-x-40 ">
                <h4>{category}</h4>
                <h4 className="flex items-center ">{rating} <img className="w-4 h-4 " src="https://i.ibb.co/JjmLL46/Vector.png" alt="" /></h4>
                </div>

            </div>
            </div>
     
     </Link>
            
        </div>
    );
};

export default Cetagori;