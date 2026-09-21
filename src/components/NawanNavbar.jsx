import { useState, useEffect, useRef } from 'react'
import { FiPhone, FiMapPin } from 'react-icons/fi'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { GiWheat } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styles from './NawanNavbar.module.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Community', to: '/community' },
  { label: 'Heroes', to: '/heroes' },
  { label: 'Sports', to: '/sports' },
  { label: 'Events', to: '/events' },
  { label: 'Project', to: '/project' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  const closeMenu = () => setIsOpen(false)

  const linkClass = ({ isActive }) =>
    `${styles.nawanlink} ${isActive ? styles.isActive : ''}`

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Never hide near the very top of the page
      if (currentScrollY < 80) {
        setHidden(false)
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down -> hide
        setHidden(true)
        setIsOpen(false) // also close mobile menu if open
      } else {
        // Scrolling up -> show
        setHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`${styles.nawanHeader} ${hidden ? styles.hidden : ''}`}
    >

      {/* Top info strip */}
      <div className={styles.nawanTopbar}>
        <div className={`container ${styles.nawanTopbarInner}`}>

          <span className={`${styles.nawanTagline} d-none d-sm-inline`}>
            A village rooted in tradition
          </span>

          <div className={styles.nawanTopbarContact}>

            {/* Phone */}
            <a
              href="tel:+923000000000"
              className={styles.nawanTopbarLink}
            >
              <FiPhone aria-hidden="true" />

              <span className="d-none d-sm-inline">
                +92 300 0000000
              </span>
            </a>

            {/* Location */}
            <span className={styles.nawanTopbarLink}>
              <FiMapPin aria-hidden="true" />

              <span className="d-none d-sm-inline">
                Punjab, Pakistan
              </span>
            </span>

          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={styles.nawanNavbar}>

        <div className={`container ${styles.nawanNavbarInner}`}>

          {/* Brand */}
          <NavLink
            to="/"
            end
            className={styles.nawanBrand}
            onClick={closeMenu}
          >
            <span className={styles.nawanBrandMark}>
              <GiWheat aria-hidden="true" />
            </span>

            <span className={styles.nawanBrandText}>

              <span className={`${styles.nawanBrandName} font-display`}>
                Nawan
              </span>

              <span className={styles.nawanBrandSub}>
                Village
              </span>

            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className={`${styles.nawanlinks} d-none d-lg-flex`}>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`${styles.nawanToggle} d-lg-none`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>

        </div>

        {/* Mobile menu */}
        <div
          className={`${styles.nawanMobilePanel} ${
            isOpen ? styles.isopen : ''
          } d-lg-none`}
        >
          <div className={styles.nawanMobileLinks}>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

      </nav>

    </header>
  )
}

export default Navbar