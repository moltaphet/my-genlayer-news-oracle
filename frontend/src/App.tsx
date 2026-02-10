import { useState, useEffect } from 'react'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = '#020617';
    document.body.style.margin = '0';
  }, []);

  const handleAnalyze = () => {
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      setResult({
        trustScore: "88/100",
        aiOpinion: "While the core facts align with official records, the linguistic framing suggests a slight emotional bias. As an AI, I recommend cross-referencing with primary sources to avoid the subtle narrative steering present in this text."
      })
      setLoading(false)
    }, 2500)
  }

  return (
    <div style={{ backgroundColor: '#020617', color: '#e2e8f0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      
      {/* Background Watermark */}
      <div style={{ position: 'fixed', fontSize: '10vw', fontWeight: '900', color: 'rgba(255, 255, 255, 0.02)', zIndex: 0, pointerEvents: 'none' }}>GENLAYER</div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', width: '100%', backgroundColor: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', padding: '40px', borderRadius: '35px', border: '1px solid rgba(59, 130, 246, 0.2)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
        <h2 style={{ color: '#60a5fa', textAlign: 'center', letterSpacing: '2px', fontSize: '1.8rem' }}>NEWS ORACLE</h2>
        
        <textarea 
          style={{ width: '100%', height: '150px', backgroundColor: '#020617', color: 'white', border: '1px solid #1e293b', borderRadius: '20px', padding: '20px', marginBottom: '20px', outline: 'none', resize: 'none' }}
          placeholder="Paste the news article here for AI perspective..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button 
          onClick={handleAnalyze}
          disabled={loading || !text}
          style={{ width: '100%', padding: '18px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '18px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}
        >
          {loading ? 'AI IS THINKING...' : 'ANALYZE CONTENT'}
        </button>

        {result && (
          <div style={{ marginTop: '30px', animation: 'fadeIn 0.5s ease' }}>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              {/* Trust Score Corner */}
              <div style={{ flex: '1', padding: '15px', backgroundColor: 'rgba(74, 222, 128, 0.1)', borderRadius: '15px', border: '1px solid #4ade80', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: '#4ade80', fontWeight: 'bold' }}>TRUST SCORE</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '900' }}>{result.trustScore}</div>
              </div>
              
              {/* AI Badge */}
              <div style={{ flex: '2', padding: '15px', backgroundColor: 'rgba(96, 165, 250, 0.1)', borderRadius: '15px', border: '1px solid #60a5fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>🤖 AI AGENT ACTIVE</span>
              </div>
            </div>

            {/* AI Opinion Section */}
            <div style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', borderLeft: '4px solid #60a5fa' }}>
              <div style={{ fontSize: '0.75rem', color: '#60a5fa', marginBottom: '8px', fontWeight: 'bold' }}>AI PERSPECTIVE:</div>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#cbd5e1', fontStyle: 'italic' }}>
                "{result.aiOpinion}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App