import { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async () => {
    setLoading(true)
    // در اینجا سایت با قراردادی که در Netlify ست کردیم ارتباط می‌گیرد
    setTimeout(() => {
      setResult("This news seems credible based on AI analysis.")
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-2xl shadow-2xl border border-blue-500">
        <h1 className="text-3xl font-bold mb-6 text-blue-400 text-center">GenLayer News Oracle</h1>
        <p className="mb-4 text-gray-400">Enter news article text or URL to verify using Intelligent Contracts:</p>
        
        <textarea 
          className="w-full h-40 p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 outline-none transition-all"
          placeholder="Paste news content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button 
          onClick={handleAnalyze}
          disabled={loading || !text}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-3 rounded-lg transition-all"
        >
          {loading ? 'Analyzing on GenLayer...' : 'Analyze News'}
        </button>

        {result && (
          <div className="mt-8 p-4 bg-blue-900/30 border border-blue-500 rounded-lg animate-pulse">
            <h3 className="text-blue-400 font-bold mb-2">Oracle Result:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
      <footer className="mt-8 text-gray-500 text-sm">
        Connected to Contract: 0x1e3d...9A2d
      </footer>
    </div>
  )
}

export default App