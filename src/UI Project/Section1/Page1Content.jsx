import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

export default function Page1Content() {
  return (
    <div className='flex gap-10 items-center h-[90vh] bg-gray-500 py-10 px-6 '>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}
