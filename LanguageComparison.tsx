import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Dumbbell, 
  Languages, 
  Target, 
  Info,
  ChevronRight,
  Globe
} from 'lucide-react';

export default function LanguageComparison() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      
      {/* Header */}
      <header className="p-8 md:p-12 flex flex-col items-center border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-10 blur-3xl" />
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-red-600 p-4 rounded-3xl mb-8 shadow-[0_0_40px_rgba(220,38,38,0.3)]"
        >
          <Languages size={48} className="text-white" />
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-center leading-none mb-4">
          Deutsch <span className="text-red-600">&</span> Español
        </h1>
        <p className="text-yellow-400 font-black uppercase tracking-[0.3em] text-xs md:text-sm text-center">
          Ինչո՞ւ գերմաներեն իմանալը կօգնի իսպաներենին
        </p>
      </header>

      <main className="max-w-4xl mx-auto p-6 md:p-12 space-y-12">
        
        {/* Section 1: Muscles */}
        <motion.section 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-600 group-hover:w-2 transition-all" />
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] hover:bg-white/[0.08] transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-400 p-3 rounded-2xl text-black">
                <Dumbbell size={32} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white italic">
                Լեզվական «մկաններ»
              </h2>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-slate-300 font-medium">
              Գերմաներենը բարդ լեզու է (հոլովներ, հոդեր, բայերի բարդ խոնարհում): Եթե դուք կարողացել եք սովորել գերմաներեն, ապա իսպաներենի քերականությունը ձեզ համար շատ ավելի պարզ կթվա: Ձեր ուղեղն արդեն սովոր է օտար լեզվի տրամաբանությանը:
            </p>
          </div>
        </motion.section>

        {/* Section 2: Vocabulary */}
        <motion.section 
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="absolute -right-4 top-0 bottom-0 w-1 bg-yellow-400 group-hover:w-2 transition-all" />
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] hover:bg-white/[0.08] transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-600 p-3 rounded-2xl text-white">
                <Zap size={32} />
              </div>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white italic">
                Բառապաշար
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl leading-relaxed text-slate-300 font-medium mb-12">
              Չնայած սրանք տարբեր խմբերի լեզուներ են, գերմաներենում կան հազարավոր լատինական արմատներով բառեր, որոնք նույնն են իսպաներենում:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { de: 'Studieren', es: 'Estudiar' },
                { de: 'Information', es: 'Información' },
                { de: 'Situation', es: 'Situación' }
              ].map((pair, i) => (
                <div key={i} className="bg-black p-6 rounded-3xl border border-white/5 flex flex-col gap-2">
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">DE / ES</div>
                  <div className="text-yellow-400 font-bold text-lg">{pair.de}</div>
                  <div className="text-red-600 font-bold text-lg">{pair.es}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm font-black uppercase tracking-widest text-slate-500 text-center">
              Դուք արդեն գիտեք հազարավոր բառեր
            </p>
          </div>
        </motion.section>

        {/* Section 3: Pronunciation */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 md:p-12 rounded-[3rem] shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 text-white opacity-10">
              <Globe size={120} strokeWidth={1} />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-black p-3 rounded-2xl text-white">
                <Target size={32} />
              </div>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white italic">
                Արտասանություն
              </h2>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-white font-medium relative z-10">
              Գերմաներենը սովորեցնում է հստակ արտասանել տառերը: Իսպաներենում ևս, ի տարբերություն անգլերենի, տառերը կարդացվում են այնպես, ինչպես գրվում են: Գերմաներենի «կարգապահությունը» կօգնի ձեզ ավելի արագ տիրապետել իսպանական հնչյուններին:
            </p>
          </div>
        </motion.section>

      </main>

      <footer className="p-12 flex flex-col items-center gap-4 border-t border-white/10 mt-12 bg-black">
        <div className="flex gap-4">
           <div className="w-12 h-1.5 bg-black border border-white/20 rounded-full" />
           <div className="w-12 h-1.5 bg-red-600 rounded-full" />
           <div className="w-12 h-1.5 bg-yellow-400 rounded-full" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[1em] text-slate-700">
          Sprachen Guide v1.0
        </p>
      </footer>
    </div>
  );
}
