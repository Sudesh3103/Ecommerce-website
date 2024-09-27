import { BrowserRouter,Route,Routes } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import Shop from "./Shop"
import Checkout from "./Checkout"
import Footer from "./Footer"
import Checkout2 from "./Checkout2"
import Buy from "./Buy"
import Thanks from "./Thanks"

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Nav/>
     

     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/checkout2" element={<Checkout2/>}></Route>
        <Route path="/buy" element={<Buy/>}></Route>
        <Route path="/thanks" element={<Thanks/>}></Route>
     </Routes>

     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
