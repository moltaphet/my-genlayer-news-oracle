import React, { useState } from 'react';

export default function App() {
  const [account, setAccount] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("System Ready");
  const [blockInfo, setBlockInfo] = useState<string>("---");

  const connectWallet = async () => {
    const eth = (window as any).ethereum;
    if (!eth) return alert("Please install MetaMask!");

    setLoading(true);
    setStatus("Connecting...");
    try {
      const accounts = await eth.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      setStatus("Wallet Connected");
    } catch (err) {
      setStatus("Connection Denied");
    } finally {
      setLoading(false);
    }
  };

  const syncBlockchain = async () => {
    setLoading(true);
    setStatus("Fetching Data...");
    try {
      // Direct Fetch to RPC
      const response = await fetch("https://rpc.asimov.genlayer.com", {
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
        setStatus("Live Data Synced");
      } else {
        setStatus("RPC Busy");
      }
    } catch (err) {
      setStatus("Sync Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.fullPage}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>GENLAYER ORACLE</h1>
          <div style={styles.badge}>v1.0 ASIMOV</div>
        </header>

        <div style={styles.content}>
          {!account ? (
            <button onClick={connectWallet} disabled={loading} style={styles.primaryBtn}>
              {loading ? "CHECKING..." : "CONNECT WALLET"}
            </button>
          ) : (
            <div style={styles.infoBox}>
              <div style={styles.statusRow}>
                <span style={styles.dot}></span>
                <span>ID: {account.substring(0, 6)}...{account.substring(38)}</span>
              </div>
            </div>
          )}

          <div style={styles.display}>
            <div style={styles.displayText}>STATUS: <span style={{color:'#60a5fa'}}>{status}</span></div>
            <div style={styles.displayText}>LATEST BLOCK: <span style={{color:'#60a5fa'}}>{blockInfo}</span></div>
          </div>

          <button 
            onClick={syncBlockchain} 
            disabled={!account || loading} 
            style={{...styles.syncBtn, opacity: account ? 1 : 0.5}}
          >
            {loading ? "SYNCING..." : "RUN ORACLE SYNC"}
          </button>
        </div>

        <footer style={styles.footer}>
          <span>NETWORK: ASIMOV TESTNET</span>
        </footer>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  fullPage: { width: '100vw', height: '100vh', background: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0, position: 'fixed', top: 0, left: 0 },
  card: { background: '#0f172a', padding: '40px', borderRadius: '24px', border: '1px solid #1e293b', width: '360px', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' },
  header: { marginBottom: '30px' },
  title: { fontSize: '20px', fontWeight: 'bold', letterSpacing: '3px', color: 'white', margin: 0 },
  badge: { display: 'inline-block', fontSize: '9px', background: '#2563eb', padding: '2px 10px', borderRadius: '4px', marginTop: '8px', color: 'white' },
  content: { display: 'flex', flexDirection: 'column', gap: '15px' },
  primaryBtn: { padding: '14px', borderRadius: '12px', border: 'none', background: '#2563eb', color: 'white', fontWeight: 'bold', cursor: 'pointer' },
  infoBox: { background: '#1e293b', padding: '12px', borderRadius: '12px', border: '1px dashed #334155' },
  statusRow: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '12px', color: '#94a3b8' },
  dot: { width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' },
  display: { background: '#020617', padding: '15px', borderRadius: '12px', textAlign: 'left', border: '1px solid #1e293b' },
  displayText: { fontSize: '12px', color: '#64748b', margin: '4px 0' },
  syncBtn: { padding: '16px', borderRadius: '12px', border: 'none', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', color: 'white', fontWeight: 'bold', cursor: 'pointer' },
  footer: { marginTop: '25px', fontSize: '10px', color: '#475569', borderTop: '1px solid #1e293b', paddingTop: '15px' }
};