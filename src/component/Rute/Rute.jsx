import React from 'react';
import { Outlet } from 'react-router-dom';
import Manu from '../Manu/Manu';


const Rute = () => {
  return (
    <div>
         <Manu></Manu>
        <Outlet></Outlet>
       
    </div>
  );
};

export default Rute;
