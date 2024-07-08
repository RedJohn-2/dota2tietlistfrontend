import './App.css'
import { Input, 

Textarea } from '@chakra-ui/react'
import Menubar from './components/MenuBar'

export default function App() {
  return (
    <div className='bg-stone-500 min-w-full min-h-full flex flex-col justify-between'>
      <Menubar/>
      <div></div>
    </div>
  )
}

