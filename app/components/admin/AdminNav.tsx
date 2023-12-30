'use client'

import React from 'react'
import Wrapper from '../Wrapper'
import AdminNavItem from './AdminNavItem'
import Link from 'next/link'
import { MdDns, MdLibraryAdd } from 'react-icons/md'
import { usePathname } from 'next/navigation'

const AdminNav = () => {
    const pathname = usePathname()
  return (
    <div className='w-full shadow-sm top-20 border-b-[1px] pt-4'>
        <Wrapper>
            <div className='flex flex-row items-center justify-center gap-12'>
                <Link href="/admin">
                <AdminNavItem label='Manage Products' icon={MdDns} selected={pathname === "/admin"}/>
                </Link>
                <Link href="/admin/add-products">
                <AdminNavItem label='Add Products' icon={MdLibraryAdd} selected={pathname === "/admin/add-products"}/>
                </Link>
            </div>
        </Wrapper>
    </div>
  )
}

export default AdminNav