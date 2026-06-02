import { useState, useEffect } from 'react';
import { ArrowRight, Clock, Menu, X, ArrowUpRight, CheckCircle2, Calendar } from 'lucide-react';
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react';
import avatarSpeaking from './assets/avatar-speaking.jpg';
import avatar2 from './assets/avatar-2.jpg';
import accesstradeWorkshop from './assets/accesstrade-workshop.jpg';
import accesstradeLogo from './assets/accesstrade-logo.png';
import ufmLogo from './assets/ufm-logo.png';
import masofferLogo from './assets/masoffer-logo.png';
import shopeeLogo from './assets/shopee-logo.png';
import vietnamAirlinesLogo from './assets/vietnam-airlines-logo.png';
import highlandsCoffeeLogo from './assets/highlands-coffee-logo.png';
import beAppLogo from './assets/be-app-logo.png';

// Brand logos mapping for Tools & Platforms
const toolLogos: { [key: string]: React.ReactNode } = {
  "Google Analytics": (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2V7h2v10zm4 0h-2v-3h2v3z" fill="#E37400"/>
    </svg>
  ),
  "Google Sheets / Microsoft Excel": (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H7v-4h3v4zm0-5H7V8h3v4zm5 5h-3v-4h3v4zm0-5h-3V8h3v4zm4 5h-3v-4h3v4zm0-5h-3V8h3v4z" fill="#0F9D58"/>
    </svg>
  ),
  "AppsFlyer": (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#00CA9D" />
      <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "Adjust": (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#0055FF" />
      <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "TikTok Shop Affiliate": (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.53.07C14.75.14 16 .9 17.15 2.1c-.08 1.4-.04 2.8-.08 4.2-1-.34-1.92-1-2.9-1.2v6.62c-.06 3.73-3.4 6.36-6.9 5.3-2.96-.9-4.32-4.32-2.9-6.98 1.15-2.15 3.75-2.8 5.76-1.55v-4.1C6.77 3.52 3.65 5.56 3.08 9.27c-.7 4.56 2.37 8.94 6.93 9.58 4.7.67 9.1-2.58 9.38-7.3V5.15C21.05 4.3 22 3.32 23 2.5v-2.4C21 .9 19.34.8 17.9 0v4.4C16.8 2.8 15 1 12.53.07z" fill="#00F2FE" />
    </svg>
  ),
  "AccessTrade Affiliate System": (
    <img src={accesstradeLogo} alt="AccessTrade" className="w-5 h-5 object-contain flex-shrink-0" />
  ),
  "Hệ thống Affiliate AccessTrade": (
    <img src={accesstradeLogo} alt="AccessTrade" className="w-5 h-5 object-contain flex-shrink-0" />
  ),
  "Meta Business Suite": (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 6C14.37 6 12.63 7.22 12 9c-.63-1.78-2.37-3-4.5-3C4.46 6 2 8.46 2 11.5S4.46 17 7.5 17c2.13 0 3.87-1.22 4.5-3 .63 1.78 2.37 3 4.5 3 3.04 0 5.5-2.46 5.5-5.5S19.54 6 16.5 6zm-9 9C5.57 15 4 13.43 4 11.5S5.57 8 7.5 8 11 9.57 11 11.5 9.43 15 7.5 15zm9 0c-1.93 0-3.5-1.57-3.5-3.5S14.57 8 16.5 8s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" fill="#0668E1"/>
    </svg>
  ),
  "CRM & Reporting Tools": (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "CRM & công cụ báo cáo": (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

export default function App() {
  // Live Vietnam Time Logic
  const [vietnamTime, setVietnamTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat('en-GB', options).format(new Date());
      setVietnamTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // WebGPU Support Detection State
  const [hasWebGPU, setHasWebGPU] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && 'gpu' in navigator && (navigator as any).gpu) {
      setHasWebGPU(true);
    }
  }, []);

  // Mobile Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Language State (Vietnamese / English)
  const [isEnglish, setIsEnglish] = useState(false);



  return (
    <div className="relative w-full min-h-screen bg-[#EFEFEF] selection:bg-[#F26522] selection:text-white antialiased">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[60vh] min-h-[460px] bg-[#EFEFEF] flex flex-col justify-between overflow-hidden">
        
        {/* Animated Shader Overlay with WebGPU Support Check */}
        {hasWebGPU ? (
          <Shader className="absolute inset-0 z-10 pointer-events-none overflow-hidden w-full h-full">
            <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
            <ChromaFlow 
              baseColor="#ffffff" 
              downColor="#ff5f03" 
              leftColor="#ff5f03" 
              rightColor="#ff5f03" 
              upColor="#ff5f03" 
              momentum={13} 
              radius={3.5} 
            />
            <FlutedGlass 
              aberration={0.61} 
              angle={31} 
              frequency={8} 
              highlight={0.12} 
              highlightSoftness={0} 
              lightAngle={-90} 
              refraction={4} 
              shape="rounded" 
              softness={1} 
              speed={0.15} 
            />
            <FilmGrain strength={0.05} />
          </Shader>
        ) : (
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden bg-[#EFEFEF]">
            {/* Elegant premium CSS fallback simulating ChromaFlow dynamic background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(255,95,3,0.18)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0%,transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(240,240,240,0.2)_100%)]"></div>
            {/* CSS-based Film Grain Pattern Fallback */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]"></div>
          </div>
        )}


        {/* Navigation Bar */}
        <header className="w-full max-w-[1440px] mx-auto p-2 sm:p-3 relative z-20">
          <div className="w-full bg-white rounded-full p-[5px] flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            
            {/* LEFT SIDE */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="h-9 sm:h-10 px-3 sm:px-4 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer select-none">
                <span className="text-white text-[11px] sm:text-[12px] font-bold tracking-tight">Mr.Thanh</span>
              </div>
              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-6">
                <a href="#about" className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300 font-medium">{isEnglish ? "About me" : "Giới thiệu"}</a>
                <a href="#credentials" className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300 font-medium">{isEnglish ? "Skill" : "Kỹ năng"}</a>
                <a href="#experience" className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300 font-medium">{isEnglish ? "Experience" : "Kinh nghiệm"}</a>
                <a href="#projects" className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300 font-medium">{isEnglish ? "Project" : "Dự án"}</a>
                <a href="#connect" className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300 font-medium">{isEnglish ? "Connect" : "Liên hệ"}</a>
              </nav>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden md:flex items-center gap-4">
              <span className="text-[13px] text-gray-600 hidden lg:block font-normal">
                {isEnglish ? "Taking on projects in Vietnam" : "Đang nhận dự án tại Việt Nam"}
              </span>
              <div className="flex items-center gap-1.5 text-gray-600 mr-2">
                <Clock size={14} className="text-gray-500" />
                <span className="text-[13px] font-normal">{vietnamTime || "12:00"} {isEnglish ? "in Vietnam" : "ở Việt Nam"}</span>
              </div>
              {/* CTA Button with Text Roll Animation */}
              <button 
                onClick={() => setIsEnglish(!isEnglish)}
                className="group bg-gray-900 hover:bg-gray-800 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 flex items-center gap-3 transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              >
                <div className="overflow-hidden h-[20px] flex flex-col relative">
                  <span className="transform translate-y-0 group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                    {isEnglish ? "Dịch sang VI" : "Translate to EN"}
                  </span>
                  <span className="absolute top-0 left-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                    {isEnglish ? "Dịch sang VI" : "Translate to EN"}
                  </span>
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center transform group-hover:-rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  <ArrowRight size={12} className="text-gray-900" />
                </div>
              </button>
            </div>

            {/* MOBILE TOGGLE BUTTON */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden flex items-center justify-center bg-gray-900 text-white rounded-full p-2.5 mr-1"
            >
              <Menu size={16} />
            </button>
          </div>
        </header>

        {/* MOBILE MENU OVERLAY */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 md:hidden flex flex-col justify-end">
            {/* Clickable backdrop to close */}
            <div className="absolute inset-0 -z-10" onClick={() => setIsMenuOpen(false)}></div>
            
            <div className="bg-white rounded-2xl mx-3 mb-3 p-6 flex flex-col gap-8 transform translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-2xl">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <Clock size={14} className="text-gray-400" />
                  <span className="text-[13px] font-medium">{vietnamTime || "12:00"} {isEnglish ? "Vietnam" : "Việt Nam"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsEnglish(!isEnglish)}
                    className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                  >
                    {isEnglish ? "VI" : "EN"}
                  </button>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full text-gray-900 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              <nav className="flex flex-col gap-5">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-[28px] sm:text-[32px] font-medium text-gray-900 tracking-tight hover:text-gray-500 transition-colors">{isEnglish ? "About me" : "Giới thiệu"}</a>
                <a href="#credentials" onClick={() => setIsMenuOpen(false)} className="text-[28px] sm:text-[32px] font-medium text-gray-900 tracking-tight hover:text-gray-500 transition-colors">{isEnglish ? "Skill" : "Kỹ năng"}</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-[28px] sm:text-[32px] font-medium text-gray-900 tracking-tight hover:text-gray-500 transition-colors">{isEnglish ? "Experience" : "Kinh nghiệm"}</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-[28px] sm:text-[32px] font-medium text-gray-900 tracking-tight hover:text-gray-500 transition-colors">{isEnglish ? "Project" : "Dự án"}</a>
                <a href="#connect" onClick={() => setIsMenuOpen(false)} className="text-[28px] sm:text-[32px] font-medium text-gray-900 tracking-tight hover:text-gray-500 transition-colors">{isEnglish ? "Connect" : "Liên hệ"}</a>
              </nav>
              <a 
                href="#connect"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-[#F26522] hover:bg-[#e05a1a] text-white rounded-full py-4 px-6 flex items-center justify-between text-[16px] font-medium transition-colors"
              >
                <span>{isEnglish ? "Start a project" : "Bắt đầu dự án"}</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        )}

        {/* Hero Content Area */}
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-20 flex flex-col justify-center items-center text-center flex-1 pb-8 sm:pb-12">
          <h1 className="text-gray-900 font-extrabold tracking-[-0.03em] leading-[1.05] text-[clamp(2.5rem,8vw,5.5rem)] select-text mb-4 sm:mb-6">
            Mr.Thanh
          </h1>
          <p className="text-gray-700 text-[clamp(1.1rem,3vw,1.6rem)] font-medium leading-[1.4] max-w-[850px] select-text">
            {isEnglish ? "Turning Traffic into Revenue. Optimizing conversions for Affiliate ecosystems across E-commerce & Mobile Apps." : "Biến Traffic thành Doanh thu. Tối ưu hóa chuyển đổi hệ sinh thái Affiliate mảng E-commerce & Mobile App."}
          </p>

          {/* CTA Row */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            {/* Orange Button */}
            <a href="#connect" className="group bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 flex items-center gap-4 shadow-md transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
              <div className="overflow-hidden h-[20px] flex flex-col relative">
                <span className="transform translate-y-0 group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  {isEnglish ? "Start a project" : "Bắt đầu dự án"}
                </span>
                <span className="absolute top-0 left-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  {isEnglish ? "Start a project" : "Bắt đầu dự án"}
                </span>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center transform group-hover:-rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <ArrowRight size={14} className="text-[#F26522]" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 overflow-hidden relative">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Badge Row */}
          <div className="flex items-center mb-6 sm:mb-8 select-none">
            <div className="text-[16px] sm:text-[18px] font-semibold border border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-gray-800 bg-white shadow-sm">
              {isEnglish ? "Introducing Thanh" : "Giới thiệu về tôi"}
            </div>
          </div>

          {/* Heading H2 */}
          <div>
            <h2 className="text-gray-900 font-extrabold tracking-[-0.02em] leading-[1.12] text-[clamp(2.5rem,5vw,4.5rem)] mb-8 sm:mb-12 max-w-[1000px]">
              {isEnglish ? "Nguyen Duc Thanh" : "Nguyễn Đức Thành"}
            </h2>
          </div>

          {/* Content Area - Split 2-Column Layout */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-10 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Avatar Card */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[440px] aspect-[3/2] bg-white rounded-3xl overflow-hidden border border-gray-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center justify-center p-3 group">
                {/* Soft grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-25"></div>
                
                {/* Abstract network waves/gradients */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-[#F26522]/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
                
                {/* Fine-tuned matrix-like glowing overlay dot pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#F26522_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] opacity-[0.07] pointer-events-none"></div>

                {/* The Avatar Image (Full landscape frame) */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] bg-gray-50">
                  <img 
                    src={avatarSpeaking} 
                    alt="Nguyen Duc Thanh Avatar" 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Description */}
            <div className="w-full lg:mt-0">
              <p className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-4 tracking-tight uppercase">
                {isEnglish ? "Professional Summary" : "Tóm tắt chuyên môn"}
              </p>
              <div className="text-[15px] sm:text-[17px] leading-[1.75] font-normal text-gray-700 whitespace-pre-line space-y-4">
                {isEnglish ? (
                  "Affiliate Growth & Partnership Specialist with over 5 years of experience in affiliate marketing, publisher development, e-commerce growth, and performance marketing. Experienced in building and scaling publisher ecosystems, optimizing affiliate campaign performance, and driving sustainable revenue growth across e-commerce, finance, and mobile applications.\n\nPossesses a strong foundation in publisher acquisition, strategic partnership, traffic optimization, and campaign scaling. Proven capability to lead affiliate growth initiatives, manage cross-functional collaboration, and directly contribute to high-revenue campaigns within both domestic and international affiliate ecosystems."
                ) : (
                  "Chuyên gia về Affiliate Growth & Partnership với hơn 5 năm kinh nghiệm trong affiliate marketing, phát triển publisher, tăng trưởng thương mại điện tử và performance marketing. Có kinh nghiệm xây dựng và mở rộng hệ sinh thái publisher, tối ưu hiệu quả chiến dịch affiliate và thúc đẩy tăng trưởng doanh thu bền vững trong các lĩnh vực thương mại điện tử, tài chính và ứng dụng di động.\n\nCó nền tảng vững chắc về thu hút publisher, hợp tác chiến lược, tối ưu traffic và mở rộng quy mô chiến dịch. Có khả năng dẫn dắt các sáng kiến tăng trưởng affiliate, quản lý phối hợp liên phòng ban và đóng góp trực tiếp vào các chiến dịch doanh thu cao trong cả hệ sinh thái affiliate trong nước và quốc tế."
                )}
              </div>
            </div>

          </div>

          {/* LOWER PART: Supporting Activity Gallery Row with Partner Logos on the sides */}
          <div className="mt-12 sm:mt-16 max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
            {/* Left Logo (Desktop only) */}
            <div className="hidden lg:flex items-center justify-center w-24 xl:w-28 opacity-85 hover:opacity-100 transition-opacity duration-300">
              <img src={accesstradeLogo} alt="ACCESSTRADE Logo Left" className="w-full h-auto object-contain" />
            </div>

            {/* Central Images Grid */}
            <div className="w-full max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 flex-1">
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-gray-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.04)] group">
                <img 
                  src={avatar2} 
                  alt="Nguyen Duc Thanh Presentation" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent pointer-events-none"></div>
              </div>
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-gray-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.04)] group">
                <img 
                  src={accesstradeWorkshop} 
                  alt="Nguyen Duc Thanh ACCESSTRADE Workshop" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Right Logo (Desktop only) */}
            <div className="hidden lg:flex items-center justify-center w-24 xl:w-28 opacity-85 hover:opacity-100 transition-opacity duration-300">
              <img src={accesstradeLogo} alt="ACCESSTRADE Logo Right" className="w-full h-auto object-contain" />
            </div>

            {/* Mobile Logos (Centered below) */}
            <div className="flex lg:hidden items-center justify-center gap-8 opacity-85 mt-4">
              <img src={accesstradeLogo} alt="ACCESSTRADE Logo Mobile Left" className="h-6 w-auto object-contain" />
              <img src={accesstradeLogo} alt="ACCESSTRADE Logo Mobile Right" className="h-6 w-auto object-contain" />
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS SECTION: NGUYEN DUC THANH EXPERTISE & SYSTEM */}
      <section id="credentials" className="bg-[#111827] text-white pt-16 pb-16 px-5 sm:px-8 lg:px-12 relative overflow-hidden border-b border-gray-800/80">
        {/* Subtle glass background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black pointer-events-none opacity-90"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F26522]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="w-full max-w-[1440px] mx-auto relative z-10">
          <div className="pb-8 mb-10 border-b border-gray-800/60">
            <span className="text-[14px] sm:text-[16px] bg-[#F26522]/10 text-[#F26522] border border-[#F26522]/30 px-5 py-2 rounded-full font-extrabold uppercase tracking-wider select-none">
              {isEnglish ? "Skills & Tools" : "Kỹ năng và Công cụ"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-3">
              {isEnglish ? "Nguyen Duc Thanh — Core Competencies" : "Nguyễn Đức Thành — Năng lực cốt lõi"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Education, Languages & Tools */}
            <div className="space-y-8 flex flex-col justify-between h-full">
              <div className="space-y-8">
                {/* Card 1: Education */}
                <div className="bg-gray-800/30 border border-gray-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-gray-700/80 transition-colors">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#F26522] mb-4 select-none">
                    {isEnglish ? "Education" : "Học vấn"}
                  </h3>
                  <div className="flex items-start gap-4">
                    <img src={ufmLogo} alt="UFM Logo" className="w-12 h-12 object-contain rounded-full bg-white p-0.5 shadow-md flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-[17px] sm:text-[19px] md:text-[20px] font-bold text-white leading-snug">
                        {isEnglish ? "University of Finance – Marketing" : "Đại học Tài chính – Marketing"}
                      </h4>
                      <p className="text-[15px] sm:text-[16px] text-gray-300 font-semibold">
                        {isEnglish ? "Bachelor of Business Administration" : "Cử nhân Quản trị Kinh doanh"}
                      </p>
                      <p className="text-[14px] text-gray-500 font-semibold">
                        2016 – 2020
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Languages */}
                <div className="bg-gray-800/30 border border-gray-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-gray-700/80 transition-colors">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#F26522] mb-4 select-none">
                    {isEnglish ? "Languages" : "Ngôn ngữ"}
                  </h3>
                  <ul className="text-[15px] sm:text-[16px] text-gray-300 space-y-3 font-semibold">
                    <li className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#F26522]"></span>
                      <span>
                        <strong>{isEnglish ? "Vietnamese:" : "Tiếng Việt:"}</strong> {isEnglish ? " Native" : " Bản ngữ"}
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#F26522]"></span>
                      <span>
                        <strong>{isEnglish ? "English:" : "Tiếng Anh:"}</strong> {isEnglish ? " Professional Working Proficiency" : " Thành thạo chuyên nghiệp"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 4: Tools & Platforms */}
              <div className="bg-gray-800/30 border border-gray-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-gray-700/80 transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#F26522] mb-4 select-none">
                  {isEnglish ? "Tools & Platforms" : "Công cụ & Nền tảng"}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {(isEnglish ? [
                    "Google Analytics",
                    "Google Sheets / Microsoft Excel",
                    "AppsFlyer",
                    "Adjust",
                    "TikTok Shop Affiliate",
                    "AccessTrade Affiliate System",
                    "Meta Business Suite",
                    "CRM & Reporting Tools"
                  ] : [
                    "Google Analytics",
                    "Google Sheets / Microsoft Excel",
                    "AppsFlyer",
                    "Adjust",
                    "TikTok Shop Affiliate",
                    "Hệ thống Affiliate AccessTrade",
                    "Meta Business Suite",
                    "CRM & công cụ báo cáo"
                  ]).map((tool, index) => (
                    <span key={index} className="flex items-center gap-2.5 text-[13px] sm:text-[14px] bg-gray-900 border border-gray-800 text-gray-300 px-4 py-2.5 rounded-full font-semibold">
                      {toolLogos[tool] || null}
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Skills */}
            <div className="h-full">
              {/* Card 3: Skills */}
              <div className="bg-gray-800/30 border border-gray-800/80 rounded-2xl p-8 sm:p-10 md:p-12 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-gray-700/80 transition-colors h-full flex flex-col justify-center">
                <h3 className="text-[20px] sm:text-[24px] font-extrabold uppercase tracking-wide text-[#F26522] mb-6 sm:mb-8 select-none">
                  {isEnglish ? "Skills" : "Kỹ năng"}
                </h3>
                <ul className="text-[17px] sm:text-[19px] md:text-[21px] text-gray-200 space-y-4 sm:space-y-5 md:space-y-6 font-semibold leading-relaxed">
                  {(isEnglish ? [
                    "Affiliate Marketing & Publisher Development",
                    "E-commerce Affiliate Growth",
                    "Performance Marketing & Campaign Optimization",
                    "Performance Marketing for Mobile Applications",
                    "Partnership Development",
                    "Traffic & Conversion Optimization",
                    "Team Leadership & Operations Management",
                    "Data Analysis & Performance Reporting"
                  ] : [
                    "Affiliate Marketing & Phát triển Publisher",
                    "Tăng trưởng Affiliate Thương mại điện tử",
                    "Performance Marketing & Tối ưu chiến dịch",
                    "Performance Marketing cho Ứng dụng Di động",
                    "Phát triển quan hệ đối tác",
                    "Tối ưu Traffic & Chuyển đổi",
                    "Lãnh đạo đội nhóm & Quản lý vận hành",
                    "Phân tích dữ liệu & Báo cáo hiệu suất"
                  ]).map((skill, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#F26522] font-bold text-[20px] sm:text-[22px] leading-none mt-0.5">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION: NGUYEN DUC THANH PORTFOLIO COLLABORATION */}
      <section id="experience" className="bg-[#0b0f19] text-white pt-16 pb-16 px-5 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle glass background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 pointer-events-none opacity-90"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#F26522]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="w-full max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-800 pb-10 mb-12">
            <div>
              <span className="text-[14px] sm:text-[16px] bg-[#F26522]/10 text-[#F26522] border border-[#F26522]/30 px-5 py-2 rounded-full font-extrabold uppercase tracking-wider select-none">
                {isEnglish ? "Featured Collaborator Journal" : "Nhật ký Cộng tác nổi bật"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-3">
                {isEnglish ? "Nguyen Duc Thanh — Work Experience" : "Nguyễn Đức Thành — Kinh nghiệm làm việc"}
              </h2>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/brian-nguyen-b560b0170/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[14px] sm:text-[15px] font-bold border-2 border-white bg-white/5 hover:bg-white/15 text-white rounded-full px-7 py-3 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] flex items-center justify-center gap-2"
              >
                {isEnglish ? "LinkedIn Profile" : "Trang LinkedIn"}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Card 1: ACCESSTRADE Việt Nam */}
            <div className="bg-gray-800/30 border border-gray-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-gray-700/80 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-800/60">
                  <div className="flex items-center gap-3">
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight">
                      ACCESSTRADE Việt Nam
                    </h3>
                    <img src={accesstradeLogo} alt="ACCESSTRADE Logo" className="h-16 sm:h-20 w-auto object-contain" />
                  </div>
                  <span className="text-[12px] bg-[#F26522]/15 text-[#F26522] border border-[#F26522]/30 px-3 py-1 rounded-full font-bold select-none">
                    {isEnglish ? "Current" : "Hiện tại"}
                  </span>
                </div>
                
                {/* Roles & Timeline */}
                <div className="mb-6 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between text-[15px] sm:text-[17px] text-gray-300 font-semibold gap-1">
                    <span className="text-white font-bold">{isEnglish ? "E-commerce Affiliate Growth Team Leader" : "Trưởng nhóm Tăng trưởng Affiliate TMĐT"}</span>
                    <span className="text-[#F26522] flex-shrink-0">11/2024 – {isEnglish ? "Present" : "Nay"}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between text-[15px] sm:text-[17px] text-gray-300 font-semibold gap-1">
                    <span className="text-white">{isEnglish ? "Senior Affiliate Account Manager" : "Quản lý Tài khoản Affiliate Cấp cao"}</span>
                    <span className="flex-shrink-0">05/2022 – 11/2024</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-[12px] font-extrabold uppercase tracking-widest text-[#F26522] mb-3 select-none">
                    {isEnglish ? "Key Responsibilities" : "Trách nhiệm chính"}
                  </h4>
                  <ul className="text-[13px] sm:text-[14px] text-gray-300 space-y-2 font-medium leading-relaxed">
                    {(isEnglish ? [
                      "Develop and expand the high-performing publisher ecosystem in e-commerce affiliate and performance marketing.",
                      "Manage strategic partnerships with publishers, agencies, and business partners to improve campaign results and revenue growth.",
                      "Optimize affiliate campaigns through traffic analysis, conversion rate optimization, and publisher quality control.",
                      "Monitor and improve mobile app campaign performance using AppsFlyer and Adjust tracking platforms.",
                      "Propose and deploy data-driven growth strategies to enhance operational efficiency, campaign scalability, and publisher quality.",
                      "Collaborate with internal teams and external partners to launch and optimize affiliate campaigns for e-commerce and mobile apps.",
                      "Support the management, training, and operational development of the publisher team to improve performance and execution quality.",
                      "Track team KPIs and contribute to long-term publisher growth strategies for e-commerce affiliate marketing."
                    ] : [
                      "Phát triển và mở rộng hệ sinh thái publisher có hiệu suất cao trong lĩnh vực affiliate thương mại điện tử và performance marketing.",
                      "Quản lý quan hệ đối tác chiến lược với publisher, agency và đối tác kinh doanh nhằm cải thiện hiệu quả chiến dịch và tăng trưởng doanh thu.",
                      "Tối ưu hiệu quả chiến dịch affiliate thông qua phân tích traffic, tối ưu chuyển đổi và quản lý chất lượng publisher.",
                      "Theo dõi và cải thiện hiệu suất các chiến dịch ứng dụng di động bằng các nền tảng tracking AppsFlyer và Adjust.",
                      "Đề xuất và triển khai các chiến lược tăng trưởng dựa trên dữ liệu nhằm nâng cao hiệu quả vận hành, khả năng mở rộng chiến dịch và chất lượng publisher.",
                      "Phối hợp với các đội nội bộ và đối tác bên ngoài để triển khai và tối ưu các chiến dịch affiliate cho thương mại điện tử và ứng dụng di động.",
                      "Hỗ trợ quản lý, đào tạo và phát triển vận hành đội publisher nhằm nâng cao hiệu quả làm việc và chất lượng thực thi.",
                      "Theo dõi KPI của đội nhóm và đóng góp vào chiến lược tăng trưởng publisher dài hạn cho mảng affiliate thương mại điện tử."
                    ]).map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#F26522] mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-[12px] font-extrabold uppercase tracking-widest text-[#F26522] mb-3 select-none">
                    {isEnglish ? "Key Achievements" : "Thành tích nổi bật"}
                  </h4>
                  <ul className="text-[13px] sm:text-[14px] text-gray-300 space-y-2.5 font-medium leading-relaxed">
                    {(isEnglish ? [
                      <>Honored as <strong className="text-white font-semibold">Best Publisher Employee 2024</strong> for outstanding contributions to publisher growth and affiliate campaign optimization.</>,
                      <>Awarded <strong className="text-white font-semibold">Best Seller – Q2/2025</strong> and nominated as Top Seller for April & May 2025 due to outstanding revenue growth.</>,
                      <>Awarded <strong className="text-white font-semibold">Best Management Performance</strong> in Delivery Division 2025 for leadership, operations management, and business contributions.</>,
                      <>Generated over <strong className="text-white font-semibold">8B+ VND</strong> in gross commission in Q2/2025, contributing approximately 2/3 of total Shopee campaign revenue.</>,
                      <>Generated over <strong className="text-white font-semibold">500M+ VND</strong> in revenue for Highlands Coffee affiliate campaign in Q2/2025, leading in overall campaign performance.</>
                    ] : [
                      <>Được vinh danh là <strong className="text-white font-semibold">Nhân viên xuất sắc của bộ phận Publisher 2024</strong> nhờ đóng góp nổi bật trong tăng trưởng publisher và tối ưu chiến dịch affiliate.</>,
                      <>Đạt Giải thưởng <strong className="text-white font-semibold">Best Seller – Quý 2/2025</strong> và được đề cử Top Seller cho tháng 4 và 5/2025 nhờ kết quả tăng trưởng doanh thu xuất sắc.</>,
                      <>Được trao Giải thưởng <strong className="text-white font-semibold">Best Management Performance</strong> trong Delivery Division 2025 nhờ năng lực lãnh đạo, quản lý vận hành và đóng góp cho kinh doanh.</>,
                      <>Tạo ra hơn <strong className="text-white font-semibold">8 tỷ VNĐ</strong> gross commission trong Quý 2/2025, đóng góp khoảng 2/3 tổng doanh thu chiến dịch Shopee.</>,
                      <>Mang về hơn <strong className="text-white font-semibold">500 triệu VNĐ</strong> doanh thu cho chiến dịch affiliate Highlands Coffee trong Quý 2/2025, dẫn đầu hiệu suất toàn chiến dịch.</>
                    ]).map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#F26522] font-semibold">✔</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: MASOFFER */}
            <div className="bg-gray-800/30 border border-gray-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-gray-700/80 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-800/60">
                  <div className="flex items-center gap-3">
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight">
                      MASOFFER
                    </h3>
                    <img src={masofferLogo} alt="MASOFFER Logo" className="h-16 sm:h-20 w-auto object-contain" />
                  </div>
                  <span className="text-[12px] bg-gray-800 text-gray-400 border border-gray-700 px-3 py-1 rounded-full font-bold select-none">
                    2020 – 2022
                  </span>
                </div>
                
                {/* Roles & Timeline */}
                <div className="mb-6 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between text-[15px] sm:text-[17px] text-gray-300 font-semibold gap-1">
                    <span className="text-white font-bold">{isEnglish ? "Affiliate Account Manager" : "Quản lý Tài khoản Affiliate"}</span>
                    <span className="text-gray-500 flex-shrink-0">05/2020 – 05/2022</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-[12px] font-extrabold uppercase tracking-widest text-[#F26522] mb-3 select-none">
                    {isEnglish ? "Key Responsibilities" : "Trách nhiệm chính"}
                  </h4>
                  <ul className="text-[13px] sm:text-[14px] text-gray-300 space-y-2 font-medium leading-relaxed">
                    {(isEnglish ? [
                      "Search, develop, and manage publisher systems specialized in affiliate marketing in the field of finance and mobile applications.",
                      "Build and maintain long-term relationships with publishers to enhance campaign efficiency and revenue growth.",
                      "Analyze performance and implement optimization strategies to improve traffic quality and conversion rates.",
                      "Monitor affiliate market trends and search for new optimization methods to improve operational efficiency."
                    ] : [
                      "Tìm kiếm, phát triển và quản lý hệ thống publisher chuyên về affiliate marketing trong lĩnh vực tài chính và ứng dụng di động.",
                      "Xây dựng và duy trì quan hệ dài hạn với publisher để nâng cao hiệu quả chiến dịch và tăng trưởng doanh thu.",
                      "Phân tích hiệu quả và triển khai các chiến lược tối ưu nhằm cải thiện chất lượng traffic và hiệu suất chuyển đổi.",
                      "Theo dõi xu hướng thị trường affiliate và tìm kiếm các phương pháp tối ưu mới để nâng cao hiệu quả vận hành."
                    ]).map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#F26522] mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-[12px] font-extrabold uppercase tracking-widest text-[#F26522] mb-3 select-none">
                    {isEnglish ? "Key Achievements" : "Thành tích nổi bật"}
                  </h4>
                  <ul className="text-[13px] sm:text-[14px] text-gray-300 space-y-2.5 font-medium leading-relaxed">
                    {(isEnglish ? [
                      <>Contributed to generating over <strong className="text-white font-semibold">1B+ VND</strong> in monthly revenue through the mobile banking publisher network.</>,
                      <>Expanded and maintained high-quality partnerships with publishers to enhance affiliate campaign results.</>,
                      <>Assisted in campaign operations and publisher management in the financial and mobile application fields.</>
                    ] : [
                      <>Góp phần tạo ra hơn <strong className="text-white font-semibold">1 tỷ VNĐ</strong> doanh thu mỗi tháng thông qua hệ thống publisher ngân hàng ứng dụng di động.</>,
                      <>Mở rộng và duy trì quan hệ đối tác chất lượng cao với publisher để nâng cao hiệu quả chiến dịch affiliate.</>,
                      <>Hỗ trợ vận hành chiến dịch và quản lý publisher trong các mảng tài chính và ứng dụng di động.</>
                    ]).map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#F26522] font-semibold">✔</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROJECTS */}
      <section id="projects" className="bg-[#0b1329] text-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 relative border-t border-slate-800/80">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1329] to-[#0f172a] pointer-events-none opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-[1440px] mx-auto relative z-10">
          
          {/* Badge Row */}
          <div className="px-5 sm:px-8 lg:px-12 flex items-center mb-6 sm:mb-8 select-none">
            <span className="text-[12px] sm:text-[13px] font-extrabold border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)] rounded-full px-4 py-2 text-cyan-400 bg-cyan-950/20 uppercase tracking-widest">
              {isEnglish ? "🎯 Projects" : "🎯 Các dự án đã làm"}
            </span>
          </div>

          {/* Heading H2 & Description */}
          <div className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16 grid grid-cols-1 lg:grid-cols-[auto_1fr] items-end gap-6 sm:gap-8">
            <h2 className="text-white font-black tracking-[-0.03em] leading-[1.08] text-[clamp(2.2rem,6vw,4.2rem)] select-text">
              {isEnglish ? "Nguyen Duc Thanh" : "Nguyễn Đức Thành"}
            </h2>
            <p className="text-slate-400 text-[14px] sm:text-[16px] max-w-[600px] leading-relaxed select-text lg:mb-2 font-semibold">
              {isEnglish 
                ? "Verified execution milestones and campaign metrics showing actual revenue growth and programmatic efficiency."
                : "Các cột mốc chiến dịch thực chiến và số liệu tăng trưởng affiliate thực tế đã được kiểm chứng."
              }
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 sm:px-8 lg:px-12">
            
            {/* Card 1: Shopee */}
            <div className="group bg-slate-950/40 border border-slate-800 rounded-3xl p-8 sm:p-10 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_20px_40px_rgba(8,47,73,0.3),_0_0_25px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col justify-between">
              <div>
                {/* Tầng 1: Metadata */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/60">
                  <span className="flex items-center gap-2 text-[13px] sm:text-[15px] bg-[#F26522]/10 text-[#F26522] border border-[#F26522]/20 px-4 py-2 rounded-full font-bold uppercase tracking-wider select-none">
                    <img src={shopeeLogo} alt="Shopee Logo" className="h-5 sm:h-6 w-auto object-contain flex-shrink-0" />
                    <span>Shopee Affiliate</span>
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[12px] sm:text-[13px] select-none font-semibold">
                    <Calendar size={14} className="text-slate-500" />
                    <span>Q2/2025</span>
                  </div>
                </div>

                {/* Tầng 2: Title & Role */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[20px] sm:text-[23px] font-medium text-white leading-snug tracking-tight">
                    {isEnglish ? "Shopee Affiliate Growth Campaign" : "Chiến dịch Tăng trưởng Affiliate Shopee"}
                  </h3>
                  <ArrowUpRight size={22} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
                <div className="inline-block border border-slate-800/80 bg-slate-900/50 text-cyan-400 font-extrabold uppercase tracking-widest text-[11px] px-3.5 py-1.5 rounded-md mb-6 select-none">
                  {isEnglish ? "ROLE: E-COMMERCE AFFILIATE GROWTH TEAM LEADER" : "VAI TRÒ: TRƯỞNG NHÓM TĂNG TRƯỞNG AFFILIATE TMĐT"}
                </div>

                {/* Tầng 3: Details */}
                <ul className="space-y-4 text-[14px] sm:text-[15px] text-slate-300 leading-relaxed font-semibold mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Scale and optimize the publisher ecosystem for Shopee affiliate campaigns."
                        : "Mở rộng và tối ưu hệ sinh thái publisher cho các chiến dịch affiliate Shopee."
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Manage campaign traffic and conversion efficiency to maximize revenue growth."
                        : "Quản lý traffic chiến dịch và hiệu quả chuyển đổi để tối đa hóa tăng trưởng doanh thu."
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Successfully developed partnership with Opera Browser, contributing a significant share of revenue to the campaign."
                        : "Phát triển thành công quan hệ hợp tác với Opera Browser, đóng góp một phần doanh thu đáng kể cho chiến dịch."
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Achieved high target metrics and optimized operations across Shopee's internal publisher networks."
                        : "Đạt chỉ số mục tiêu cao và tối ưu hóa vận hành trên các mạng lưới publisher nội bộ Shopee."
                      }
                    </span>
                  </li>
                </ul>
              </div>

              {/* Tầng 4: Wow Factor */}
              <div className="border-t border-slate-800/80 pt-6 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase select-none">
                    {isEnglish ? "Gross Commission" : "Tổng Hoa Hồng"}
                  </div>
                  <span className="inline-block bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-black text-3xl sm:text-4xl select-text mt-1">
                    {isEnglish ? "8 Billion VND" : "8 Tỷ VND"}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] select-none">
                  📈
                </div>
              </div>
            </div>

            {/* Card 2: Lotus Publisher */}
            <div className="group bg-slate-950/40 border border-slate-800 rounded-3xl p-8 sm:p-10 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_20px_40px_rgba(8,47,73,0.3),_0_0_25px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col justify-between">
              <div>
                {/* Tầng 1: Metadata */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/60">
                  <span className="flex items-center gap-2 text-[13px] sm:text-[15px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full font-bold uppercase tracking-wider select-none">
                    <img src={vietnamAirlinesLogo} alt="Vietnam Airlines Logo" className="h-8 sm:h-10 w-auto object-contain flex-shrink-0" />
                    <span>Vietnam Airlines</span>
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[12px] sm:text-[13px] select-none font-semibold">
                    <Calendar size={14} className="text-slate-500" />
                    <span>2024 - 2025</span>
                  </div>
                </div>

                {/* Tầng 2: Title & Role */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[20px] sm:text-[23px] font-medium text-white leading-snug tracking-tight">
                    {isEnglish ? "Lotus Publisher Project" : "Dự án Lotus Publisher"}
                  </h3>
                  <ArrowUpRight size={22} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
                <div className="inline-block border border-slate-800/80 bg-slate-900/50 text-cyan-400 font-extrabold uppercase tracking-widest text-[11px] px-3.5 py-1.5 rounded-md mb-6 select-none">
                  {isEnglish ? "ROLE: E-COMMERCE AFFILIATE GROWTH TEAM LEADER" : "VAI TRÒ: TRƯỞNG NHÓM TĂNG TRƯỞNG AFFILIATE TMĐT"}
                </div>

                {/* Tầng 3: Details */}
                <ul className="space-y-4 text-[14px] sm:text-[15px] text-slate-300 leading-relaxed font-semibold mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Develop publisher ecosystem projects involving more than 1,000 personnel in Vietnam Airlines."
                        : "Phát triển dự án hệ sinh thái publisher liên quan đến hơn 1.000 nhân sự trong Vietnam Airlines."
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Build operational processes and affiliate engagement strategies for internal publisher development."
                        : "Xây dựng quy trình vận hành và chiến lược gắn kết affiliate cho hoạt động phát triển publisher nội bộ."
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Coordinate cross-functional systems to align commercial performance and brand equity."
                        : "Phối hợp hệ thống liên chức năng nhằm điều chỉnh hiệu suất thương mại và tài sản thương hiệu."
                      }
                    </span>
                  </li>
                </ul>
              </div>

              {/* Tầng 4: Wow Factor */}
              <div className="border-t border-slate-800/80 pt-6 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase select-none">
                    {isEnglish ? "Monthly Gross Commission" : "Hoa Hồng Gross Hàng Tháng"}
                  </div>
                  <span className="inline-block bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-black text-3xl sm:text-4xl select-text mt-1">
                    {isEnglish ? "400 Million" : "400 Triệu"}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] select-none">
                  📊
                </div>
              </div>
            </div>

            {/* Card 3: Highlands Coffee */}
            <div className="group bg-slate-950/40 border border-slate-800 rounded-3xl p-8 sm:p-10 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_20px_40px_rgba(8,47,73,0.3),_0_0_25px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col justify-between">
              <div>
                {/* Tầng 1: Metadata */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/60">
                  <span className="flex items-center gap-2 text-[13px] sm:text-[15px] bg-red-500/10 text-red-400 border border-red-500/20 px-4 py-2 rounded-full font-bold uppercase tracking-wider select-none">
                    <img src={highlandsCoffeeLogo} alt="Highlands Coffee Logo" className="h-5 sm:h-6 w-auto object-contain flex-shrink-0" />
                    <span>Highlands Coffee</span>
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[12px] sm:text-[13px] select-none font-semibold">
                    <Calendar size={14} className="text-slate-500" />
                    <span>Q2/2025</span>
                  </div>
                </div>

                {/* Tầng 2: Title & Role */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[20px] sm:text-[23px] font-medium text-white leading-snug tracking-tight">
                    {isEnglish ? "Highlands Coffee Affiliate Campaign" : "Chiến dịch Affiliate Highlands Coffee"}
                  </h3>
                  <ArrowUpRight size={22} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
                <div className="inline-block border border-slate-800/80 bg-slate-900/50 text-cyan-400 font-extrabold uppercase tracking-widest text-[11px] px-3.5 py-1.5 rounded-md mb-6 select-none">
                  {isEnglish ? "ROLE: E-COMMERCE AFFILIATE GROWTH TEAM LEADER" : "VAI TRÒ: TRƯỞNG NHÓM TĂNG TRƯỞNG AFFILIATE TMĐT"}
                </div>

                {/* Tầng 3: Details */}
                <ul className="space-y-4 text-[14px] sm:text-[15px] text-slate-300 leading-relaxed font-semibold mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Deploy and optimize affiliate campaigns for Highlands Coffee."
                        : "Triển khai và tối ưu chiến dịch affiliate cho Highlands Coffee."
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Coordinate with publishers and partners to improve conversion performance and campaign growth."
                        : "Phối hợp với publisher và đối tác để cải thiện hiệu suất chuyển đổi và tăng trưởng chiến dịch."
                      }
                    </span>
                  </li>
                </ul>
              </div>

              {/* Tầng 4: Wow Factor */}
              <div className="border-t border-slate-800/80 pt-6 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase select-none">
                    {isEnglish ? "Campaign Revenue" : "Doanh Thu Chiến Dịch"}
                  </div>
                  <span className="inline-block bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-black text-3xl sm:text-4xl select-text mt-1">
                    {isEnglish ? "500 Million" : "500 Triệu"}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] select-none">
                  ☕
                </div>
              </div>
            </div>

            {/* Card 4: Mobile App */}
            <div className="group bg-slate-950/40 border border-slate-800 rounded-3xl p-8 sm:p-10 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_20px_40px_rgba(8,47,73,0.3),_0_0_25px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col justify-between">
              <div>
                {/* Tầng 1: Metadata */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/60">
                  <span className="flex items-center gap-2 text-[13px] sm:text-[15px] bg-green-50/10 text-green-400 border border-green-500/20 px-4 py-2 rounded-full font-bold uppercase tracking-wider select-none">
                    <img src={beAppLogo} alt="BE App Logo" className="h-5 sm:h-6 w-auto object-contain flex-shrink-0 rounded-sm" />
                    <span>BE App / Mobile</span>
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[12px] sm:text-[13px] select-none font-semibold">
                    <Calendar size={14} className="text-slate-500" />
                    <span>2022 - 2023</span>
                  </div>
                </div>

                {/* Tầng 2: Title */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  <h3 className="text-[20px] sm:text-[23px] font-medium text-white leading-snug tracking-tight">
                    {isEnglish ? "Mobile App Performance Campaign" : "Chiến dịch Hiệu suất Ứng dụng Di động"}
                  </h3>
                  <ArrowUpRight size={22} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>

                {/* Tầng 3: Details */}
                <ul className="space-y-4 text-[14px] sm:text-[15px] text-slate-300 leading-relaxed font-semibold mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Manage and optimize performance campaigns for mobile applications targeting global agencies and international partners."
                        : "Quản lý và tối ưu các chiến dịch performance cho ứng dụng di động dành cho agency toàn cầu và đối tác quốc tế."
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Develop partnerships with global agencies to scale user acquisition campaigns for applications."
                        : "Phát triển quan hệ hợp tác với các agency toàn cầu để mở rộng quy mô các chiến dịch thu hút người dùng ứng dụng."
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Track campaign performance via AppsFlyer and Adjust to optimize CPI, conversion rates, and user quality."
                        : "Theo dõi hiệu quả chiến dịch thông qua AppsFlyer và Adjust để tối ưu CPI, tỷ lệ chuyển đổi và chất lượng người dùng."
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>
                      {isEnglish 
                        ? "Contributed to generating user acquisition loops through partnership with a leading global agency."
                        : "Góp phần tạo ra các vòng lặp thu hút người dùng thông qua hợp tác với một agency toàn cầu hàng đầu."
                      }
                    </span>
                  </li>
                </ul>
              </div>

              {/* Tầng 4: Wow Factor */}
              <div className="border-t border-slate-800/80 pt-6 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase select-none">
                    {isEnglish ? "BE App Conversions" : "Lượt Chuyển Đổi BE App"}
                  </div>
                  <span className="inline-block bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-black text-3xl sm:text-4xl select-text mt-1">
                    10.000+
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] select-none">
                  📱
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER / CONNECT */}
      <footer id="connect" className="bg-gray-900 text-white pt-16 pb-12 px-5 sm:px-8 lg:px-12 relative z-10 border-t border-gray-800">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-800 pb-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-2 select-text">
              {isEnglish ? "Ready to scale your digital dominance?" : "Sẵn sàng mở rộng mức độ thống lĩnh kỹ thuật số của bạn?"}
            </h2>
            <p className="text-gray-400 text-sm max-w-md select-text">
              {isEnglish 
                ? "Let's craft category-leading digital solutions and scale your performance marketing networks to new horizons."
                : "Hãy cùng tạo ra các giải pháp kỹ thuật số dẫn đầu thị trường và nâng tầm mạng lưới tiếp thị hiệu suất của bạn lên những tầm cao mới."
              }
            </p>
          </div>
          <a 
            href="mailto:nguyenducthanh122@gmail.com" 
            className="bg-[#F26522] hover:bg-[#e05a1a] text-white px-6 py-3 rounded-full font-medium text-sm transition-colors duration-300 shadow-lg text-center"
          >
            {isEnglish ? "Connect with Nguyen Duc Thanh" : "Kết nối với Nguyễn Đức Thành"}
          </a>
        </div>
        <div className="w-full max-w-[1440px] mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            {isEnglish 
              ? "© 2026 Mr.Thanh. Built in collaboration with Nguyen Duc Thanh. All rights reserved."
              : "© 2026 Mr.Thanh. Được xây dựng bởi Nguyễn Đức Thành. Bảo lưu mọi quyền."
            }
          </p>
          <div className="flex gap-6 select-none text-[14px] sm:text-[16px] text-gray-300 font-semibold">
            <a href="https://linkedin.com/in/brian-nguyen-b560b0170/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              {isEnglish ? "LinkedIn Profile" : "Trang LinkedIn"}
            </a>
            <span className="text-gray-600">|</span>
            <span>Hotline: +84 965 965 495</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
