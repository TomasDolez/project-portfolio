import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <svg className="navbar__logo-mark" width="22" height="22" viewBox="0 0 24 24" fill="none">
            {/* Square frame */}
            <rect x="1.5" y="1.5" width="21" height="21" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
            {/* T — top bar + diagonal stem going down-left */}
            <path d="M6.5 6h7" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 6L5.5 18" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
            {/* D — large arc from top of T stem, sweeping right and down */}
            <path d="M10 6C17 6 19 11 19 13c0 3-3 5-6.5 5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* D vertical closing — connects to bottom of T */}
            <path d="M5.5 18h7" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Tom&#225;&#353; Dole&#382;al</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar__cta">Get in Touch</a>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
