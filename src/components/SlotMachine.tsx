import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gem, Heart, Skull, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCasinoStore } from '@/store/useCasinoStore';
import confetti from 'canvas-confetti';
import { cn } from '@/lib/utils';
const SYMBOLS = [
  { icon: Sparkles, id: 'butterfly', color: 'text-pink-500', value: 10 },
  { icon: Heart, id: 'rose', color: 'text-red-500', value: 5 },
  { icon: Gem, id: 'diamond', color: 'text-blue-400', value: 8 },
  { icon: Skull, id: 'skull', color: 'text-gray-400', value: 2 },
  { icon: Zap, id: 'spade', color: 'text-purple-500', value: 3 },
];
const REEL_COUNT = 3;
export function SlotMachine() {
  const balance = useCasinoStore((s) => s.balance);
  const deductBalance = useCasinoStore((s) => s.deductBalance);
  const addBalance = useCasinoStore((s) => s.addBalance);
  const [reels, setReels] = useState([0, 1, 2]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastWin, setLastWin] = useState<number | null>(null);
  const [bet, setBet] = useState(100);
  const spin = useCallback(() => {
    if (balance < bet || isSpinning) return;
    deductBalance(bet);
    setIsSpinning(true);
    setLastWin(null);
    // Simulate spinning delay
    setTimeout(() => {
      const newReels = reels.map(() => Math.floor(Math.random() * SYMBOLS.length));
      setReels(newReels);
      setIsSpinning(false);
      // Check for win
      const allSame = newReels.every(v => v === newReels[0]);
      if (allSame) {
        const winAmount = bet * SYMBOLS[newReels[0]].value;
        addBalance(winAmount);
        setLastWin(winAmount);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF1493', '#FFD700', '#ffffff']
        });
      } else if (new Set(newReels).size === 2) {
        // Two of a kind mini-win
        const winAmount = bet * 1.5;
        addBalance(winAmount);
        setLastWin(winAmount);
      }
    }, 2000);
  }, [balance, bet, isSpinning, reels, addBalance, deductBalance]);
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="glass-panel p-8 rounded-[3rem] border-2 border-pink-500/30 relative overflow-hidden shadow-neon-pink">
        {/* Slot Window */}
        <div className="grid grid-cols-3 gap-4 bg-black/60 p-6 rounded-2xl border border-white/5 relative">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black z-10" />
          {reels.map((symbolIdx, i) => (
            <div key={i} className="h-40 bg-pink-500/5 rounded-xl border border-pink-500/10 flex items-center justify-center overflow-hidden relative">
              <motion.div
                key={isSpinning ? 'spinning' : 'stopped'}
                initial={isSpinning ? { y: 0 } : { y: -20, opacity: 0 }}
                animate={isSpinning ? { y: -500 } : { y: 0, opacity: 1 }}
                transition={isSpinning ? { duration: 0.1, repeat: Infinity, ease: "linear" } : { type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col gap-8"
              >
                {Array.from({ length: isSpinning ? 10 : 1 }).map((_, j) => {
                  const SvgIcon = SYMBOLS[isSpinning ? (symbolIdx + j) % SYMBOLS.length : symbolIdx].icon;
                  return (
                    <SvgIcon 
                      key={j} 
                      className={cn("w-16 h-16", isSpinning ? "opacity-20 blur-sm" : SYMBOLS[symbolIdx].color)} 
                    />
                  );
                })}
              </motion.div>
            </div>
          ))}
          {/* Payline */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-pink-500/20 -translate-y-1/2 z-20 pointer-events-none shadow-[0_0_10px_rgba(255,20,147,0.5)]" />
        </div>
        {/* Win Display */}
        <div className="h-12 flex items-center justify-center mt-6">
          <AnimatePresence>
            {lastWin && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-2xl font-bold text-ink-gold neon-text"
              >
                WIN +{lastWin.toLocaleString()} TOKENS!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-6 glass-panel p-6 rounded-3xl">
        <div className="flex-1 space-y-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Wager Amount</p>
          <div className="flex items-center gap-2">
            {[50, 100, 500, 1000].map((amt) => (
              <button
                key={amt}
                onClick={() => setBet(amt)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-bold transition-all",
                  bet === amt ? "bg-pink-500 text-white shadow-neon-pink" : "bg-white/5 text-muted-foreground hover:bg-white/10"
                )}
              >
                {amt}
              </button>
            ))}
          </div>
        </div>
        <Button
          onClick={spin}
          disabled={isSpinning || balance < bet}
          className="w-full sm:w-48 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 hover:to-pink-400 text-xl font-black elegant-header tracking-widest shadow-neon-pink disabled:opacity-50 transition-all active:scale-95"
        >
          {isSpinning ? 'SPINNING...' : 'SPIN'}
        </Button>
      </div>
    </div>
  );
}