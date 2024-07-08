import {Button } from '@chakra-ui/react'

export default function MenuItem( {children} ) {
  return (
    <h1 className='text-3xl font-mono text-center mx-8 no-underline hover:underline hover:text-cyan-900'>{children}</h1>
  )
}