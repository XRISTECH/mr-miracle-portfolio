"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="shadow-md relative z-20 text-white">
        <style dangerouslySetInnerHTML={{
            __html: `body{overflow:${isMenuOpen ? 'hidden' : 'auto'}}`
        }}></style>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            &lt;MChris/&gt;
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden "
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 fixed bg-gradient-to-br from-gray-900/20 backdrop-blur-lg to-gray-800/20  bottom-0 left-0 h-[calc(100vh-4rem)] w-full z-30 p-4">
            <div className="flex flex-col space-y-4">
              <NavLink href="#about" onClick={toggleMenu}>About</NavLink>
              <NavLink href="#projects" onClick={toggleMenu}>Projects</NavLink>
              <NavLink href="#contact" onClick={toggleMenu}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className="text-neutral-200 hover:text-white hover:underline transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}