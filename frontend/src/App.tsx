import React, { useState } from 'react';

/**
 * GENLAYER INTELLIGENT ORACLE
 * Optimized for Local Simulator (Port 4000)
 * UI: Trendy Blue with White Glow Shadow
 */

export default function App() {
  const [account, setAccount] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("SYSTEM READY");
  const [blockInfo, setBlockInfo] = useState<string>("---");

  const connectWallet = async () => {
    const eth = (window as any).ethereum;
    if (!eth) return alert("Please install MetaMask!");
    setLoading(true);
    try {
      const accounts = await eth.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      setStatus("WALLET CONNECTED");
    } catch (err) {
      setStatus("CONNECTION DENIED");
    } finally {
      setLoading(false);
    }
  };

  const syncBlockchain = async () => {
    setLoading(true);
    setStatus("SYNCING WITH LOCAL NODE...");
    try {
      // Direct connection to local simulator as requested by moderators
      const response = await fetch("http://localhost:4000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "eth_blockNumber",
          params: [],
          id: 1,
        }),
      });
      const data = await response.json();
      if (data.result) {
        setBlockInfo(parseInt(data.result, 16).toString());
        setStatus("SUCCESS: LOCAL SYNC");
      }
    } catch (err) {
      console.error(err);
      setStatus("ERROR: NODE OFFLINE");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.fullPage}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>GENLAYER</h1>
          <p style={styles.subtitle}>INTELLIGENT AI ORACLE</p>
        </header>

        <div style={styles.content}>
          <div style={{ marginBottom: '10px' }}>
            {!account ? (
              <button onClick={connectWallet} disabled={loading} style={styles.connectBtn}>
                {loading ? "INITIALIZING..." : "CONNECT WALLET"}
              </button>
            ) : (
              <div style={styles.addressDisplay}>
                <span style={styles.statusDot}></span>
                {account.substring(0, 6)}...{account.substring(38)}
              </div>
            )}
          </div>

          <div style={styles.displayPanel}>
            <div style={styles.infoLine}>PROVIDER: <span style={{color: '#60a5fa'}}>LOCALHOST:4000</span></div>
            <div style={styles.infoLine}>STATUS: <span style={{color: '#60a5fa'}}>{status}</span></div>
            <div style={styles.infoLine}>BLOCK: <span style={{color: '#60a5fa'}}>{blockInfo}</span></div>
          </div>

          <button 
            onClick={syncBlockchain} 
            disabled={!account || loading} 
            style={{...styles.actionBtn, opacity: account ? 1 : 0.5}}
          >
            {loading ? "PROCESSING..." : "RUN AI ORACLE SYNC"}
          </button>
        </div>

        <footer style={styles.footer}>
          <div style={styles.linksContainer}>
            <a href="https://x.com/0xehs4hn" target="_blank" rel="noreferrer" style={styles.socialLink}>TWITTER</a>
            <span style={{color: '#1e3a8a'}}>|</span>
            <a href="https://github.com/moltaphet/my-genlayer-news-oracle" target="_blank" rel="noreferrer" style={styles.socialLink}>GITHUB</a>
          </div>
          <p style={styles.versionTag}>V1.0.6 - OPTIMIZED FOR LOCAL SIMULATOR</p>
        </footer>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  fullPage: { width: '100vw', height: '100vh', background: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0, position: 'fixed', top: 0, left: 0, fontFamily: 'sans-serif' },
  card: { background: '#0f172a', padding: '40px', borderRadius: '35px', border: '2px solid #1e40af', width: '360px', textAlign: 'center', boxShadow: '0 0 50px rgba(37, 99, 235, 0.25)' },
  header: { marginBottom: '30px' },
  title: { fontSize: '32px', fontWeight: '900', letterSpacing: '8px', color: 'white', margin: 0, textShadow: '0 0 10px rgba(255, 255, 255, 0.4)' },
  subtitle: { fontSize: '11px', color: '#3b82f6', letterSpacing: '3px', fontWeight: 'bold', marginTop: '8px' },
  content: { display: 'flex', flexDirection: 'column', gap: '15px' },
  connectBtn: { width: '100%', padding: '16px', borderRadius: '18px', border: 'none', background: '#2563eb', color: 'white', fontWeight: 'bold', cursor: 'pointer' },
  addressDisplay: { background: '#1e293b', padding: '12px', borderRadius: '15px', color: '#94a3b8', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', border: '1px solid #334155' },
  statusDot: { width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e' },
  displayPanel: { background: '#020617', padding: '20px', borderRadius: '20px', border: '1px solid #1e3a8a', textAlign: 'left' },
  infoLine: { fontSize: '12px', color: '#475569', margin: '6px 0', fontWeight: 'bold' },
  actionBtn: { width: '100%', padding: '18px', borderRadius: '18px', border: 'none', background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)', color: 'white', fontWeight: 'bold', cursor: 'pointer' },
  footer: { marginTop: '30px', borderTop: '1px solid #1e293b', paddingTop: '20px' },
  linksContainer: { display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '12px' },
  socialLink: { color: '#60a5fa', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold' },
  versionTag: { fontSize: '9px', color: '#334155', margin: 0 }
};