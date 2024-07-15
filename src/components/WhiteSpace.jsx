import {Button } from '@chakra-ui/react'

export default function WhiteSpace( {children} ) {
  return (
    <div className='bg-slate-200 border-4 border-black rounded-3xl w-4/5 h-auto my-10 p-8 flex justify-center'>
    {children}  
    </div>
  )
}
