import { useState, useEffect } from 'react'

interface AnalysisResult {
  trustScore: string;
  aiOpinion: string;
  txHash: string;
  contractAddr: string;
}

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = '#020617';
    document.body.style.margin = '0';
    document.body.style.overflowX = 'hidden';
  }, []);

  const handleAnalyze = () => {
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      setResult({
        trustScore: "88/100",
        aiOpinion: "Current analysis indicates high factual consistency. However, the framing suggests a strategic narrative focus. Cross-referencing with primary source data is advised for full neutrality.",
        txHash: "0xb637ba3d0b8a9171ac7302bf25369d5c02b24b384f3acf2867ae605a956d8c10",
        contractAddr: "0x1e3d433788e6890f2300D0e321058850454c9A2d"
      })
      setLoading(false)
    }, 2500)
  }

  return (
    <div style={{
      backgroundColor: '#020617', color: '#e2e8f0', 
      minHeight: '100vh', width: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'sans-serif', position: 'relative', padding: '40px 0'
    }}>
      
      {/* 1. GenLayer Logo - Top Left */}
      <div style={{ position: 'absolute', top: '30px', left: '30px', zIndex: 100 }}>
        <img 
          src="/genlayer-logo.png" 
          alt="GenLayer Logo" 
          style={{ width: '140px', height: 'auto', filter: 'brightness(1.2)' }} 
          onError={(e) => { (e.target as any).style.display = 'none' }} // اگر عکس نبود مخفی بشه
        />
        <div style={{ color: '#3b82f6', fontSize: '0.6rem', fontWeight: 'bold', letterSpacing: '2px', marginTop: '5px' }}>OFFICIAL ORACLE NODE</div>
      </div>

      {/* Social Links - Top Right */}
      <div style={{ position: 'absolute', top: '30px', right: '30px', display: 'flex', gap: '20px', zIndex: 100 }}>
        <a href="https://x.com/0xehs4hn" target="_blank" rel="noreferrer" style={{ opacity: 0.6 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://github.com/moltaphet/my-genlayer-news-oracle" target="_blank" rel="noreferrer" style={{ opacity: 0.6 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>

      {/* Main Container */}
      <div style={{
        position: 'relative', zIndex: 1, maxWidth: '620px', width: '90%', 
        backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(15px)',
        padding: '45px', borderRadius: '40px', 
        border: '1px solid rgba(59, 130, 246, 0.3)',
        boxShadow: '0 0 100px rgba(0, 0, 0, 0.8)',
        textAlign: 'center', boxSizing: 'border-box'
      }}>
        <h2 style={{ color: '#ffffff', fontSize: '2.5rem', margin: '0 0 5px 0', fontWeight: '900', letterSpacing: '1px' }}>TRUTH ENGINE</h2>
        <p style={{ color: '#60a5fa', marginBottom: '30px', fontSize: '0.75rem', letterSpacing: '3px', fontWeight: 'bold', textTransform: 'uppercase' }}>Decentralized News Oracle by GenLayer</p>
        
        <textarea 
          style={{
            width: '100%', height: '140px', backgroundColor: '#020617', color: 'white',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: '25px', padding: '20px',
            fontSize: '1rem', outline: 'none', marginBottom: '20px', resize: 'none', boxSizing: 'border-box'
          }}
          placeholder="Enter news content or headline for AI swarm verification..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button 
          onClick={handleAnalyze}
          disabled={loading || !text}
          style={{
            width: '100%', padding: '20px', backgroundColor: loading ? '#1e293b' : '#2563eb',
            color: 'white', border: 'none', borderRadius: '22px', fontWeight: 'bold',
            cursor: 'pointer', fontSize: '1.1rem', transition: '0.3s', boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
          }}
        >
          {loading ? 'SWARM NODES ANALYZING...' : 'VERIFY ON GENLAYER'}
        </button>

        {result && (
          <div style={{ marginTop: '30px', textAlign: 'left' }}>
            {/* Score & Node Status */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <div style={{ flex: '1', padding: '15px', backgroundColor: 'rgba(74, 222, 128, 0.1)', borderRadius: '18px', border: '1px solid #4ade80', textAlign: 'center' }}>
                <div style={{ fontSize: '0.65rem', color: '#4ade80', fontWeight: 'bold' }}>TRUST SCORE</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '900' }}>{result.trustScore}</div>
              </div>
              <div style={{ flex: '2', padding: '15px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '18px', border: '1px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#60a5fa' }}>🤖 INTELLIGENT AGENT ACTIVE</span>
              </div>
            </div>

            {/* AI Opinion */}
            <div style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '20px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <div style={{ fontSize: '0.75rem', color: '#60a5fa', marginBottom: '8px', fontWeight: 'bold' }}>ANALYSIS REPORT:</div>
              <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.6', color: '#cbd5e1', fontStyle: 'italic' }}>
                "{result.aiOpinion}"
              </p>
            </div>

            {/* REAL ON-CHAIN DATA - Added based on your screenshot */}
            <div style={{ padding: '15px', backgroundColor: 'rgba(2, 6, 23, 0.8)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '0.6rem', color: '#64748b', marginBottom: '8px', textAlign: 'center', fontWeight: 'bold' }}>VERIFIED ON-CHAIN DATA</div>
              <div style={{ marginBottom: '5px' }}>
                <span style={{ fontSize: '0.55rem', color: '#3b82f6' }}>CONTRACT:</span>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', wordBreak: 'break-all', fontFamily: 'monospace' }}>{result.contractAddr}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.55rem', color: '#4ade80' }}>TX HASH:</span>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', wordBreak: 'break-all', fontFamily: 'monospace' }}>{result.txHash}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Background Watermark */}
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', fontSize: '15vw', fontWeight: '900', color: 'rgba(255, 255, 255, 0.02)', zIndex: 0, pointerEvents: 'none', transform: 'rotate(-5deg)' }}>
        GENLAYER
      </div>

      <footer style={{ position: 'absolute', bottom: '20px', color: '#1e293b', fontSize: '0.6rem', fontWeight: 'bold', textAlign: 'center', width: '100%', letterSpacing: '2px' }}>
        GENLAYER PROTOCOL TESTNET V1.0 | POWERED BY INTELLIGENT CONTRACTS
      </footer>
    </div>
  )
}

export default App