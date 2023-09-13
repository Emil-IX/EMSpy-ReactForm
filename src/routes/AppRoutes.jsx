import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Welcome } from '../pages/Welcome'
import { EMSpyFrom } from '../pages/EMSpyFrom'
import { LoginForm } from '../pages/LoginForm'
import { RegisterFrom } from '../pages/RegisterFrom'

export const AppRoutes = () => {
  return (
    <Routes>

        <Route path='/*' element={ <Welcome/>} /> 

        <Route path='/form' element={ <EMSpyFrom />} /> 

        <Route path='/loginform' element={ <LoginForm />} />

        <Route path='/registerform' element={ <RegisterFrom />} /> 
   
    </Routes>
  )
}

