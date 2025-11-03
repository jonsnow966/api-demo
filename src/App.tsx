import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './assets/components/Header/Header'
import CreateUserData from './assets/pages/CreateUserData/CreateUserData'
import GetUserData from './assets/pages/GetUserData/GetUserData'
import UpdateData from './assets/pages/UpdateData/UpdateData'


function App() {

  return (
    <BrowserRouter>
      <div className='w-full h-fit 
      flex flex-col justify-center items-center'>
        <header className='w-full h-fit
          fixed top-0'>
            <Header />
        </header> 
        
        <main className='w-full h-fit        
        flex flex-col justify-center items-center
        mt-35 p-20'>
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

export default App
