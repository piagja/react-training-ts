import React from 'react'
import Routes from './routes'
import GlobalStyle from './style/global'

import 'react-toastify/dist/ReactToastify.css' 
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App