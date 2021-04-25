import React, {useState, useContext, createContext} from 'react'

// 전역 속성 Context
export const Context = createContext()

export function AppProvider({children}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    // 생성된Context명.Provider
    <Context.Provider 
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </Context.Provider>
  )
}

// custom hook
export const GlobalContext = () => {
  return useContext(Context);
}
