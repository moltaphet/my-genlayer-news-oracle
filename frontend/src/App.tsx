import React, { useState, useEffect } from 'react';
import { createClient, http } from "genlayer-js";

/**
 * GENLAYER ORACLE DASHBOARD - FINAL VERSION
 * Features: MetaMask Integration, Network Auto-Switch, UI Feedback
 */

// 1. Client Configuration (Asimov Testnet)
const client = createClient({
  chain: "asimov",
  transport: http("https://rpc.asimov.genlayer.com"),
});

export default function App() {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Ready to verify");
  const [blockInfo, setBlockInfo] = useState("---");

  // 2. Connect Wallet & Auto-Switch to Asimov Network
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not found! Please install the extension.");
      return;
    }

    setLoading(true);
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      
      // Request Network Switch to Asimov (Chain ID: 4200)
      await window.ethereum.request({
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
    } catch (err) {
      console.error("Connection Error:", err);
      setStatus("Connection Failed");
    } finally {
      setLoading(false);
    }
  };

  // 3. Sync Blockchain Data (Live Block Number)
  const syncBlockchain = async () => {
    setLoading(true);
    setStatus("Syncing with GenVM...");
    try {
      const currentBlock = await client.getBlockNumber();
      setBlockInfo(currentBlock.toString());
      setStatus("Blockchain Data Synced");
    } catch (err) {
      console.error("Sync Error:", err);
      setStatus("Sync Failed - Check RPC");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header Section */}
        <header style={styles.header}>
          <h1 style={styles.title}>GENLAYER ORACLE</h1>
          <div style={styles.badge}>AI-VERIFIED</div>
        </header>

        {/* Wallet Connection Area */}
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

        {/* Information Display */}
        <div style={styles.displayScreen}>
          <div style={styles.statusText}>{status}</div>
          <div style={styles.blockRow}>
            <span style={{color: '#64748b'}}>LATEST BLOCK:</span>
            <span style={{color: '#3b82f6', fontWeight: 'bold'}}> {blockInfo}</span>
          </div>
        </div>

        {/* Main Action Button */}
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

        {/* Technical Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerItem}>
            <small>NETWORK</small>
            <span>ASIMOV-TESTNET</span>
          </div>
          <div style={styles.footerItem}>
            <small>PROVIDER</small>
            <span>GENLAYER RPC</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

// --- Professional UI Styles ---
const styles = {
  container: {
    background: '#020617',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: '#f8fafc'
  },
  card: {
    background: '#0f172a',
    padding: '40px',
    borderRadius: '24px',
    border: '1px solid #1e293b',
    width: '400px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
    textAlign: 'center'
  },
  header: {
    marginBottom: '30px'
  },
  title: {
    fontSize: '22px',
    fontWeight: '900',
    letterSpacing: '4px',
    margin: '0',
    color: '#ffffff'
  },
  badge: {
    display: 'inline-block',
    fontSize: '10px',
    background: '#3b82f6',
    padding: '2px 8px',
    borderRadius: '4px',
    marginTop: '5px',
    fontWeight: 'bold'
  },
  walletArea: {
    marginBottom: '20px'
  },
  connectBtn: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    background: '#2563eb',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    transition: '0.2s ease'
  },
  accountDisplay: {
    background: '#1e293b',
    padding: '12px',
    borderRadius: '12px',
    fontSize: '13px',
    color: '#94a3b8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    border: '1px dashed #334155'
  },
  onlineDot: {
    width: '8px',
    height: '8px',
    background: '#22c55e',
    borderRadius: '50%',
    boxShadow: '0 0 10px #22c55e'
  },
  displayScreen: {
    background: '#020617',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '25px',
    textAlign: 'left',
    border: '1px solid #1e293b'
  },
  statusText: {
    fontSize: '14px',
    color: '#cbd5e1',
    marginBottom: '10px'
  },
  blockRow: {
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  actionBtn: {
    width: '100%',
    padding: '16px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '15px',
    boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)'
  },
  footer: {
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid #1e293b',
    display: 'flex',
    justifyContent: 'space-between'
  },
  footerItem: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',