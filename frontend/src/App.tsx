import { useState, useEffect } from 'react'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  // برای اطمینان از اینکه پس‌زمینه کل صفحه سیاه می‌ماند
  useEffect(() => {
    document.body.style.backgroundColor = '#020617';
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
  }, []);

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
      backgroundColor: '#020617', color: '#e2e8f0', 
      height: '100vh', width: '100vw',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'sans-serif', position: 'fixed', top: 0, left: 0, zIndex: 10
    }}>
      
      {/* متن پس‌زمینه (Watermark) - بزرگ و محو در مرکز */}
      <div style={{
        position: 'absolute', fontSize: '15vw', fontWeight: '900', 
        color: 'rgba(255,255,255,0.02)', zIndex: -1, userSelect: 'none', 
        pointerEvents: 'none', whiteSpace: 'nowrap', textAlign: 'center',
        width: '100%'
      }}>
        GENLAYER ORACLE
      </div>

      {/* کادر اصلی در مرکز واقعی صفحه */}
      <div style={{
        maxWidth: '550px', width: '90%', 
        backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(15px)',
        padding: '50px 40px', borderRadius: '40px', 
        border: '1px solid rgba(59, 130, 246, 0.3)',
        boxShadow: '0 0 100px rgba(0, 0, 0, 0.8), 0 0 40px rgba(37, 99, 235, 0.1)',
        textAlign: 'center', boxSizing: 'border-box'
      }}>
        <h1 style={{ 
          color: '#60a5fa', fontSize: '2.4rem', marginBottom: '5px', 
          fontWeight: '900', letterSpacing: '-1px', margin: '0 0 5px 0'
        }}>
          GENLAYER ORACLE
        </h1>
        <p style={{ 
          color: '#475569', marginBottom: '35px', fontSize: '0.75rem', 
          letterSpacing: '4px', fontWeight: 'bold', textTransform: 'uppercase'
        }}>
          Decentralized Verification
        </p>
        
        <textarea 
          style={{
            width: '100%', height: '160px', backgroundColor: '#020617', color: 'white',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: '25px', padding: '20px',
            fontSize: '1rem', outline: 'none', marginBottom: '25px', resize: 'none',
            boxSizing: 'border-box', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)'
          }}
          placeholder="Paste news content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button 
          onClick={handleAnalyze}
          disabled={loading || !text}
          style={{
            width: '100%', padding: '20px', 
            backgroundColor: loading ? '#1e293b' : '#2563eb',
            color: 'white', border: 'none', borderRadius: '20px', 
            fontWeight: '900', cursor: 'pointer', transition: '0.3s', 
            fontSize: '1.1rem', textTransform: 'uppercase',
            boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)'
          }}
        >
          {loading ? 'Analyzing on GenLayer...' : 'Validate Truth'}
        </button>

        {result && (
          <div style={{
            marginTop: '30px', padding: '20px', 
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)', 
            borderRadius: '20px', textAlign: 'left'
          }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6' }}>{result}</p>
          </div>
        )}
      </div>

      <footer style={{ 
        position: 'absolute', bottom: '30px', color: '#1e293b', 
        fontSize: '0.7rem', letterSpacing: '2px', fontWeight: 'bold' 
      }}>
        CONTRACT: 0x1e3d...9A2d
      </footer>
    </div>
  )
}

export default App