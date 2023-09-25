import './App.css'
import Header from './components/Header'
import Product from './pages/Product'
import img from './assets/img.avif'

function App() {

  return (
    <>
   <Header title='WEBROAD' />
    <Product title='Complete Web Development' description='Learn React with Fullstack' images={[{ src: img, alt: 'Thumbnail'}]} price={12.99} />
    </>
  )
}

export default App
