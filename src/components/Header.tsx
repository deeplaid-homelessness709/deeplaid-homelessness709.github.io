import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Film, Menu, X } from 'lucide-react'
const links = [
  { to: '/', label: '首页' },
  { to: '/about', label: '简历' },
  { to: '/contact', label: '联系' },
]
export default function Header() {
  const loc = useLocation()
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#faf5eb]/90 backdrop-blur-2xl border-b border-[#e8dcc8] shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#e8a838] to-[#d4952a] flex items-center justify-center shadow-lg shadow-[#e8a838]/20 group-hover:shadow-[#e8a838]/40 transition-all group-hover:scale-110">
              <Film className="w-[18px] h-[18px] text-white" />
            </div>
            <span className="text-[#3a2a1a] font-black text-lg tracking-tight">狄婷婷</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.to} to={l.to}
                className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                  loc.pathname === l.to ? 'text-[#e8a838] bg-[#fef3d6]' : 'text-[#8a7a6a] hover:text-[#3a2a1a] hover:bg-[#f0e8d8]'
                }`}>
                {l.label}
              </Link>
            ))}
          </nav>
          <button className="md:hidden text-[#3a2a1a] p-2" onClick={() => setMenu(!menu)}>
            {menu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menu && <nav className="md:hidden pb-5">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setMenu(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-semibold mb-1 ${loc.pathname === l.to ? 'text-[#e8a838] bg-[#fef3d6]' : 'text-[#8a7a6a]'}`}>
              {l.label}
            </Link>
          ))}
        </nav>}
      </div>
    </header>
  )
}
