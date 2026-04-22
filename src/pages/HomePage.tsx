import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gem, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { useCasinoStore } from '@/store/useCasinoStore';
import { motion } from 'framer-motion';
export function HomePage() {
  const balance = useCasinoStore((s) => s.balance);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-20 lg:py-24">
        <div className="text-center space-y-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <div className="px-4 py-1 rounded-full border border-pink-500/30 bg-pink-500/5 text-pink-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Welcome to the Grand Atelier
            </div>
            <h1 className="text-6xl md:text-8xl font-black elegant-header tracking-tighter mb-4">
              <span className="text-white">Ink</span> <span className="text-pink-500 neon-text">&</span> <span className="text-white">Wings</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Where feminine elegance meets the thrill of the spin. Collect exclusive tattoo flash art and master the Butterfly Slots.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/slots">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl aspect-[16/9] glass-panel p-8 flex flex-col justify-end"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Gem className="w-32 h-32 text-pink-500" />
              </div>
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2 text-pink-500 font-bold uppercase tracking-widest text-xs">
                  <Sparkles className="w-4 h-4" /> Live Now
                </div>
                <h2 className="text-4xl font-bold elegant-header">Butterfly Slots</h2>
                <p className="text-muted-foreground max-w-xs">Spin the reels and win tokens to unlock legendary artwork.</p>
                <div className="pt-4 flex items-center gap-2 text-pink-400 group-hover:translate-x-2 transition-transform">
                  Play Now <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </Link>
          <Link to="/gallery">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl aspect-[16/9] glass-panel p-8 flex flex-col justify-end"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ImageIcon className="w-32 h-32 text-white" />
              </div>
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2 text-pink-500 font-bold uppercase tracking-widest text-xs">
                  <ImageIcon className="w-4 h-4" /> Collection
                </div>
                <h2 className="text-4xl font-bold elegant-header text-white">Ink Gallery</h2>
                <p className="text-muted-foreground max-w-xs">Redeem your winnings for beautiful virtual tattoo designs.</p>
                <div className="pt-4 flex items-center gap-2 text-pink-400 group-hover:translate-x-2 transition-transform">
                  View Art <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl glass-panel">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Your Tokens</p>
              <p className="text-3xl font-mono font-bold text-pink-500">{balance.toLocaleString()}</p>
            </div>
            <div className="w-px h-12 bg-pink-500/20" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Status</p>
              <p className="text-3xl font-bold elegant-header text-white">VIP Club</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}