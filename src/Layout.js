import React from 'react'
import { Outlet } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/NaviationBar/Navbar';
import Footer from './Components/Footer/Footer'

function Layout() {
    return (
        <div className="App bg-orange-400 max-w-[1920px] w-full mx-auto">
            <Contact />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
  )
}

export default Layout