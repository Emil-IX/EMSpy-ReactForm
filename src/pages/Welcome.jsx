import { Link, NavLink } from 'react-router-dom';

export const Welcome = () => {
  //Welcome Page.
  return (
    <>
        <h1 className='title animate__animated animate__fadeInDown'>¡Welcome!</h1>

        <div className='welcome welcome2 border border-5 animate__animated animate__fadeIn '>
            <p>Welcome to the EMPTY projects, this is part of many projects that i will be building over time, in this case it will be a React form that can be used in different type of projects. </p>
            
            <p>From EMSpy</p>

            <Link 
            className="btn  btn-outline-light btn2" 
            to='/loginform'>Get start</Link>
            
        </div>
    </>
  )
}
