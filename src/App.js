import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Header } from './components'
import { Home, BookInfo } from './pages'

function App() {
  return (
    <div className='main'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/bookinfo' exact element={<BookInfo />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
