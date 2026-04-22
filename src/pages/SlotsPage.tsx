import React from 'react';
import { SlotMachine } from '@/components/SlotMachine';
import { Gem, Sparkles, Heart } from 'lucide-react';
export function SlotsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12 flex flex-col items-center">
        <header className="text-center mb-12 space-y-2">
          <h1 className="text-5xl font-black elegant-header neon-text">Butterfly Slots</h1>
          <p className="text-muted-foreground">Match symbols for massive token payouts</p>
        </header>
        <SlotMachine />
        <section className="mt-20 w-full max-w-2xl">
          <h3 className="text-lg font-bold elegant-header text-white mb-6 border-b border-pink-500/20 pb-2">Paytable</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="glass-panel p-4 rounded-2xl flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-pink-500" />
              <div>
                <p className="text-xs font-bold text-muted-foreground">3x Butterfly</p>
                <p className="text-lg font-mono font-bold text-pink-400">10x Bet</p>
              </div>
            </div>
            <div className="glass-panel p-4 rounded-2xl flex items-center gap-3">
              <Gem className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-xs font-bold text-muted-foreground">3x Diamond</p>
                <p className="text-lg font-mono font-bold text-pink-400">8x Bet</p>
              </div>
            </div>
            <div className="glass-panel p-4 rounded-2xl flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-xs font-bold text-muted-foreground">3x Rose</p>
                <p className="text-lg font-mono font-bold text-pink-400">5x Bet</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}