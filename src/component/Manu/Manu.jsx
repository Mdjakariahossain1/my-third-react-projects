import { NavLink } from "react-router-dom"

const Manu = () => {

    const links = <>
     <li><NavLink to="/"activeclassName="active-link">Home</NavLink></li>
   
       <li><NavLink to="/List">Listed Books</NavLink></li>
       <li><NavLink to="/blog">Pages to Read</NavLink></li>
    </>

  return (
    <div className="navbar bg-base-100">
    <div className="ml-8">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className=" bg-green-500 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
        {links}
        </ul>
      </div>
      <a className="btn btn-ghost ml-8 text-2xl mr-72">Book Vibe</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {links}
      </ul>
    </div>
    
    <div className="ml-[340px]">
      <a className="btn bg-[#23BE0A]">Sign In</a>
    </div>
    <div className="ml-4">
      <a className="btn bg-[#59C6D2]">Sign Up</a>
    </div>
    
  </div>
  )
}

export default Manu;
