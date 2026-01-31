import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

export default function Page1Content(props) {
  return (
    <div className='flex gap-10 items-center h-[90vh] py-10 px-10'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}
