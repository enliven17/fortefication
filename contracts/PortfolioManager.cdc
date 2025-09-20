// PortfolioManager.cdc
// Main contract for managing DeFi portfolios on Flow

pub contract PortfolioManager {
    
    // Events
    pub event PortfolioCreated(id: UInt64, owner: Address)
    pub event PortfolioRebalanced(id: UInt64, timestamp: UFix64)
    
    // Portfolio structure
    pub struct Portfolio {
        pub let id: UInt64
        pub let owner: Address
        pub var totalValue: UFix64
        pub var assets: {String: UFix64}
        pub var strategy: String
        pub let createdAt: UFix64
        
        init(id: UInt64, owner: Address, strategy: String) {
            self.id = id
            self.owner = owner
            self.totalValue = 0.0
            self.assets = {}
            self.strategy = strategy
            self.createdAt = getCurrentBlock().timestamp
        }
    }
    
    // Storage paths
    pub let PortfolioStoragePath: StoragePath
    pub let PortfolioPublicPath: PublicPath
    
    // Portfolio counter
    pub var nextPortfolioId: UInt64
    
    init() {
        self.PortfolioStoragePath = /storage/ForteficationPortfolio
        self.PortfolioPublicPath = /public/ForteficationPortfolio
        self.nextPortfolioId = 1
    }
    
    // Create new portfolio
    pub fun createPortfolio(strategy: String): UInt64 {
        let portfolio = Portfolio(
            id: self.nextPortfolioId,
            owner: self.account.address,
            strategy: strategy
        )
        
        self.nextPortfolioId = self.nextPortfolioId + 1
        
        emit PortfolioCreated(id: portfolio.id, owner: portfolio.owner)
        
        return portfolio.id
    }
}