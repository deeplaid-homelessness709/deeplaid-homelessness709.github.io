import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import type { PortfolioItem } from '@/data/portfolio'

export default function VideoModal({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => { setTimeout(() => setVis(true), 50); document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = '' } }, [])
  useEffect(() => { const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }; window.addEventListener('keydown', fn); return () => window.removeEventListener('keydown', fn) }, [onClose])
  const handleBg = (e: React.MouseEvent) => { if (e.target === e.currentTarget) onClose() }

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-2xl transition-all duration-500 ${vis ? 'opacity-100' : 'opacity-0'}`} onClick={handleBg}>
      <div className={`relative w-full max-w-5xl mx-4 transition-all duration-700 delay-200 ${vis ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-xl font-bold">{item.title}</h3>
          <button onClick={onClose} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#8a8a8a] hover:text-white hover:bg-white/10 transition-all"><X className="w-4 h-4" /></button>
        </div>
        {item.videoType === 'direct' ? (
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 bg-black">
            <video ref={videoRef} controls autoPlay className="w-full aspect-video" controlsList="nodownload"><source src={item.videoUrl} type="video/mp4" /></video>
          </div>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-[#181818] to-[#080808] rounded-2xl flex items-center justify-center border border-white/5">
            <p className="text-[#8a8a8a]">视频加载中...</p>
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          {item.tags.map(t => <span key={t} className="px-3 py-1 text-sm text-[#8a8a8a] glass-card rounded-full">{t}</span>)}
          <span className="px-3 py-1 text-sm text-[#8a8a8a] glass-card rounded-full">{item.year}</span>
        </div>
      </div>
    </div>
  )
}
