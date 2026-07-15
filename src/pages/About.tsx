import { useRef, useEffect, useState } from 'react'
import { Calendar, Award } from 'lucide-react'
import { siteConfig } from '@/data/portfolio'

function R({ children, cn = '' }: { children: React.ReactNode; cn?: string }) {
  const [v, s] = useState(false); const r = useRef<HTMLDivElement>(null)
  useEffect(() => { const e = r.current; if (!e) return; const o = new IntersectionObserver(([i]) => { if (i.isIntersecting) { s(true); o.unobserve(e) } }, { threshold: 0.15 }); o.observe(e); return () => o.disconnect() }, [])
  return <div ref={r} className={`transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${cn}`}>{children}</div>
}

export default function About() {
  const skills = [
    { n: 'Premiere Pro', l: 95 }, { n: 'After Effects', l: 85 }, { n: 'Final Cut Pro', l: 80 },
    { n: 'DaVinci Resolve', l: 75 }, { n: 'Photoshop', l: 70 }, { n: 'Audition', l: 85 },
  ]
  const exps = [
    { p: '2022 — 至今', c: '自由剪辑师', d: '承接各类商业广告、短视频、纪录片等剪辑项目' },
    { p: '2020 — 2022', c: '某某传媒有限公司', d: '担任后期剪辑师，负责影视项目后期制作' },
    { p: '2018 — 2020', c: '某某影视工作室', d: '初级剪辑师，参与多部短片和广告制作' },
  ]

  return (
    <main className="pt-24 pb-16 min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F59E0B]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#F59E0B]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full mb-6 animate-float">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#F59E0B] font-semibold">关于我</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">个人<span className="gradient-gold">简历</span></h1>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <R><div className="glass-card rounded-2xl p-8 mb-6 animated-border">
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-[#F59E0B]/5 rounded-full blur-[80px]" />
          <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center flex-shrink-0 shadow-2xl shadow-[#F59E0B]/30 animate-glow">
              <span className="text-4xl font-black text-black">{siteConfig.name[0]}</span>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-1">{siteConfig.name}</h2>
              <p className="text-[#F59E0B] font-semibold mb-3">{siteConfig.description}</p>
              <p className="text-[#8a8a8a] leading-relaxed">热爱视频创作，拥有多年专业剪辑经验。擅长通过精准的节奏把控和富有创意的叙事手法，将原始素材转化为引人入胜的视觉作品。</p>
            </div>
          </div>
        </div></R>

        <R><div className="glass-card rounded-2xl p-8 mb-6 animated-border">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center"><Calendar className="w-5 h-5 text-[#F59E0B]" /></div>
            <h3 className="text-xl font-bold text-white">工作经历</h3>
          </div>
          <div className="space-y-8">
            {exps.map((e, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-white/10 group last:border-transparent hover:border-[#F59E0B]/40 transition-all">
                <div className="absolute left-0 top-0 w-3.5 h-3.5 rounded-full bg-[#F59E0B] border-4 border-[#121212] -translate-x-1/2 shadow-lg shadow-[#F59E0B]/30" />
                <span className="text-sm text-[#F59E0B] font-bold">{e.p}</span>
                <h4 className="text-white font-bold text-lg mt-1">{e.c}</h4>
                <p className="text-[#8a8a8a] text-sm mt-1">{e.d}</p>
              </div>
            ))}
          </div>
        </div></R>

        <R><div className="glass-card rounded-2xl p-8 animated-border">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center"><Award className="w-5 h-5 text-[#F59E0B]" /></div>
            <h3 className="text-xl font-bold text-white">专业技能</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map(s => (
              <div key={s.n} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-white text-sm font-semibold">{s.n}</span>
                  <span className="text-[#F59E0B] text-sm font-black">{s.l}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                  <div className="h-full bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F59E0B] rounded-full transition-all duration-1000 shadow-lg shadow-[#F59E0B]/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div></R>
      </div>
    </main>
  )
}
