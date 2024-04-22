import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-md 
    max-w-screen-sm mr-auto ml-auto w-full font-inter'>{children}
        </div>
    
  )
}
