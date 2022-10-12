import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Iphone13 from './pages/Iphone13';
import Iphone13Buy from './pages/Iphone13Buy';
import ManageID from './pages/ManageID';
import SearchResult from './pages/SearchResult';
import NotFound from './pages/NotFound'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/iphone13' element={<Iphone13 />}/>
                <Route path='/buy-iphone13' element={<Iphone13Buy />}/>
                <Route path='/manage-id' element={<ManageID />}/>
                <Route path='/search*' element={<SearchResult />}/>

                <Route path='/*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

