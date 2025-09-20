import { useState, useEffect } from 'react'
import * as fcl from '@onflow/fcl'
import RewtfTracker from '../components/RewtfTracker'

// Configure FCL for Flow blockchain
fcl.config({
  'accessNode.api': 'https://rest-testnet.onflow.org',
  'discovery.wallet': 'https://fcl-discovery.onflow.org/testnet/authn',
  'app.detail.title': 'Fortefication',
  'app.detail.icon': 'https://fortefication.app/icon.png'
})

export default function Home() {
  const [user, setUser] = useState({ loggedIn: false })
  const [portfolios, setPortfolios] = useState([])

  useEffect(() => {
    fcl.currentUser.subscribe(setUser)
  }, [])

  const logIn = () => {
    fcl.logIn()
  }

  const logOut = () => {
    fcl.unauthenticate()
  }

  return (
    <div className="container">
      <RewtfTracker />
      
      <header>
        <h1>Fortefication</h1>
        <p>Automated DeFi Portfolio Manager on Flow</p>
      </header>

      <main>
        {user.loggedIn ? (
          <div>
            <h2>Welcome back!</h2>
            <p>Address: {user.addr}</p>
            <button onClick={logOut}>Log Out</button>
            
            <section>
              <h3>Your Portfolios</h3>
              <div className="portfolios">
                {portfolios.length === 0 ? (
                  <p>No portfolios yet. Create your first automated portfolio!</p>
                ) : (
                  portfolios.map((portfolio, index) => (
                    <div key={index} className="portfolio-card">
                      <h4>Portfolio #{portfolio.id}</h4>
                      <p>Strategy: {portfolio.strategy}</p>
                      <p>Value: ${portfolio.totalValue}</p>
                    </div>
                  ))
                )}
              </div>
              <button className="create-btn">Create New Portfolio</button>
            </section>
          </div>
        ) : (
          <div>
            <h2>Connect Your Wallet</h2>
            <p>Connect your Flow wallet to start managing your DeFi portfolio</p>
            <button onClick={logIn}>Connect Wallet</button>
          </div>
        )}
      </main>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        
        header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        h1 {
          color: #00ef8b;
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        
        .portfolios {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          margin: 2rem 0;
        }
        
        .portfolio-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1.5rem;
          background: #f9f9f9;
        }
        
        button {
          background: #00ef8b;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
        }
        
        button:hover {
          background: #00d17a;
        }
        
        .create-btn {
          background: #0070f3;
        }
        
        .create-btn:hover {
          background: #0051cc;
        }
      `}</style>
    </div>
  )
}