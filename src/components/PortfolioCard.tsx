import { useRef, useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import type { PortfolioItem } from '@/data/portfolio'
const catLabels: Record<string, string> = { commercial:'商业', film:'影视', music:'音乐', documentary:'纪录片' }

export default function PortfolioCard({ item, index, onClick }: { item: PortfolioItem; index: number; onClick: (i: PortfolioItem) => void }) {
  const [vis, setVis] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); o.unobserve(el) } }, { threshold: 0.1 })
    o.observe(el)
    return () => o.disconnect()
  }, [])

  return (
    <div ref={ref} onClick={() => onClick(item)}
      className={`group glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-2xl hover:shadow-[#F59E0B]/10 hover:-translate-y-2 animated-border ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 150}ms` }}>
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#181818] via-[#121212] to-[#080808] flex items-center justify-center">
          <Play className="w-14 h-14 text-[#F59E0B]/10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-2xl shadow-[#F59E0B]/50 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-100 animate-glow">
            <Play className="w-8 h-8 text-black ml-1" />
          </div>
        </div>
        <span className="absolute top-3 left-3 px-3 py-1.5 text-[11px] font-semibold bg-black/60 backdrop-blur-xl text-white/90 rounded-full border border-white/10">{catLabels[item.category] || item.category}</span>
        <span className="absolute top-3 right-3 px-3 py-1.5 text-[11px] text-[#8a8a8a] bg-black/60 backdrop-blur-xl rounded-full border border-white/10">{item.year}</span>
      </div>
      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-1.5 leading-tight group-hover:text-[#F59E0B] transition-colors">{item.title}</h3>
        <p className="text-[#8a8a8a] text-sm leading-relaxed line-clamp-2 mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(t => <span key={t} className="px-3 py-1 text-xs bg-white/5 text-[#8a8a8a] rounded-full border border-white/5">{t}</span>)}
        </div>
      </div>
    </div>
  )
}
