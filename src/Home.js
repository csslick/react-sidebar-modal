import React, {useContext} from 'react'
import { FaBars } from 'react-icons/fa'
import { Context, GlobalContext } from './context'

export default function Home() {
  const {openSidebar, openModal} = GlobalContext();
  
  return (
    <main>
      <button 
        className='sidebar-toggle'
        onClick={openSidebar}
      >
        <FaBars />
      </button>
      <button 
        className="btn"
        onClick={openModal}
      >show modal</button>
    </main>
  )
}
