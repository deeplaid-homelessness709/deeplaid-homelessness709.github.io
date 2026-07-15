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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#080808]" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#F59E0B]/8 rounded-full blur-[150px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F59E0B]/5 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent" />

      <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-float">
          <span className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#F59E0B] font-semibold">专业剪辑师</span>
        </div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">狄婷婷</h1>
        <p className="text-base sm:text-lg text-[#a0a0a0] mb-14 max-w-md mx-auto mt-6">用镜头讲述故事，以剪辑创造感动</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#portfolio" onClick={scrollToPortfolio}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black font-bold text-sm rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#F59E0B]/40 hover:scale-105 active:scale-95 animate-glow">
            <Play className="w-4 h-4" /><span>查看作品</span>
            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] skew-x-[-20deg] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
          <Link to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 glass-card text-white font-semibold text-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
            关于我<ChevronDown className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center p-1.5 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-gradient-to-b from-[#F59E0B] to-transparent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
