import { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { SlWallet } from 'react-icons/sl';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';

export default function Home({ setActiveIcon,activeIcon }) {

  function handleClick(icon){
    setActiveIcon(icon);
  };

  return (
    <div className="bg-[#002D62] flex justify-between items-center p-3 mt-2">
      <div 
        className="flex flex-col items-center" 
        onClick={() => handleClick('home')}
      >
        <IoHomeOutline 
          className={`w-6 h-6 ${activeIcon === 'home' ? 'text-yellow-500' : 'text-white'}`} 
        />
        <span className={`text-sm ${activeIcon === 'home' ? 'text-yellow-500' : 'text-white'}`}>
          Home
        </span>
      </div>

      <div 
        className="flex flex-col items-center" 
        onClick={() => handleClick('shop')}
      >
        <MdOutlineShoppingBag 
          className={`w-6 h-6 ${activeIcon === 'shop' ? 'text-yellow-500' : 'text-white'}`} 
        />
        <span className={`text-sm ${activeIcon === 'shop' ? 'text-yellow-500' : 'text-white'}`}>
          Shop
        </span>
      </div>

      <div 
        className="flex flex-col items-center" 
        onClick={() => handleClick('wallet')}
      >
        <SlWallet 
          className={`w-6 h-6 ${activeIcon === 'wallet' ? 'text-yellow-500' : 'text-white'}`} 
        />
        <span className={`text-sm ${activeIcon === 'wallet' ? 'text-yellow-500' : 'text-white'}`}>
          Wallet
        </span>
      </div>

      <div 
        className="flex flex-col items-center" 
        onClick={() => handleClick('cart')}
      >
        <MdOutlineShoppingCart 
          className={`w-6 h-6 ${activeIcon === 'cart' ? 'text-yellow-500' : 'text-white'}`} 
        />
        <span className={`text-sm ${activeIcon === 'cart' ? 'text-yellow-500' : 'text-white'}`}>
          Cart
        </span>
      </div>

      <div 
        className="flex flex-col items-center" 
        onClick={() => handleClick('profile')}
      >
        <CiUser 
          className={`w-6 h-6 ${activeIcon === 'profile' ? 'text-yellow-500' : 'text-white'}`} 
        />
        <span className={`text-sm ${activeIcon === 'profile' ? 'text-yellow-500' : 'text-white'}`}>
          Profile
        </span>
      </div>
    </div>
  );
}
