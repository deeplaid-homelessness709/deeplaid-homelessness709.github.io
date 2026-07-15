export type VideoType = 'direct' | 'youtube' | 'bilibili' | 'vimeo' | '123pan'
export interface PortfolioItem {
  id: string; title: string; category: 'commercial' | 'film' | 'music' | 'documentary'
  description: string; videoUrl: string; videoType: VideoType; thumbnail: string; tags: string[]; year: string
}
export interface HeroBackground { type: 'image' | 'video'; url: string }
export interface SiteConfig {
  name: string; description: string; email: string; phone: string; location: string; heroBackground?: HeroBackground
}
export const siteConfig: SiteConfig = {
  name: '狄婷婷', description: '专业剪辑师 | 视频后期制作',
  email: 'dq20231216@163.com', phone: '18239866359', location: '地址',
  heroBackground: { type: 'image', url: 'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E8%83%8C%E6%99%AF.jpg' },
}
export const portfolioItems: PortfolioItem[] = [
  { id:'1', title:'作品标题 1', category:'commercial', description:'商业剪辑作品', videoUrl:'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E8%A7%86%E9%A2%9102.mp4', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-1.jpg', tags:['商业','剪辑'], year:'2024' },
  { id:'2', title:'作品标题 2', category:'film', description:'影视剪辑作品', videoUrl:'视频2地址', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-2.jpg', tags:['影视','调色'], year:'2024' },
  { id:'3', title:'作品标题 3', category:'music', description:'音乐剪辑作品', videoUrl:'视频3地址', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-3.jpg', tags:['音乐','MV'], year:'2024' },
  { id:'4', title:'作品标题 4', category:'commercial', description:'品牌宣传片', videoUrl:'视频4地址', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-4.jpg', tags:['宣传片','品牌'], year:'2023' },
  { id:'5', title:'作品标题 5', category:'film', description:'短片电影剪辑', videoUrl:'视频5地址', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-5.jpg', tags:['短片','剧情'], year:'2023' },
  { id:'6', title:'作品标题 6', category:'music', description:'演唱会剪辑', videoUrl:'视频6地址', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-6.jpg', tags:['演唱会','现场'], year:'2023' },
  { id:'7', title:'作品标题 7', category:'documentary', description:'纪录片剪辑', videoUrl:'视频7地址', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-7.jpg', tags:['纪录片','人文'], year:'2022' },
  { id:'8', title:'作品标题 8', category:'commercial', description:'产品广告剪辑', videoUrl:'视频8地址', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-8.jpg', tags:['广告','产品'], year:'2022' },
  { id:'9', title:'作品标题 9', category:'film', description:'影视混剪作品', videoUrl:'视频9地址', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-9.jpg', tags:['混剪','影视'], year:'2022' },
]
export const categories = [
  { key:'all', label:'全部' }, { key:'commercial', label:'商业' }, { key:'film', label:'影视' },
  { key:'music', label:'音乐' }, { key:'documentary', label:'纪录片' },
] as const
