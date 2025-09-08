import { Button } from "./ui/button";
import { Layers, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white sticky top-0 z-50" style={{ borderBottom: '1px solid #DEE2E6' }}>
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Layers className="w-8 h-8" style={{ color: '#00BCD4' }} />
            <span className="text-xl font-bold" style={{ fontFamily: 'Montserrat', color: '#2C3E50' }}>
              The UX Suite
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50"
              style={{ 
                fontFamily: 'Montserrat', 
                fontWeight: '500',
                color: '#34495E'
              }}
            >
              Features
            </button>
            <button 
              className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50"
              style={{ 
                fontFamily: 'Montserrat', 
                fontWeight: '500',
                color: '#34495E'
              }}
            >
              Community
            </button>
            <Button 
              className="px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
              style={{ 
                backgroundColor: '#00BCD4',
                fontFamily: 'Montserrat',
                fontWeight: '600'
              }}
            >
              Join Waitlist
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" style={{ color: '#34495E' }}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}