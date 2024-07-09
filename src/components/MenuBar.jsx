import {Button } from '@chakra-ui/react'
import MenuItem from './MenuItem'
import Avatar from './Avatar'

export default function Menubar() {
  return (
    <div className='bg-stone-600 min-w-full h-1/4 flex p-10 justify-between items-center border-b-8 border-black'>
      <div className='flex my-10 mr-24 items-center'>
        <div className='bg-lime-600 h-20 w-20 border-black border-2 rounded-xl -rotate-45  object-center translate-y-5'>
          <h1 className='text-6xl text-center object-center text-white font-sans stroke-purple-900 py-1 select-none'>F</h1>
        </div>
        <div className='bg-red-600 h-20 w-20 border-black border-2 rounded-xl rotate-12  object-center -translate-x-8 -translate-y-7'>
          <h1 className='text-6xl text-center object-center text-white font-sans stroke-purple-900 py-1 select-none'>S</h1>
        </div>
        <div className='bg-amber-400 h-20 w-20 border-black border-2 rounded-xl rotate-45  object-center -translate-x-24 translate-y-9'>
          <h1 className='text-6xl text-center object-center text-white font-sans stroke-purple-900 py-1 select-none'>B</h1>
        </div>
        <h1 className='text-5xl -translate-x-10  font-mono text-center mr-25 select-none'>Dota2 
          <br />
          TierList</h1>
        </div>
        <div className='flex justify-end items-center'>
          <MenuItem>Vouting</MenuItem>
          <MenuItem>TierLists</MenuItem>
          <MenuItem>Support</MenuItem>
          <Avatar/>
        </div>
        
    </div>
  )
}