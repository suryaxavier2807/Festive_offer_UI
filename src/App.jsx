import { useState } from 'react'
import Header from './components/header'
import Topbar from './components/topbar'
import Calender from './components/calender'
import Advertisement from './components/advertisement'
import Products from './components/products'
import Home from './components/home'
import Shop from './components/shopcomponent'
import Profile from './components/profile'
import Wallet from './components/wallet'
import Cart from './components/cart'

function App() {
  const [activeIcon, setActiveIcon] = useState(null);

  return (
    <div className='bg-rose-50 h-screen flex flex-col'>
      <Header/>
      <div className='bg-rose- ml-2 mr-2 flex-grow  ' >
      <Topbar/>

      {activeIcon === 'home' ? (
          <div>
            <Calender />
            <Advertisement />
            <h2 className="mt-2 font-medium">Featured Products</h2>
            <Products />
          </div>
        ) : activeIcon === 'shop' ? (
          <Shop />
        )
        : activeIcon === 'wallet' ? (
          <Wallet />
        ) : activeIcon === 'cart' ? (
          <Cart/>
        ) : activeIcon === 'profile' ? (
          <Profile />
        )  : null}
      </div>
      <Home setActiveIcon={setActiveIcon} activeIcon={activeIcon}  />


    </div>
    
  )
}

export default App
