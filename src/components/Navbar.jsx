import React from 'react'
import { getAuth } from 'firebase/auth'
import { auth } from '../Firebase'
import { useNavigate,Link } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const logout = () => {
    auth.signOut();
    navigate('/')
  }

  return (
    <>
      <div className="nav d-flex px-3 align-items-center fixed-top mb-5">
        <div className="user_Photo left d-flex align-items-center gap-2 ">
          <img src={auth.currentUser.photoURL} alt="" style={{
            width: '50px',
            borderRadius: '100%'
          }} />
          <h6>{auth.currentUser.displayName}</h6>
        </div>
        <form class="d-flex search-box">
      <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
      <Link to={'/blogs'} class="btn btn-outline-success" type="submit">Search</Link>
    </form>
        {/* Home & Menu */}
        <div className="center d-flex justify-content-end">
          <ul className=' ul1 d-flex gap-4  pe-1 mt-2'>
            <li>
                <Link to={'/blogs'}type="button"  class="btn" aria-expanded="false" id='btn'>Home</Link>
            </li>
            <li>
              <div class="btn-group dropup">
                <button id='btn'  type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </button>
                <ul className="dropdown-menu rounded-0">
                  <li id='menu'> <Link to={'/snacks'} style={{textDecoration:"none" ,color:"black"}}>Snacks</Link></li>
                  <li id='menu'> <Link to={'/women'}style={{textDecoration:"none" ,color:"black"}}>Women Wear</Link></li>
                  <li id='menu'> <Link to={'/men'}style={{textDecoration:"none" ,color:"black"}}>Men's Wear</Link></li>
                  <li id='menu'> <Link to={'/kids'}style={{textDecoration:"none" ,color:"black"}}>Kid's Wear</Link></li>
                  <li ><button onClick={logout} className='bg-danger rounded-1 py-2'>logout</button></li>
                </ul>
              </div>
            </li>
            <li><button  id='btn' type="button" class="btn" aria-expanded="false"> AboutUs </button></li>
            <li><button  id='btn' type="button" class="btn" aria-expanded="false"> ContactUs </button></li>
            
            </ul >
            {/* icon dropdown */}
            <ul className='ul2'>
            <li className='drop-down-icon'>
              <div class="btn-group dropup">
                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </button>
                <ul className="dropdown-menu rounded-0">
                  <li id='/'>Home</li>
                  <li id='women'>Women</li>
                  <li id='men'>Men</li>
                  <li id='kids'>Kids</li>
                  <li id='snacks'>snacks</li>
                  <li id=''>Phone</li>
                  <li ><button onClick={logout} className='bg-danger rounded-1'>logout</button></li>
                </ul>
              </div>
            </li>
            </ul> 
        </div>
      </div >
    </>
  )
}

export default Navbar