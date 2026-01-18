"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Kontakt", href: "#kontakt" },
  { name: "Brandschutz", href: "#brandschutz", color: "text-innung-red" },
  { name: "Sicherheit", href: "#sicherheit", color: "text-innung-yellow" },
  { name: "Beratung", href: "#beratung", color: "text-innung-green" },
  { name: "Umwelt", href: "#umwelt", color: "text-innung-blue" },
  { name: "Team", href: "#team" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <img
              src="images/koelbelkehr.png"
              alt="Kölbel Kehr Logo"
              className="h-12 md:h-14 w-auto invert"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "transition-colors text-sm font-medium hover:opacity-80",
                  isScrolled ? "text-primary-foreground" : "text-primary-foreground",
                  item.color && isScrolled && item.color,
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 border-t border-primary-foreground/10" : "max-h-0",
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2 text-left font-medium",
                item.color,
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
