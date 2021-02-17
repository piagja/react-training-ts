import React from 'react'
import Routes from './routes'

import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './style/global'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App