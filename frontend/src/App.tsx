import { useState, useEffect } from 'react'

// رفع خطای تایپ که توی اسکرین‌شات ۱۶:۰۴ داشتی
interface AnalysisResult {
  trustScore: string;
  aiOpinion: string;
}

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = '#020617';
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
  }, []);

  const handleAnalyze = () => {
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      setResult({
        trustScore: "88/100",
        aiOpinion: "The facts align with decentralized clusters, but the emotional tone is high. Recommend verifying the primary source."
      })
      setLoading(false)
    }, 2500)
  }

  return (
    <div style={{
      backgroundColor: '#020617', color: '#e2e8f0', 
      height: '100vh', width: '100vw',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'sans-serif', position: 'fixed', top: 0, left: 0
    }}>
      
      {/* واترمارک پس‌زمینه که باید وسط باشه */}
      <div style={{
        position: 'absolute', fontSize: '10vw', fontWeight: '900', 
        color: 'rgba(255, 255, 255, 0.02)', zIndex: 0, userSelect: 'none', 
        pointerEvents: 'none', textAlign: 'center', width: '100%'
      }}>
        GENLAYER
      </div>

      {/* کادر اصلی - کاملاً وسط‌چین شده */}
      <div style={{
        position: 'relative', zIndex: 1, maxWidth: '550px', width: '90%', 
        backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(15px)',
        padding: '40px', borderRadius: '40px', 
        border: '1px solid rgba(59, 130, 246, 0.3)',
        boxShadow: '0 0 100px rgba(0, 0, 0, 0.8)',
        textAlign: 'center', boxSizing: 'border-box'
      }}>
        <h2 style={{ color: '#60a5fa', fontSize: '2rem', margin: '0 0 20px 0', fontWeight: '900' }}>AI NEWS ORACLE</h2>
        
        <textarea 
          style={{
            width: '100%', height: '140px', backgroundColor: '#020617', color: 'white',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: '25px', padding: '20px',
            fontSize: '1rem', outline: 'none', marginBottom: '20px', resize: 'none', boxSizing: 'border-box'
          }}
          placeholder="Paste news content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button 
          onClick={handleAnalyze}
          disabled={loading || !text}
          style={{
            width: '100%', padding: '18px', backgroundColor: loading ? '#1e293b' : '#2563eb',
            color: 'white', border: 'none', borderRadius: '20px', fontWeight: 'bold',
            cursor: 'pointer', fontSize: '1rem'
          }}
        >
          {loading ? 'ANALYZING...' : 'GET AI PERSPECTIVE'}
        </button>

        {result && (
          <div style={{ marginTop: '25px', textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <div style={{ flex: '1', padding: '12px', backgroundColor: 'rgba(74, 222, 128, 0.1)', borderRadius: '15px', border: '1px solid #4ade80', textAlign: 'center' }}>
                <div style={{ fontSize: '0.6rem', color: '#4ade80' }}>TRUST SCORE</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '900' }}>{result.trustScore}</div>
              </div>
              <div style={{ flex: '2', padding: '12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '15px', border: '1px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>🤖 AI ANALYSIS ACTIVE</span>
              </div>
            </div>

            <div style={{ padding: '15px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '15px', borderLeft: '4px solid #3b82f6' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1', fontStyle: 'italic', lineHeight: '1.4' }}>
                "{result.aiOpinion}"
              </p>
            </div>
          </div>
        )}
      </div>

      {/* لینک‌های اجتماعی در گوشه */}
      <div style={{ position: 'absolute', top: '30px', right: '30px', display: 'flex', gap: '20px' }}>
        <a href="https://x.com/0xehs4hn" target="_blank" rel="noreferrer" style={{ opacity: 0.5 }}>
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
      </div>
    </div>
  )
}

export default App