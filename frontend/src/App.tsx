import React, { useState } from 'react';
import { createClient, http } from "genlayer-js";

// 1. Client Configuration for GenLayer Asimov
const client = createClient({
  chain: "asimov" as any,
  transport: http("https://rpc.asimov.genlayer.com"),
});

export default function App() {
  const [account, setAccount] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("Ready to verify");
  const [blockInfo, setBlockInfo] = useState<string>("---");

  // 2. Connect Wallet Function
  const connectWallet = async () => {
    const eth = (window as any).ethereum;
    if (!eth) {
      alert("Please install MetaMask!");
      return;
    }

    setLoading(true);
    try {
      const accounts = await eth.request({ 
        method: "eth_requestAccounts" 
      });
      
      // Automatic Network Switch
      await eth.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x1068',
          chainName: 'GenLayer Asimov',
          rpcUrls: ['https://rpc.asimov.genlayer.com'],
          nativeCurrency: { name: 'GEN', symbol: 'GEN', decimals: 18 },
          blockExplorerUrls: ['https://explorer.asimov.genlayer.com']
        }]
      });

      setAccount(accounts[0]);
      setStatus("Connected to Asimov");
    } catch (err: any) {
      console.error(err);
      setStatus("Connection Failed");
    } finally {
      setLoading(false);
    }
  };

  // 3. Sync Blockchain Data
  const syncBlockchain = async () => {
    setLoading(true);
    setStatus("Syncing with GenVM...");
    try {
      const currentBlock = await client.getBlockNumber();
      setBlockInfo(currentBlock.toString());
      setStatus("Blockchain Data Synced");
    } catch (err: any) {
      console.error(err);
      setStatus("Sync Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>GENLAYER ORACLE</h1>
          <div style={styles.badge}>AI-VERIFIED</div>
        </header>

        <div style={styles.walletArea}>
          {!account ? (
            <button onClick={connectWallet} disabled={loading} style={styles.connectBtn}>
              {loading ? "INITIALIZING..." : "CONNECT WALLET"}
            </button>
          ) : (
            <div style={styles.accountDisplay}>
              <span style={styles.onlineDot}></span>
              {account.substring(0, 6)}...{account.substring(38)}
            </div>
          )}
        </div>

        <div style={styles.displayScreen}>
          <div style={styles.statusText}>{status}</div>
          <div style={styles.blockRow}>
            <span style={{color: '#64748b'}}>LATEST BLOCK:</span>
            <span style={{color: '#3b82f6', fontWeight: 'bold'}}> {blockInfo}</span>
          </div>
        </div>

        <button 
          onClick={syncBlockchain} 
          disabled={!account || loading} 
          style={{
            ...styles.actionBtn,
            opacity: (!account || loading) ? 0.6 : 1,
            cursor: (!account || loading) ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? "PROCESSING..." : "RUN ORACLE SYNC"}
        </button>

        <footer style={styles.footer}>
          <div style={styles.footerItem}>
            <small>NETWORK</small>
            <span>ASIMOV-TESTNET</span>
          </div>
          <div style={styles.footerItem}>
            <small>STATUS</small>
            <span>ACTIVE</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

// --- Styles (Fixed for TypeScript) ---
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: '#020617',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    color: '#f8fafc'
  },
  card: {
    background: '#0f172a',
    padding: '40px',
    borderRadius: '24px',
    border: '1px solid #1e293b',
    width: '380px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
    textAlign: 'center'
  },
  header: { marginBottom: '30px' },
  title: { fontSize: '20px', fontWeight: '900', letterSpacing: '4px', margin: '0' },
  badge: { display: 'inline-block', fontSize: '9px', background: '#3b82f6', padding: '2px 8px', borderRadius: '4px', marginTop: '5px', fontWeight: 'bold' },
  walletArea: { marginBottom: '20px' },
  connectBtn: { width: '100%', padding: '14px', borderRadius: '12px', border: 'none', background: '#2563eb', color: 'white', fontWeight: 'bold', cursor: 'pointer' },
  accountDisplay: { background: '#1e293b', padding: '12px', borderRadius: '12px', fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: '1px dashed #334155' },
  onlineDot: { width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e' },
  displayScreen: { background: '#020617', padding: '18px', borderRadius: '12px', marginBottom: '20px', textAlign: 'left', border: '1px solid #1e293b' },
  statusText: { fontSize: '13px', color: '#cbd5e1', marginBottom: '8px' },
  blockRow: { fontSize: '11px', display: 'flex', justifyContent: 'space-between' },
  actionBtn: { width: '100%', padding: '16px', borderRadius: '12px', border: 'none', background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', color: 'white', fontWeight: 'bold', cursor: 'pointer' },
  footer: { marginTop: '25px', paddingTop: '15px', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between' },
  footerItem: { textAlign: 'left', display: 'flex', flexDirection: 'column', fontSize: '9px', color: '#475569' }
};