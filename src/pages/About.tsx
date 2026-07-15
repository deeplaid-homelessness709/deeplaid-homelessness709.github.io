import { useRef, useEffect, useState } from 'react'
import { Calendar, Award } from 'lucide-react'
import { siteConfig } from '@/data/portfolio'

function R({ children }: { children: React.ReactNode }) {
  const [v, s] = useState(false); const r = useRef<HTMLDivElement>(null)
  useEffect(() => { const e = r.current; if (!e) return; const o = new IntersectionObserver(([i]) => { if (i.isIntersecting) { s(true); o.unobserve(e) } }, { threshold: 0.15 }); o.observe(e); return () => o.disconnect() }, [])
  return <div ref={r} className={`transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{children}</div>
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
      <div className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E8%83%8C%E6%99%AF.jpg')" }} />
      <div className="fixed inset-0 bg-gradient-to-b from-[#faf5eb]/80 via-[#faf5eb]/85 to-[#faf5eb]" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#e8a838]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full mb-6 animate-float shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8a838]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#e8a838] font-semibold">关于我</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#3a2a1a] tracking-tight">个人<span className="gradient-amber">简历</span></h1>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <R><div className="bg-white rounded-2xl p-8 mb-6 shadow-sm border border-[#e8dcc8]">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#e8a838] to-[#d4952a] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#e8a838]/30">
              <span className="text-4xl font-black text-white">{siteConfig.name[0]}</span>
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#3a2a1a] mb-1">{siteConfig.name}</h2>
              <p className="text-[#e8a838] font-semibold mb-3">{siteConfig.description}</p>
              <p className="text-[#8a7a6a] leading-relaxed">热爱视频创作，拥有多年专业剪辑经验。擅长通过精准的节奏把控和富有创意的叙事手法，将原始素材转化为引人入胜的视觉作品。</p>
            </div>
          </div>
        </div></R>

        <R><div className="bg-white rounded-2xl p-8 mb-6 shadow-sm border border-[#e8dcc8]">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#fef3d6] flex items-center justify-center"><Calendar className="w-5 h-5 text-[#e8a838]" /></div>
            <h3 className="text-xl font-bold text-[#3a2a1a]">工作经历</h3>
          </div>
          <div className="space-y-8">
            {exps.map((e, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-[#e8dcc8] group last:border-transparent hover:border-[#f5d78a] transition-all">
                <div className="absolute left-0 top-0 w-3.5 h-3.5 rounded-full bg-[#e8a838] border-4 border-white -translate-x-1/2 shadow-sm shadow-[#e8a838]/30" />
                <span className="text-sm text-[#e8a838] font-bold">{e.p}</span>
                <h4 className="text-[#3a2a1a] font-bold text-lg mt-1">{e.c}</h4>
                <p className="text-[#8a7a6a] text-sm mt-1">{e.d}</p>
              </div>
            ))}
          </div>
        </div></R>

        <R><div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8dcc8]">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#fef3d6] flex items-center justify-center"><Award className="w-5 h-5 text-[#e8a838]" /></div>
            <h3 className="text-xl font-bold text-[#3a2a1a]">专业技能</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map(s => (
              <div key={s.n} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-[#3a2a1a] text-sm font-semibold">{s.n}</span>
                  <span className="text-[#e8a838] text-sm font-black">{s.l}%</span>
                </div>
                <div className="h-3 bg-[#f0e8d8] rounded-full overflow-hidden border border-[#e8dcc8]">
                  <div className="h-full bg-gradient-to-r from-[#e8a838] via-[#f5c25a] to-[#e8a838] rounded-full transition-all duration-1000 shadow-sm shadow-[#e8a838]/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
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
