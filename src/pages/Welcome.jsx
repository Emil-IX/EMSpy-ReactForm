import { Link, NavLink } from 'react-router-dom';

export const Welcome = () => {
  return (
    <>
        <h1 className='title '>¡Welcome!</h1>

        <div className='welcome welcome2 border border-5'>
            <p>Welcome to the EMPTY projects, this is part of many projects that i will be building over time, in this case it will be a React form that can be used in different type of projects. </p>
            
            <p>From EMSpy</p>

            <Link 
            className="btn  btn-outline-light btn2" 
            to='/form'>Get start</Link>
            
        </div>
    </>
  )
}
