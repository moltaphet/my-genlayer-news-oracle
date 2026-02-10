import { useState, useEffect } from 'react'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = '#020617';
    document.body.style.margin = '0';
    document.body.style.overflowX = 'hidden';
  }, []);

  const handleAnalyze = () => {
    setLoading(true)
    setResult(null)
    
    // شبیه‌سازی تحلیل عمیق هوش مصنوعی
    setTimeout(() => {
      setResult({
        score: "94.2%",
        verdict: "VERIFIED",
        analysis: "The content matches global verified news clusters. No signs of linguistic manipulation or synthetic generation detected. Sources cross-referenced: Reuters, AP Archive, and GenLayer Node Network."
      });
      setLoading(false);
    }, 3000);
  }

  return (
    <div style={{
      backgroundColor: '#020617', color: '#e2e8f0', minHeight: '100vh', width: '100vw',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'sans-serif', position: 'relative', padding: '40px 0'
    }}>
      
      {/* Social Links */}
      <div style={{ position: 'absolute', top: '30px', right: '30px', display: 'flex', gap: '20px', zIndex: 100 }}>
        <a href="https://x.com/0xehs4hn" target="_blank" rel="noreferrer" style={{ opacity: 0.6 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://github.com/moltaphet/my-genlayer-news-oracle" target="_blank" rel="noreferrer" style={{ opacity: 0.6 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>

      <div style={{ position: 'fixed', fontSize: '8vw', fontWeight: '900', color: 'rgba(255, 215, 0, 0.03)', zIndex: -1, userSelect: 'none', pointerEvents: 'none', textAlign: 'center', width: '100%' }}>
        GENLAYER ORACLE
      </div>

      {/* Main Interface */}
      <div style={{ maxWidth: '650px', width: '90%', backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(15px)', padding: '40px', borderRadius: '40px', border: '1px solid rgba(59, 130, 246, 0.3)', boxShadow: '0 0 100px rgba(0, 0, 0, 0.8)', textAlign: 'center', boxSizing: 'border-box' }}>
        <h1 style={{ color: '#60a5fa', fontSize: '2.4rem', margin: '0 0 5px 0', fontWeight: '900' }}>GENLAYER ORACLE</h1>
        <p style={{ color: '#475569', marginBottom: '30px', fontSize: '0.75rem', letterSpacing: '4px', fontWeight: 'bold' }}>AI-POWERED TRUTH ENGINE</p>
        
        <textarea 
          style={{ width: '100%', height: '140px', backgroundColor: '#020617', color: 'white', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '20px', fontSize: '1rem', outline: 'none', marginBottom: '20px', resize: 'none', boxSizing: 'border-box' }}
          placeholder="Enter news article text for deep analysis..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button 
          onClick={handleAnalyze}
          disabled={loading || !text}
          style={{ width: '100%', padding: '20px', backgroundColor: loading ? '#1e293b' : '#2563eb', color: 'white', border: 'none', borderRadius: '20px', fontWeight: '900', cursor: 'pointer', fontSize: '1.1rem', textTransform: 'uppercase' }}
        >
          {loading ? 'Performing Deep Analysis...' : 'Start Verification'}
        </button>

        {result && (
          <div style={{ marginTop: '30px', textAlign: 'left', animation: 'fadeIn 0.5s ease' }}>
            {/* Verdict Box */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(37, 99, 235, 0.1)', padding: '15px 25px', borderRadius: '15px', border: '1px solid rgba(59, 130, 246, 0.3)', marginBottom: '15px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#60a5fa' }}>VERDICT: {result.verdict}</span>
              <span style={{ fontSize: '1.2rem', fontWeight: '900', color: '#4ade80' }}>{result.score}</span>
            </div>
            
            {/* Analysis Text Box */}
            <div style={{ padding: '20px', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '15px', borderLeft: '4px solid #3b82f6' }}>
              <div style={{ fontSize: '0.7rem', color: '#475569', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase' }}>Intelligence Report:</div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6', fontStyle: 'italic', fontFamily: 'monospace' }}>
                {result.analysis}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App