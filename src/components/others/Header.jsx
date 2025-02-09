import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <h1>Welcome to <br/> <div className="font-bold text-3xl"> EMS </div> </h1>
        <button className='underline text-red-300'>Log Out</button>
    </div>
  )
}

export default Header