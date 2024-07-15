import './App.css'
import Menubar from './components/MenuBar'
import WhiteSpace from './components/WhiteSpace'
import Patch from './components/Patch'
import TierLists from './components/TierLists'
import { tierLists } from './services/tierlists'
import TierList from './components/TierList'

export default function App() {
  return (
    <div className='bg-zinc-200 min-w-full min-h-full h-auto flex flex-col flex-1 justify-start items-center'>
      <Menubar/>
      <div className='min-w-full h-1/5 min-h-52 my-4'></div>
      <WhiteSpace>
        <TierList></TierList>
      </WhiteSpace>
    </div>
  )
}

