import { Link } from 'react-router-dom'
import { Film, Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/data/portfolio'

export default function Footer() {
  const y = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/5 bg-[#080808] overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-[100px]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F59E0B]/3 rounded-full blur-[100px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-lg shadow-[#F59E0B]/20">
                <Film className="w-[18px] h-[18px] text-black" />
              </div>
              <span className="text-white font-black text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-[#8a8a8a] text-sm leading-relaxed">专业视频剪辑与后期制作</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-5 uppercase tracking-wider">导航</h4>
            <ul className="space-y-3">
              {[{ to: '/', label: '首页' }, { to: '/about', label: '简历' }, { to: '/contact', label: '联系' }].map(l => (
                <li key={l.to}><Link to={l.to} className="text-[#8a8a8a] text-sm hover:text-[#F59E0B] transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-5 uppercase tracking-wider">联系方式</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#8a8a8a] text-sm">
                <div className="w-7 h-7 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center"><Mail className="w-3.5 h-3.5 text-[#F59E0B]" /></div>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#F59E0B] transition-colors">{siteConfig.email}</a>
              </li>
              <li className="flex items-center gap-2 text-[#8a8a8a] text-sm">
                <div className="w-7 h-7 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center"><Phone className="w-3.5 h-3.5 text-[#F59E0B]" /></div>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#F59E0B] transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2 text-[#8a8a8a] text-sm">
                <div className="w-7 h-7 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center"><MapPin className="w-3.5 h-3.5 text-[#F59E0B]" /></div>
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[#666] text-xs tracking-wider">&copy; {y} {siteConfig.name} &middot; All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
