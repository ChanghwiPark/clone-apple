import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Iphone13 from './pages/Iphone13';
import NotFound from './pages/NotFound'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/iphone13' element={<Iphone13 />}/>
                
                <Route path='/*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

