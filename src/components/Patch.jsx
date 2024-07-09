import {Button } from '@chakra-ui/react'

export default function Patch( {props} ) {
  return (
    <div className='flex justify-between'>
    <h1>
        {props.heroes.name}
    </h1>
    </div>
  )
}
