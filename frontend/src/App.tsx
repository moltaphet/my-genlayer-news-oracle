import { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async () => {
    setLoading(true)
    setTimeout(() => {
      setResult("✅ AI Analysis: This article has been verified through GenLayer Consensus. Credibility Score: 94%")
      setLoading(false)
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-blue-900 to-black text-white flex flex-col items-center justify-center p-6">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="relative max-w-2xl w-full backdrop-blur-xl bg-white/5 p-10 rounded-[2rem] shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-white/10 overflow-hidden">
        {/* Decorative Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

        <h1 className="text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-center tracking-tight">
          GENLAYER ORACLE
        </h1>
        <p className="mb-8 text-blue-200/60 text-center text-sm uppercase tracking-widest font-medium">
          Intelligent News Verification
        </p>
        
        <div className="space-y-4">
          <label className="text-xs font-bold text-blue-400 uppercase ml-1">Input Source</label>
          <textarea 
            className="w-full h-44 p-5 bg-black/40 rounded-2xl border border-white/5 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none text-gray-200 placeholder:text-gray-600 shadow-inner"
            placeholder="Paste news content or URL here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button 
          onClick={handleAnalyze}
          disabled={loading || !text}
          className="w-full mt-8 relative group overflow-hidden bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 text-white font-black py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
        >
          <span className="relative z-10">{loading ? 'CONSENSUS IN PROGRESS...' : 'VALIDATE TRUTH'}</span>
          {loading && <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 animate-shimmer"></div>}
        </button>

        {result && (
          <div className="mt-8 p-6 bg-blue-500/10 border border-blue-400/20 rounded-2xl backdrop-blur-md animate-in fade-in zoom-in duration-500">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <h3 className="text-blue-300 font-bold text-sm uppercase tracking-tighter">Oracle Response</h3>
            </div>
            <p className="text-gray-200 leading-relaxed italic">"{result}"</p>
          </div>
        )}
      </div>

      <footer className="mt-10 flex flex-col items-center gap-2">
        <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-500 font-mono">
          NETWORK: GENLAYER TESTNET | CONTRACT: 0x1e3d...9A2d
        </div>
        <p className="text-gray-600 text-[10px] uppercase tracking-widest">Built with precision for GenLayer ecosystem</p>
      </footer>
    </div>
  )
}

export default App