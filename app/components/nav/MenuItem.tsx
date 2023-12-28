import React from 'react'

interface MenuProps {
    children: React.ReactNode
    onClick: () => void
}

const MenuItem = ({children, onClick}: MenuProps) => {
  return (
    <div onClick={onClick} className='px-4 py-3 hover:bg-neutral-100 transition'>
        {children}
    </div>
  )
}

export default MenuItem