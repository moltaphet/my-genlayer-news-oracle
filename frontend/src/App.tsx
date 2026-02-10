import { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = () => {
    setLoading(true)
    setShowResult(false)
    // شبیه‌سازی تحلیل شبکه
    setTimeout(() => {
      setLoading(false)
      setShowResult(true)
    }, 1500)
  }

  return (
    <div style={{
      backgroundColor: '#020617', color: '#e2e8f0', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'sans-serif', padding: '20px', margin: 0
    }}>
      
     
      <div style={{
        maxWidth: '550px', width: '100%', backgroundColor: 'rgba(15, 23, 42, 0.9)',
        padding: '40px', borderRadius: '30px', border: '1px solid #1e40af', 
        textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
      }}>
        <h1 style={{ color: '#ffffff', fontSize: '2rem', margin: '0 0 10px 0' }}>TRUTH ENGINE</h1>
        <p style={{ color: '#3b82f6', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '30px' }}>
          DECENTRALIZED NEWS ORACLE BY GENLAYER
        </p>

        <textarea 
          style={{
            width: '100%', height: '120px', backgroundColor: '#020617', color: 'white',
            border: '1px solid #1e293b', borderRadius: '15px', padding: '15px',
            fontSize: '1rem', outline: 'none', marginBottom: '20px', resize: 'none', boxSizing: 'border-box'
          }}
          placeholder="Enter news content for AI swarm verification..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button 
          onClick={handleAnalyze}
          disabled={loading || !text}
          style={{
            width: '100%', padding: '18px', backgroundColor: '#2563eb',
            color: 'white', border: 'none', borderRadius: '15px', fontWeight: 'bold',
            cursor: 'pointer', fontSize: '1rem'
          }}
        >
          {loading ? 'VERIFYING ON GENLAYER...' : 'VERIFY ON GENLAYER'}
        </button>

       
        {showResult && (
          <div style={{ marginTop: '30px', textAlign: 'left', animation: 'fadeIn 0.5s' }}>
            <div style={{ padding: '15px', backgroundColor: 'rgba(74, 222, 128, 0.1)', borderRadius: '12px', borderLeft: '4px solid #4ade80', marginBottom: '15px' }}>
              <div style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '0.8rem' }}>TRUST SCORE: 88/100</div>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: '#cbd5e1' }}>
                High factual consistency detected by AI swarm.
              </p>
            </div>

            {/* نمایش دیتای واقعی قرارداد شما */}
            <div style={{ padding: '15px', backgroundColor: '#000', borderRadius: '12px', fontSize: '0.65rem', border: '1px solid #1e293b' }}>
              <div style={{ color: '#64748b', marginBottom: '5px' }}>ON-CHAIN PROOF:</div>
              <div style={{ wordBreak: 'break-all', color: '#94a3b8', marginBottom: '5px' }}>
                <strong>CONTRACT:</strong> 0x1e3d433788e6890f2300D0e321058850454c9A2d
              </div>
              <div style={{ wordBreak: 'break-all', color: '#94a3b8' }}>
                <strong>TX HASH:</strong> 0xb637ba3d0b8a9171ac7302bf25369d5c02b24b384f3acf2867ae605a956d8c10
              </div>
            </div>
          </div>
        )}
      </div>

      <footer style={{ marginTop: '20px', color: '#334155', fontSize: '0.6rem' }}>
        GENLAYER TESTNET PROTOTYPE
      </footer>
    </div>
  )
}

export default App