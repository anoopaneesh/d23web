import { createContext, useContext,useState } from "react";


const NavContext = createContext({})


const NavProvider = ({children}) => {

    const [ currentPage,setCurrentPage] = useState('home')

    const changeCurrentPage = (page) => {
        setCurrentPage(page)
    }

    return <NavContext.Provider value={{currentPage,changeCurrentPage}}>
        {children}
    </NavContext.Provider>
}
export default NavProvider
export const useNavContext = () => useContext(NavContext)