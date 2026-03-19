import React from 'react'
import './App.css'

function App() {
  return (
    <div style={{ backgroundColor: '#131722', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <header style={{ marginBottom: '20px', borderBottom: '1px solid #2a2e39', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '24px' }}>亦良的股票閱讀器 - XC40_333</h1>
        <p style={{ color: '#d1d4dc' }}>當前監控：台積電 (2330)</p>
      </header>

      <main style={{ height: '70vh', width: '100%' }}>
        {/* TradingView 圖表組件 */}
        <iframe
          title="Stock Chart"
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_7623a&symbol=TWSE%3A2330&interval=D&hidesidetoolbar=1&hidetoptoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=ROC%40tv-basicstudies%3BStochasticRSI%40tv-basicstudies%3BMACD%40tv-basicstudies&theme=dark&style=1&timezone=Asia%2FTaipei&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=zh_TW"
          width="100%"
          height="100%"
          frameBorder="0"
          allowTransparency="true"
          scrolling="no"
          allowFullScreen
        ></iframe>
      </main>

      <footer style={{ marginTop: '20px', color: '#868993', fontSize: '14px' }}>
        <p>提示：這是你的專屬看盤空間，後續我們可以加入更多自選股清單。</p>
      </footer>
    </div>
  )
}

export default App