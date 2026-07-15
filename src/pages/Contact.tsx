import { useRef, useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { siteConfig } from '@/data/portfolio'

function R({ children }: { children: React.ReactNode }) {
  const [v, s] = useState(false); const r = useRef<HTMLDivElement>(null)
  useEffect(() => { const e = r.current; if (!e) return; const o = new IntersectionObserver(([i]) => { if (i.isIntersecting) { s(true); o.unobserve(e) } }, { threshold: 0.15 }); o.observe(e); return () => o.disconnect() }, [])
  return <div ref={r} className={`transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{children}</div>
}

export default function Contact() {
  return (
    <main className="pt-24 pb-16 min-h-screen relative">
      <div className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E8%83%8C%E6%99%AF.jpg')" }} />
      <div className="fixed inset-0 bg-gradient-to-b from-[#faf5eb]/80 via-[#faf5eb]/85 to-[#faf5eb]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e8a838]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full mb-6 animate-float shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8a838]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#e8a838] font-semibold">联系我</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#3a2a1a] tracking-tight">与我<span className="gradient-amber">联系</span></h1>
          <p className="text-[#8a7a6a] mt-4">欢迎联系，一起创造精彩</p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { label: '邮箱', value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
              { label: '电话', value: siteConfig.phone, href: `tel:${siteConfig.phone}`, icon: Phone },
              { label: '地址', value: siteConfig.location, href: null, icon: MapPin },
            ].map(item => (
              <R key={item.label}>
                <div className="bg-white rounded-2xl p-6 border border-[#e8dcc8] hover:shadow-lg hover:shadow-[#e8a838]/10 hover:border-[#f5d78a] transition-all duration-500 group shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#fef3d6] flex items-center justify-center group-hover:bg-[#fef0c8] transition-all group-hover:scale-110 duration-300">
                      <item.icon className="w-5 h-5 text-[#e8a838]" />
                    </div>
                    <div>
                      <p className="text-[#8a7a6a] text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#3a2a1a] font-bold text-base hover:text-[#e8a838] transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-[#3a2a1a] font-bold text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </R>
            ))}
          </div>
          <R>
            <div className="bg-white rounded-2xl p-8 border border-[#e8dcc8] shadow-sm h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#fef3d6] flex items-center justify-center"><Send className="w-5 h-5 text-[#e8a838]" /></div>
                <h3 className="text-xl font-bold text-[#3a2a1a]">发送消息</h3>
              </div>
              <form action={`mailto:${siteConfig.email}`} method="GET" className="space-y-4">
                <input type="text" name="subject" placeholder="你的姓名"
                  className="w-full px-4 py-3.5 bg-[#fff8ee] border border-[#e8dcc8] rounded-xl text-[#3a2a1a] text-sm placeholder:text-[#b8a88a] focus:outline-none focus:border-[#e8a838] focus:ring-2 focus:ring-[#fef3d6] transition-all" />
                <input type="email" name="cc" placeholder="你的邮箱"
                  className="w-full px-4 py-3.5 bg-[#fff8ee] border border-[#e8dcc8] rounded-xl text-[#3a2a1a] text-sm placeholder:text-[#b8a88a] focus:outline-none focus:border-[#e8a838] focus:ring-2 focus:ring-[#fef3d6] transition-all" />
                <textarea name="body" rows={4} placeholder="想说的话..."
                  className="w-full px-4 py-3.5 bg-[#fff8ee] border border-[#e8dcc8] rounded-xl text-[#3a2a1a] text-sm placeholder:text-[#b8a88a] focus:outline-none focus:border-[#e8a838] focus:ring-2 focus:ring-[#fef3d6] transition-all resize-none" />
                <button type="submit"
                  className="group relative w-full px-6 py-4 bg-gradient-to-r from-[#e8a838] to-[#d4952a] text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#e8a838]/40 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#e8a838]/20">
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm"><Send className="w-4 h-4" />发送消息</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-20deg] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              </form>
            </div>
          </R>
        </div>
      </div>
    </main>
  )
}
