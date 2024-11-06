"use client"
import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'
const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center gap-8">
        <Link href="/" className="hover:text-gray-400 transition duration-200">
          Home
        </Link>
        <Link href="/products" className="hover:text-gray-400 transition duration-200">
          Shop
        </Link>
        <Link href="/about" className="hover:text-gray-400 transition duration-200">
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
