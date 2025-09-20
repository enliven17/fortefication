import { useState, useEffect } from 'react'

interface RewtfStats {
  commits: number
  lastActivity: string
  points: number
  rank: number
}

export default function RewtfTracker() {
  const [stats, setStats] = useState<RewtfStats>({
    commits: 0,
    lastActivity: 'Never',
    points: 0,
    rank: 0
  })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulated stats - in real implementation, fetch from GitHub API
    const mockStats = {
      commits: Math.floor(Math.random() * 50) + 10,
      lastActivity: new Date().toLocaleDateString(),
      points: Math.floor(Math.random() * 1000) + 100,
      rank: Math.floor(Math.random() * 100) + 1
    }
    setStats(mockStats)
  }, [])

  if (!isVisible) return null

  return (
    <div className="rewtf-tracker">
      <div className="tracker-header">
        <h3>🏆 REWTF Tracker</h3>
        <button 
          className="close-btn"
          onClick={() => setIsVisible(false)}
          aria-label="Close tracker"
        >
          ×
        </button>
      </div>
      
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">{stats.commits}</div>
          <div className="stat-label">Commits</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{stats.points}</div>
          <div className="stat-label">Points</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">#{stats.rank}</div>
          <div className="stat-label">Rank</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{stats.lastActivity}</div>
          <div className="stat-label">Last Activity</div>
        </div>
      </div>
      
      <div className="tracker-links">
        <a 
          href="https://app.databox.com/datawall/fc5f1f7de13471eac8bd5eb2e3d90a752817ac68a86fd6"
          target="_blank"
          rel="noopener noreferrer"
          className="leaderboard-link"
        >
          📈 View Leaderboard
        </a>
        
        <a 
          href="https://github.com/onflow/rewtf-registry"
          target="_blank"
          rel="noopener noreferrer"
          className="registry-link"
        >
          📋 REWTF Registry
        </a>
      </div>
      
      <div className="project-info">
        <div className="project-badge">
          <span className="badge-icon">🌊</span>
          <span className="badge-text">Built on Flow</span>
        </div>
        <div className="hashtags">
          #ReWTF #FlowBlockchain #DeFi #Fortefication
        </div>
      </div>

      <style jsx>{`
        .rewtf-tracker {
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #00ef8b 0%, #0070f3 100%);
          color: white;
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          min-width: 280px;
          z-index: 1000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .tracker-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .tracker-header h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .close-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        
        .stat-item {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem;
          border-radius: 8px;
        }
        
        .stat-value {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
        
        .stat-label {
          font-size: 0.75rem;
          opacity: 0.9;
        }
        
        .tracker-links {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .leaderboard-link,
        .registry-link {
          flex: 1;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          text-decoration: none;
          padding: 0.5rem;
          border-radius: 6px;
          font-size: 0.8rem;
          text-align: center;
          transition: background 0.2s;
        }
        
        .leaderboard-link:hover,
        .registry-link:hover {
          background: rgba(255, 255, 255, 0.25);
        }
        
        .project-info {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 0.75rem;
        }
        
        .project-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .badge-icon {
          font-size: 1.2rem;
        }
        
        .badge-text {
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .hashtags {
          font-size: 0.75rem;
          opacity: 0.8;
          line-height: 1.3;
        }
        
        @media (max-width: 768px) {
          .rewtf-tracker {
            position: relative;
            top: auto;
            right: auto;
            margin: 1rem;
            width: calc(100% - 2rem);
          }
        }
      `}</style>
    </div>
  )
}