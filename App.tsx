
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import ProgramsHub from './pages/ProgramsHub';
import ProgramFreedom from './pages/ProgramFreedom';
import ProgramManagement from './pages/ProgramManagement';
import ProgramLeadership from './pages/ProgramLeadership';
import ProgramMasterclass from './pages/ProgramMasterclass';
import ProgramSales from './pages/ProgramSales';
import ProgramStrategic from './pages/ProgramStrategic';
import ProgramSpeaking from './pages/ProgramSpeaking';
import Booking from './pages/Booking';
import LocationPage from './pages/LocationPage';
import { CONTACT } from './constants';

const Footer: React.FC = () => (
  <footer className="bg-black py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-4 gap-12 text-left">
      <div className="col-span-2">
        <div className="flex items-center mb-6">
          <span className="text-2xl font-black text-gold tracking-tighter leading-none uppercase">ACTION</span>
          <span className="ml-1 text-2xl font-bold text-white tracking-tighter leading-none uppercase">COACH</span>
        </div>
        <p className="text-white/40 mb-8 max-w-sm text-sm">
          ActionCOACH Business Growth Partners is dedicated to the success of business owners across the Carolinas. Led by Master Coach Bill Gilliland.
        </p>
        <div className="text-white/60 text-xs space-y-2 uppercase tracking-widest font-bold">
          <p>{CONTACT.ADDRESS}</p>
          <p>{CONTACT.PHONE}</p>
        </div>
      </div>
      <div>
        <h4 className="text-gold font-black uppercase tracking-widest text-xs mb-8">Navigation</h4>
        <ul className="space-y-4 text-sm font-bold text-white/80">
          <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
          <li><Link to="/programs" className="hover:text-gold transition-colors">Our Programs</Link></li>
          <li><Link to="/reviews" className="hover:text-gold transition-colors">Client Reviews</Link></li>
          <li><Link to="/book" className="hover:text-gold transition-colors">Book Strategy Session</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-gold font-black uppercase tracking-widest text-xs mb-8">Locations</h4>
        <ul className="space-y-4 text-sm font-bold text-white/80">
          <li><Link to="/locations/asheville-nc" className="hover:text-gold transition-colors">Asheville, NC</Link></li>
          <li><Link to="/locations/charlotte-nc" className="hover:text-gold transition-colors">Charlotte, NC</Link></li>
          <li><Link to="/locations/raleigh-nc" className="hover:text-gold transition-colors">Raleigh, NC</Link></li>
          <li><Link to="/locations/greenville-sc" className="hover:text-gold transition-colors">Greenville, SC</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-10 border-t border-white/5 text-center text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">
      &copy; {new Date().getFullYear()} ActionCOACH Business Growth Partners. All Rights Reserved.
    </div>
  </footer>
);

const MobileStickyBar: React.FC = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden flex h-16 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] border-t border-white/5">
    <a href={`tel:${CONTACT.PHONE.replace(/\D/g,'')}`} className="flex-1 bg-[#262626] text-white flex items-center justify-center font-black uppercase text-xs tracking-tighter border-r border-white/5">
      Call Coach
    </a>
    <Link to="/book" className="flex-[2] bg-gold text-black flex items-center justify-center font-black uppercase text-xs tracking-tighter">
      Book Strategy Session
    </Link>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-gold selection:text-black">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<ProgramsHub />} />
            
            {/* Specific Program Pages */}
            <Route path="/programs/one-to-one-freedom" element={<ProgramFreedom />} />
            <Route path="/programs/management-program" element={<ProgramManagement />} />
            <Route path="/programs/leadership-program" element={<ProgramLeadership />} />
            <Route path="/programs/business-masterclass" element={<ProgramMasterclass />} />
            <Route path="/programs/sales-training" element={<ProgramSales />} />
            <Route path="/programs/strategic-planning" element={<ProgramStrategic />} />
            <Route path="/programs/speaking" element={<ProgramSpeaking />} />
            
            <Route path="/locations/:id" element={<LocationPage />} />
            <Route path="/book" element={<Booking />} />
            
            <Route path="/events" element={<div className="pt-60 pb-40 px-8 text-center bg-[#1C1C1C]"><h1 className="text-4xl font-black uppercase tracking-tighter">Events Calendar</h1><p className="mt-4 text-white/60">Upcoming masterclasses and webinars will be listed here soon.</p></div>} />
            <Route path="/reviews" element={<div className="pt-60 pb-40 px-8 text-center bg-[#1C1C1C]"><h1 className="text-4xl font-black uppercase tracking-tighter">Success Stories</h1><p className="mt-4 text-white/60">Complete client case studies and deep-dive testimonials coming soon.</p></div>} />
          </Routes>
        </main>
        <Footer />
        <MobileStickyBar />
      </div>
    </Router>
  );
};

export default App;
