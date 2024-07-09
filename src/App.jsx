import './App.css'
import Menubar from './components/MenuBar'
import WhiteSpace from './components/WhiteSpace'
import Patch from './components/Patch'
import TierLists from './components/TierLists'
import { tierLists } from './services/tierlists'

export default function App() {
  return (
    <div className='bg-stone-500 min-w-full min-h-full h-auto flex flex-col justify-start items-center'>
      <Menubar/>
      <WhiteSpace>
        <TierLists tierLists = {tierLists}/>
      </WhiteSpace>
    </div>
  )
}

