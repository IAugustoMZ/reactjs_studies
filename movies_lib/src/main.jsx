import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import Home from './pages/Home/Home.jsx'
import { createRoot } from 'react-dom/client'
import Search from './pages/Search/Search.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails/MovieDetails.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

