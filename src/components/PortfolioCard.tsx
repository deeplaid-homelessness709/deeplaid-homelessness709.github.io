import { useRef, useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import type { PortfolioItem } from '@/data/portfolio'
const catLabels: Record<string, string> = { commercial:'商业', film:'影视', music:'音乐', documentary:'纪录片' }

export default function PortfolioCard({ item, index, onClick }: { item: PortfolioItem; index: number; onClick: (i: PortfolioItem) => void }) {
  const [vis, setVis] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); o.unobserve(el) } }, { threshold: 0.1 })
    o.observe(el); return () => o.disconnect()
  }, [])

  return (
    <div ref={ref} onClick={() => onClick(item)}
      className={`group bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-xl hover:shadow-[#e8a838]/10 hover:-translate-y-2 border border-[#e8dcc8] ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 150}ms` }}>
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf5eb] via-[#fff8ee] to-[#f5efe4] flex items-center justify-center">
          <Play className="w-14 h-14 text-[#e8a838]/30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e8a838] to-[#d4952a] flex items-center justify-center shadow-2xl shadow-[#e8a838]/40 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-100">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
        <span className="absolute top-3 left-3 px-3 py-1.5 text-[11px] font-semibold bg-white/80 backdrop-blur-sm text-[#3a2a1a] rounded-full border border-[#e8dcc8]">{catLabels[item.category] || item.category}</span>
        <span className="absolute top-3 right-3 px-3 py-1.5 text-[11px] text-[#8a7a6a] bg-white/80 backdrop-blur-sm rounded-full border border-[#e8dcc8]">{item.year}</span>
      </div>
      <div className="p-5">
        <h3 className="text-[#3a2a1a] font-bold text-lg mb-1.5 leading-tight group-hover:text-[#e8a838] transition-colors">{item.title}</h3>
        <p className="text-[#8a7a6a] text-sm leading-relaxed line-clamp-2 mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(t => <span key={t} className="px-3 py-1 text-xs bg-[#f0e8d8] text-[#8a7a6a] rounded-full">{t}</span>)}
        </div>
      </div>
    </div>
  )
}
