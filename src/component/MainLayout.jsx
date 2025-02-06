import { Navbar } from "./navbar"


export const MainLayout = ({children}) => {
  return (
    <div className='flex  flex-col  min-h-s contain-content'>
    <Navbar />
  <main>{children}</main>  
    </div>
  )
}
