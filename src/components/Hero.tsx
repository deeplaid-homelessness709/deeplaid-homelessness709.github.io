import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, ChevronDown } from 'lucide-react'

function scrollToPortfolio(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const parallaxRef = useRef<HTMLDivElement>(null)
  useEffect(() => setLoaded(true), [])
  useEffect(() => {
    const fn = () => { if (parallaxRef.current) parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.1)` }
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={parallaxRef} className="absolute inset-0 scale-110">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E8%83%8C%E6%99%AF.jpg')" }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf5eb]/60 via-[#faf5eb]/70 to-[#faf5eb]" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#e8a838]/10 rounded-full blur-[150px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#f5c25a]/8 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5d78a] to-transparent" />

      <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-float shadow-sm">
          <span className="w-2 h-2 bg-[#e8a838] rounded-full animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#e8a838] font-semibold">专业剪辑师</span>
        </div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#3a2a1a] leading-none tracking-tighter">狄婷婷</h1>
        <p className="text-base sm:text-lg text-[#8a7a6a] mb-14 max-w-md mx-auto mt-6">用镜头讲述故事，以剪辑创造感动</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#portfolio" onClick={scrollToPortfolio}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#e8a838] to-[#d4952a] text-white font-bold text-sm rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#e8a838]/40 hover:scale-105 active:scale-95 shadow-lg shadow-[#e8a838]/20 animate-glow-warm">
            <Play className="w-4 h-4" /><span>查看作品</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-20deg] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
          <Link to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 glass-card text-[#3a2a1a] font-semibold text-sm rounded-2xl hover:bg-white/80 transition-all duration-300 shadow-sm">
            关于我<ChevronDown className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-[#e8dcc8] flex items-start justify-center p-1.5 bg-white/50 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-gradient-to-b from-[#e8a838] to-transparent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
