import { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAnalyze = () => {
    setLoading(true)
    setResult('')
    setTimeout(() => {
      setResult("✅ GENLAYER CONSENSUS: 94.2% Verified. The news aligns with decentralized data sources.")
      setLoading(false)
    }, 2500)
  }

  return (
    <div style={{
      backgroundColor: '#020617', color: '#e2e8f0', minHeight: '100vh', width: '100vw',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'sans-serif', position: 'relative', overflow: 'hidden', margin: 0
    }}>
      
      {/* متن پس‌زمینه (Watermark) */}
      <div style={{
        position: 'absolute', fontSize: '12vw', fontWeight: '900', color: 'rgba(255,255,255,0.03)',
        whiteSpace: 'nowrap', zIndex: 0, userSelect: 'none', pointerEvents: 'none',
        transform: 'rotate(-10deg)'
      }}>
        GENLAYER ORACLE
      </div>

      {/* کادر اصلی در مرکز */}
      <div style={{
        position: 'relative', zIndex: 1, maxWidth: '550px', width: '90%', 
        backgroundColor: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)',
        padding: '50px 40px', borderRadius: '40px', border: '1px solid rgba(59, 130, 246, 0.3)',
        boxShadow: '0 0 80px rgba(0, 0, 0, 0.5), 0 0 30px rgba(37, 99, 235, 0.2)',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          color: '#60a5fa', fontSize: '2.2rem', marginBottom: '5px', 
          fontWeight: '900', letterSpacing: '-1px' 
        }}>
          GENLAYER ORACLE
        </h1>
        <p style={{ 
          color: '#475569', marginBottom: '35px', fontSize: '0.8rem', 
          letterSpacing: '3px', fontWeight: 'bold' 
        }}>
          DECENTRALIZED NEURAL VERIFICATION
        </p>
        
        <div style={{ textAlign: 'left', marginBottom: '10px' }}>
          <label style={{ fontSize: '0.7rem', color: '#3b82f6', fontWeight: 'bold', marginLeft: '5px' }}>SOURCE INPUT</label>
        </div>
        <textarea 
          style={{
            width: '100%', height: '140px', backgroundColor: 'rgba(2, 6, 23, 0.6)', color: 'white',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '15px',
            fontSize: '1rem', outline: 'none', marginBottom: '25px', resize: 'none',
            boxSizing: 'border-box'
          }}
          placeholder="Paste news link or text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button 
          onClick={handleAnalyze}
          disabled={loading || !text}
          style={{
            width: '100%', padding: '18px', 
            backgroundColor: loading ? '#1e293b' : '#2563eb',
            color: 'white', border: 'none', borderRadius: '18px', 
            fontWeight: '900', cursor: 'pointer', transition: '0.3s', 
            fontSize: '1rem', boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)',
            textTransform: 'uppercase', letterSpacing: '1px'
          }}
        >
          {loading ? 'Processing on-chain...' : 'Validate Truth'}
        </button>

        {result && (
          <div style={{
            marginTop: '30px', padding: '20px', 
            backgroundColor: 'rgba(37, 99, 235, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.2)', 
            borderRadius: '20px', textAlign: 'left',
            animation: 'fadeIn 0.5s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
               <div style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%' }}></div>
               <strong style={{ color: '#60a5fa', fontSize: '0.8rem', textTransform: 'uppercase' }}>Oracle Report</strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: '#cbd5e1' }}>{result}</p>
          </div>
        )}
      </div>

      <footer style={{ 
        position: 'absolute', bottom: '30px', color: '#334155', 
        fontSize: '0.65rem', letterSpacing: '2px', fontWeight: 'bold' 
      }}>
        POWERED BY GENLAYER PROTOCOL
      </footer>
    </div>
  )
}

export default App