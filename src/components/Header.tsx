'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/education', label: 'academics' },
    { href: '/books', label: 'reading' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-100 pt-6">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-60">
        <div className="flex h-16 items-center justify-between flex-wrap gap-2">
          <Link 
            href="/" 
            className="text-2xl sm:text-3xl font-bold hover:text-gray-700 transition-colors"
          >
            Ishaan Sinha
          </Link>
          <div className="flex items-center space-x-1 flex-wrap">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href}>
                  <Button 
                    variant="ghost" 
                    size="default"
                    className={`text-gray-500 ${isActive ? 'font-bold text-gray-700' : ''}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

