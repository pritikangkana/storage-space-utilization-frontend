import React from 'react';
import { FaHdd, FaSdCard, FaCloud, FaGoogleDrive, FaNetworkWired, FaRecycle, FaCogs } from 'react-icons/fa';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const cardStyle: React.CSSProperties = {
  background: '#fff',
  borderRadius: 12,
  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
  padding: 20,
  marginBottom: 20,
  display: 'flex',
  alignItems: 'center',
  gap: 16,
};

const sectionTitle: React.CSSProperties = {
  margin: '24px 0 12px 0',
  fontSize: 20,
  fontWeight: 600,
  color: '#333',
};

const Dashboard: React.FC = () => (
  <div style={{
    maxWidth: 420,
    margin: '2rem auto',
    fontFamily: 'Segoe UI, Arial, sans-serif',
    background: '#f4f6fb',
    minHeight: '100vh',
    padding: 24,
    borderRadius: 16,
  }}>
    <AppBar position="static" style={{ marginBottom: 32, borderRadius: 12 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Storage Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
    <h2 style={{ textAlign: 'center', color: '#2d3a4a', marginBottom: 32 }}>Storage</h2>
    <div style={cardStyle}>
      <FaHdd size={28} color="#1976d2" />
      <div>
        <strong>Internal storage</strong>
        <div style={{ color: '#555' }}>116.0 GB / 128 GB</div>
      </div>
    </div>
    <div style={cardStyle}>
      <FaSdCard size={28} color="#388e3c" />
      <div>
        <strong>SD card</strong>
        <div style={{ color: '#888' }}>Not inserted</div>
      </div>
    </div>
    <div style={cardStyle}>
      <FaCloud size={28} color="#0288d1" />
      <div>
        <strong>OneDrive</strong>
        <div style={{ color: '#555' }}>429.5 MB free</div>
      </div>
    </div>
    <div style={cardStyle}>
      <FaGoogleDrive size={28} color="#fbc02d" />
      <div>
        <strong>Google Drive</strong>
        <div style={{ color: '#888' }}>Not signed in</div>
      </div>
    </div>
    <div style={cardStyle}>
      <FaNetworkWired size={28} color="#7b1fa2" />
      <div>
        <strong>Network storage</strong>
      </div>
    </div>
    <div style={sectionTitle}>Utilities</div>
    <div style={cardStyle}>
      <FaRecycle size={28} color="#388e3c" />
      <strong>Recycle bin</strong>
    </div>
    <div style={cardStyle}>
      <FaCogs size={28} color="#1976d2" />
      <strong>Manage storage</strong>
    </div>
  </div>
);

export default Dashboard;

