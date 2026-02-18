
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT, PROGRAMS, LOCATIONS } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProgramsMobile, setShowProgramsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowProgramsMobile(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || location.pathname !== '/' ? 'bg-[#1C1C1C] shadow-2xl py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex flex-col group">
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-black text-gold tracking-tighter leading-none">ACTION</span>
            <span className="ml-1 text-2xl md:text-3xl font-bold text-white tracking-tighter leading-none">COACH</span>
          </div>
          <span className="text-[10px] md:text-xs font-black text-white/80 tracking-widest uppercase mt-0.5">Business Growth Partners</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Programs Dropdown */}
          <div className="relative group/dropdown">
            <div className="flex items-center py-2 cursor-pointer group">
              <Link to="/programs" className="text-xs font-black uppercase tracking-widest hover:text-gold transition-colors">
                Programs
              </Link>
              <span className="ml-1.5 text-[8px] opacity-40 group-hover/dropdown:rotate-180 transition-transform duration-300">▼</span>
            </div>
            
            {/* Dropdown Menu - Includes a hidden bridge to prevent mouse-out flicker */}
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-2 group-hover/dropdown:translate-y-0">
              <div className="w-80 bg-[#262626] border border-white/10 shadow-2xl overflow-hidden">
                <div className="p-2 grid gap-1">
                  <Link to="/programs" className="block px-4 py-3 text-[10px] font-black uppercase tracking-widest text-gold border-b border-white/5 mb-1 hover:bg-gold hover:text-black transition-all">
                    All Programs Overview
                  </Link>
                  {PROGRAMS.map(p => (
                    <Link 
                      key={p.id} 
                      to={`/programs/${p.id}`} 
                      className="block px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-white/80 hover:bg-gold hover:text-black hover:pl-6 transition-all duration-200"
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link to="/about" className="text-xs font-black uppercase tracking-widest hover:text-gold transition-colors">About</Link>
          <Link to="/events" className="text-xs font-black uppercase tracking-widest hover:text-gold transition-colors">Events</Link>
          <Link to="/reviews" className="text-xs font-black uppercase tracking-widest hover:text-gold transition-colors">Reviews</Link>
          
          {/* Locations Dropdown */}
          <div className="relative group/loc">
            <div className="flex items-center py-2 cursor-pointer">
              <span className="text-xs font-black uppercase tracking-widest hover:text-gold transition-colors">Locations</span>
              <span className="ml-1.5 text-[8px] opacity-40 group-hover/loc:rotate-180 transition-transform duration-300">▼</span>
            </div>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/loc:opacity-100 group-hover/loc:visible transition-all duration-300 transform translate-y-2 group-hover/loc:translate-y-0">
              <div className="w-56 bg-[#262626] border border-white/10 shadow-2xl overflow-hidden">
                <div className="p-2 grid gap-1">
                  {LOCATIONS.map(l => (
                    <Link key={l.id} to={`/locations/${l.id}`} className="block px-4 py-3 text-[11px] font-black uppercase tracking-wider hover:bg-gold hover:text-black transition-all">
                      {l.city}, {l.state}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a href={`tel:${CONTACT.PHONE.replace(/\D/g,'')}`} className="text-lg font-black text-gold ml-4 group hover:scale-105 transition-transform">
            {CONTACT.PHONE}
          </a>
          
          <Link 
            to="/book" 
            className="bg-gold text-black px-6 py-3 text-xs font-black uppercase tracking-[0.15em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Free Strategy Session
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2 relative z-50">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-[#1C1C1C] transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="h-full overflow-y-auto pt-28 pb-32 px-8">
          <div className="space-y-6">
            <div>
              <button 
                onClick={() => setShowProgramsMobile(!showProgramsMobile)}
                className="w-full text-left flex items-center justify-between group"
              >
                <span className="text-4xl font-black uppercase tracking-tighter">Programs</span>
                <span className={`text-2xl text-gold transition-transform duration-300 ${showProgramsMobile ? 'rotate-180' : ''}`}>▼</span>
              </button>
              
              <div className={`mt-4 space-y-4 overflow-hidden transition-all duration-500 ${showProgramsMobile ? 'max-h-[800px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                <Link to="/programs" className="block text-gold text-lg font-black uppercase tracking-widest border-b border-gold/20 pb-2">View All Hub</Link>
                {PROGRAMS.map(p => (
                  <Link key={p.id} to={`/programs/${p.id}`} className="block text-white/70 text-base font-bold uppercase tracking-tight pl-4 border-l-2 border-gold/30 hover:border-gold hover:text-white transition-all">
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about" className="block text-4xl font-black uppercase tracking-tighter">About</Link>
            <Link to="/events" className="block text-4xl font-black uppercase tracking-tighter">Events</Link>
            <Link to="/reviews" className="block text-4xl font-black uppercase tracking-tighter">Reviews</Link>
            
            <div className="pt-10 space-y-8 border-t border-white/10">
               <div>
                  <p className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-2">Speak With Coach Bill</p>
                  <a href={`tel:${CONTACT.PHONE.replace(/\D/g,'')}`} className="block text-3xl font-black text-gold">{CONTACT.PHONE}</a>
               </div>
               <Link to="/book" className="block bg-gold text-black text-center py-5 font-black uppercase tracking-widest text-sm shadow-xl">
                 Book Strategy Session
               </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
