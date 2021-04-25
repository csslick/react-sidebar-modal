import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { social, links } from './data'
import { Context, GlobalContext } from './context'

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = GlobalContext();
  return (
    <aside 
      className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
    >
      <div className="sidebar-header">
        <h2>CSSLICK</h2>
        <button 
          className="close-btn"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {
          links.map(link => {
            return(
              <li key={link.id}>
                <span>{link.icon}</span>
                <a href={link.url}>{link.text}</a>
              </li>
            )
          })
        }
      </ul>
      <ul className="sns-icons">
        {
          social.map(s => {
            return (
              <li key={s.id}>
                <a href={s.url}>{s.icon}</a>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}
