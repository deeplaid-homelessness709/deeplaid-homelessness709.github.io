import { useState, useRef, useEffect } from 'react'
import { portfolioItems, categories, type PortfolioItem } from '@/data/portfolio'
import PortfolioCard from './PortfolioCard'
import VideoModal from './VideoModal'

export default function PortfolioSection() {
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState<PortfolioItem | null>(null)
  const [vis, setVis] = useState(false)
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); o.unobserve(el) } }, { threshold: 0.1 })
    o.observe(el); return () => o.disconnect()
  }, [])
  const items = active === 'all' ? portfolioItems : portfolioItems.filter(i => i.category === active)

  return (
    <section id="portfolio" ref={ref} className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E8%83%8C%E6%99%AF.jpg')" }} />
      <div className="fixed inset-0 bg-gradient-to-b from-[#faf5eb]/80 via-[#faf5eb]/85 to-[#faf5eb]" />
      <div className={`text-center mb-16 transition-all duration-1000 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full mb-6 animate-float shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8a838]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#e8a838] font-semibold">作品集</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#3a2a1a] mb-4 tracking-tight">精选<span className="gradient-amber">作品</span></h2>
        <p className="text-[#8a7a6a] max-w-md mx-auto text-sm">点击卡片查看完整视频</p>
        <div className="section-divider max-w-xs mx-auto mt-6" />
      </div>
      <div className={`flex flex-wrap justify-center gap-2 mb-14 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {categories.map(c => (
          <button key={c.key} onClick={() => setActive(c.key)}
            className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
              active === c.key ? 'bg-gradient-to-r from-[#e8a838] to-[#d4952a] text-white shadow-lg shadow-[#e8a838]/30 scale-105' : 'glass-card text-[#8a7a6a] hover:text-[#3a2a1a] hover:bg-white shadow-sm'
            }`}>
            {c.label}
          </button>
        ))}
      </div>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => <PortfolioCard key={item.id} item={item} index={idx} onClick={setSelected} />)}
        </div>
      ) : (
        <div className="py-20 text-center"><p className="text-[#8a7a6a]">该分类暂无作品</p></div>
      )}
      {selected && <VideoModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
