import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gem, Image as ImageIcon, Home } from 'lucide-react';
import { useCasinoStore } from '@/store/useCasinoStore';
import { cn } from '@/lib/utils';
export function Navigation() {
  const balance = useCasinoStore((s) => s.balance);
  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-pink-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-neon-pink group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="hidden sm:block text-xl font-bold elegant-header tracking-tighter neon-text">
                Ink & Wings
              </span>
            </Link>
            <div className="flex items-center gap-4 text-sm font-medium">
              <Link to="/slots" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                <Gem className="w-4 h-4" /> Slots
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                <ImageIcon className="w-4 h-4" /> Gallery
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center gap-2 shadow-neon-pink">
              <Gem className="w-4 h-4 text-pink-500" />
              <span className="font-mono font-bold text-pink-400">{balance.toLocaleString()}</span>
              <span className="text-[10px] uppercase tracking-widest text-pink-500/60 font-bold ml-1">Tokens</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}