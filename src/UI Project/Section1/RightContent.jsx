import React from 'react'
import RightCard from './RightCard'

export default function RightContent() {
  return (
    <div className='h-full w-2/3 border border-red-100 p-6 flex gap-10 flex-nowrap overflow-x-auto'>
      <RightCard/>
      <RightCard/>
      <RightCard/>
      <RightCard/>
      <RightCard/>
      <RightCard/>
      <RightCard/>
    </div>
  )
}
