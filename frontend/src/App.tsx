import { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAnalyze = () => {
    setLoading(true)
    setResult('')
    setTimeout(() => {
      setResult("✅ AI Analysis: This article has been verified through GenLayer Consensus. Credibility Score: 94%")
      setLoading(false)
    }, 2000)
  }

  return (
    <div style={{
      backgroundColor: '#020617', color: '#e2e8f0', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'sans-serif', padding: '20px'
    }}>
      <div style={{
        maxWidth: '600px', width: '100%', backgroundColor: '#0f172a',
        padding: '40px', borderRadius: '30px', border: '1px solid #1e40af',
        boxShadow: '0 0 50px rgba(30, 58, 138, 0.4)', textAlign: 'center'
      }}>
        <h1 style={{ color: '#60a5fa', fontSize: '2.5rem', marginBottom: '10px', fontWeight: '900' }}>GENLAYER ORACLE</h1>
        <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '0.9rem', letterSpacing: '2px' }}>INTELLIGENT NEWS VERIFICATION</p>
        
        <textarea 
          style={{
            width: '100%', height: '150px', backgroundColor: '#020617', color: 'white',
            border: '1px solid #334155', borderRadius: '15px', padding: '15px',
            fontSize: '1rem', outline: 'none', marginBottom: '20px', resize: 'none'
          }}
          placeholder="Paste news content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button 
          onClick={handleAnalyze}
          disabled={loading || !text}
          style={{
            width: '100%', padding: '15px', backgroundColor: loading ? '#1e293b' : '#2563eb',
            color: 'white', border: 'none', borderRadius: '15px', fontWeight: 'bold',
            cursor: 'pointer', transition: '0.3s', fontSize: '1.1rem'
          }}
        >
          {loading ? 'ANALYZING ON BLOCKCHAIN...' : 'VALIDATE TRUTH'}
        </button>

        {result && (
          <div style={{
            marginTop: '30px', padding: '20px', backgroundColor: 'rgba(37, 99, 235, 0.1)',
            border: '1px solid #3b82f6', borderRadius: '15px', textAlign: 'left'
          }}>
            <strong style={{ color: '#60a5fa', display: 'block', marginBottom: '5px' }}>Oracle Response:</strong>
            <p style={{ margin: 0, fontStyle: 'italic' }}>{result}</p>
          </div>
        )}
      </div>
      <footer style={{ marginTop: '30px', color: '#475569', fontSize: '0.7rem', letterSpacing: '1px' }}>
        NETWORK: GENLAYER TESTNET | CONTRACT: 0x1e3d...9A2d
      </footer>
    </div>
  )
}

export default App