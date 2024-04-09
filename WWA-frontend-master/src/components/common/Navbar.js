// /components/common/Navbar.js
/**
 * @module Navbar
 * @description This javascript file is used to show functionality of Navigation Bar, used in WWA app
 * @prop Navbar
 * @param {Object} params
 */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>

      <div className='row bg-black m-0 p-3'>
        <div className='col-6'>
          <Link className='btn btn-warning font-weight-bold ' to="/">Home</Link>
        </div>
        <div className='col-6'>
          <Link className='btn btn-warning font-weight-bold' to="/admin">Admin</Link>
        </div>
      </div>


    </>
  );
};

export default Navbar;
