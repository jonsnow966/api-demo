import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateData from "../../../pages/UpdateData/UpdateData";
import GetUserData from "../../../pages/GetUserData/GetUserData";
import CreateUserData from "../../../pages/CreateUserData/CreateUserData";
import Header from "../Header";
import { useTheme } from "../../../context/ThemeProvider/useTheme";

 export default function AppContent(){
  const { dark } = useTheme();
  return(
    <BrowserRouter>
      <div className='w-full min-h-screen
      flex flex-col justify-start items-center'
      style={{background: dark ? "#42454a" : "#d0d5db", color: dark? "white" : "black",}}>
        <header className='w-full h-40
        fixed top-0'>
            <Header />
        </header> 
        
        <main className='w-full h-fit
        flex flex-col justify-start items-center mt-40 pt-10 overflow-y-auto mb-10'>
          <Routes>
            <Route path='/' element={<CreateUserData />}/>
            <Route path='/listData' element={<GetUserData />}/>
            <Route path='/update' element={<UpdateData />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
    
 }