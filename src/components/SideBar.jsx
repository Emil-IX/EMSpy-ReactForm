import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideBar = () => {
  return (
      
        <div className='sidebar  col'>

          <h1 className='title--white ms-4 '>EMSpyForm</h1>

            <div className='list_path  d-flex flex-column ms-5 '>
              <NavLink 
              className={ ({isActive}) => `nav_links nav-link ${ isActive ? 'activeLink' : ''}` } 
              to='/' >
              Welcome
              <hr />
              </NavLink>

      
              <NavLink 
              className={ ({isActive}) => `nav_links nav-link ${ isActive ? 'activeLink' : ''}` } 
              to='/loginform' >
              Login Form 
              </NavLink>

              <NavLink 
              className={ ({isActive}) => `nav_links nav-link ${ isActive ? 'activeLink' : ''}` } 
              to='/registerform' >
              Register Form 
              </NavLink>

              <NavLink 
              className={ ({isActive}) => `nav_links nav-link ${ isActive ? 'activeLink' : ''}` } 
              to='/form' >
              Email Send
              </NavLink>
            </div>

        </div>
      
  )

}

