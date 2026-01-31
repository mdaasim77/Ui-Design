import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

export default function Section1(props) {
  console.log(props)
  return (
    <div className='h-[100vh] w-[100vw]'>
        <Navbar/>
        <Page1Content users={props.users}/>
    </div>
  )
}
