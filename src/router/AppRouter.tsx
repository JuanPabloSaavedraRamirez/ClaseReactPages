import AboutPage from "../pages/AboutPage"
import ContentPage from "../pages/ContentPage"
import HomePages from "../pages/HomePages"
import Navbar from "./Navbar"
import {Routes, Route} from 'react-router-dom'


const AppRouter = () => {
  return <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/home" element={<HomePages/>}/>
        <Route path="/content" element={<ContentPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
    </Routes>
  </>
}

export default AppRouter
