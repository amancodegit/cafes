import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllDishes from './pages/AllDishes';
import AllGallery from './pages/AllGallery';
import AllTestimonials from './pages/AllTestimonials';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<AllDishes />} />
        <Route path="/gallery" element={<AllGallery />} />
        <Route path="/testimonials" element={<AllTestimonials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
