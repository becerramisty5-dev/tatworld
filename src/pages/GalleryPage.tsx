import React from 'react';
import { useCasinoStore } from '@/store/useCasinoStore';
import { motion } from 'framer-motion';
import { Lock, CheckCircle2, Sparkles, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
const ARTWORK = [
  { id: 't1', name: 'Gilded Butterfly', cost: 1000, color: 'from-pink-500 to-purple-500' },
  { id: 't2', name: 'Neon Rose', cost: 2500, color: 'from-red-500 to-pink-600' },
  { id: 't3', name: 'Chrome Skull', cost: 5000, color: 'from-gray-700 to-gray-900' },
  { id: 't4', name: 'Midnight Moth', cost: 7500, color: 'from-indigo-900 to-blue-900' },
  { id: 't5', name: 'Celestial Wing', cost: 15000, color: 'from-yellow-400 to-orange-500' },
  { id: 't6', name: 'Eternal Soul', cost: 50000, color: 'from-fuchsia-600 to-pink-400' },
];
export function GalleryPage() {
  const balance = useCasinoStore((s) => s.balance);
  const unlocked = useCasinoStore((s) => s.unlockedTattoos);
  const unlock = useCasinoStore((s) => s.unlockTattoo);
  const handleUnlock = (id: string, cost: number, name: string) => {
    if (unlock(id, cost)) {
      toast.success(`Unlocked ${name}!`, {
        description: "The masterpiece has been added to your collection."
      });
    } else {
      toast.error("Insufficient Tokens", {
        description: "Keep spinning the reels to earn more tokens!"
      });
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-black elegant-header neon-text mb-2">Ink Gallery</h1>
          <p className="text-muted-foreground">Unlock exclusive tattoo flash art with your winnings.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTWORK.map((art) => {
            const isUnlocked = unlocked.includes(art.id);
            return (
              <motion.div
                key={art.id}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-3xl overflow-hidden flex flex-col group"
              >
                <div className={`aspect-square bg-gradient-to-br ${art.color} relative p-12 flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Sparkles className="w-32 h-32 text-white/40 group-hover:scale-110 transition-transform duration-500" />
                  {!isUnlocked && (
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center">
                      <Lock className="w-12 h-12 text-white/60" />
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold elegant-header">{art.name}</h3>
                    {isUnlocked && <CheckCircle2 className="w-6 h-6 text-pink-500" />}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Gem className="w-4 h-4 text-pink-500" />
                      <span className="font-mono font-bold text-pink-400">{art.cost.toLocaleString()}</span>
                    </div>
                    <Button
                      onClick={() => handleUnlock(art.id, art.cost, art.name)}
                      disabled={isUnlocked}
                      variant={isUnlocked ? "ghost" : "default"}
                      className={isUnlocked ? "text-pink-500" : "bg-pink-500 hover:bg-pink-400 shadow-neon-pink"}
                    >
                      {isUnlocked ? "Unlocked" : "Unlock Now"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}