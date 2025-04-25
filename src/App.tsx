import React from 'react';
import TradeJournal from './components/TradeJournal';

export default function App() {
  return (
    <div style={{ padding: '2rem', direction: 'rtl', fontFamily: 'sans-serif' }}>
      <h1>יומן מסחר</h1>
      <TradeJournal />
    </div>
  );
}