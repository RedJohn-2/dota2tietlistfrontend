import {Button } from '@chakra-ui/react'

export default function Menubar() {
  return (
    <div className='bg-stone-600 min-w-full h-1/4 flex p-10 justify-between'>
      <div className='flex my-10'>
        <div className='bg-lime-600 h-20 w-20 border-black border-2 rounded-xl -rotate-45  object-center'>
          <h1 className='text-6xl text-center object-center text-white font-sans stroke-purple-900 py-1 select-none'>F</h1>
        </div>
        <div className='bg-red-600 h-20 w-20 border-black border-2 rounded-xl rotate-12  object-center -translate-x-8 -translate-y-12'>
          <h1 className='text-6xl text-center object-center text-white font-sans stroke-purple-900 py-1 select-none'>S</h1>
        </div>
        <div className='bg-amber-400 h-20 w-20 border-black border-2 rounded-xl rotate-45  object-center -translate-x-24 translate-y-4'>
          <h1 className='text-6xl text-center object-center text-white font-sans stroke-purple-900 py-1 select-none'>B</h1>
        </div>
        <h1 className='text-4xl -translate-x-10'>Dota2TierList</h1>
        </div>
        <div className='flex justify-end'>
        <Button className='mx-8'>TierLists</Button>
        <Button className='mx-8'>TierLists</Button>
        <Button className='mx-8'>TierLists</Button>
        <Button className='mx-8'>TierLists</Button>
        </div>
        
    </div>
  )
}