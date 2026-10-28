
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LikeButton from './components/LikeButton'
import LiveInput from './components/LiveInput'
import Page from './components/Page'
import Header from './layouts/Header'
import ProductList from './pages/ProductList'
import Notice from './pages/Notice'

function App() {


  return (
    <>
      <section id="center">
        {/* <LikeButton /> */}
        {/* <LiveInput /> */}
        {/* <Page /> */}
        <BrowserRouter>
          <Header />

          <div className='contents'>
            <Routes>
              <Route path='/' element={<ProductList />} />
              <Route path='/notice' element={<Notice />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
