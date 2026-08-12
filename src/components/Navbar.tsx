'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'

export default function Navbar({ session }: { session: any }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentSession, setCurrentSession] = useState(session)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  async function handleSignOut() {
    await authClient.signOut()
    setCurrentSession(null)
    router.push('/')
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover="hover">
            <Link href="/" className="flex items-center gap-2 logo">
              <motion.div
                variants={{ hover: { rotate: 90, scale: 0.9 } }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <Image
                  src="/slogo.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  priority
                  className="h-7 w-auto object-contain"
                />
              </motion.div>
              <motion.span className="text-white font-semibold text-2xl">
                wish-light
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition duration-300 transform ${
                  pathname === href
                    ? 'text-white scale-105'
                    : 'text-gray-400 hover:text-white hover:-translate-y-0.5'
                }`}
              >
                {label}
              </Link>
            ))}

            {currentSession ? (
              <Button
                onClick={handleSignOut}
                className="bg-red-600 hover:bg-red-700 text-white transition"
              >
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white transition">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`transition ${
                    pathname === href
                      ? 'text-blue-400'
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  {label}
                </Link>
              ))}

              {currentSession ? (
                <Button
                  onClick={() => {
                    handleSignOut()
                    setIsOpen(false)
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white transition"
                >
                  Logout
                </Button>
              ) : (
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white transition">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
