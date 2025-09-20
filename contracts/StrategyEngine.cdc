// StrategyEngine.cdc
// Smart contract for managing investment strategies

pub contract StrategyEngine {
    
    // Strategy types
    pub enum StrategyType: UInt8 {
        pub case Conservative
        pub case Balanced  
        pub case Aggressive
        pub case Custom
    }
    
    // Strategy configuration
    pub struct Strategy {
        pub let name: String
        pub let type: StrategyType
        pub let riskLevel: UFix64
        pub let rebalanceFrequency: UFix64
        pub let allocations: {String: UFix64}
        
        init(name: String, type: StrategyType, riskLevel: UFix64, rebalanceFrequency: UFix64, allocations: {String: UFix64}) {
            self.name = name
            self.type = type
            self.riskLevel = riskLevel
            self.rebalanceFrequency = rebalanceFrequency
            self.allocations = allocations
        }
    }
    
    // Predefined strategies
    pub var strategies: {String: Strategy}
    
    init() {
        self.strategies = {}
        
        // Initialize default strategies
        self.strategies["conservative"] = Strategy(
            name: "Conservative Growth",
            type: StrategyType.Conservative,
            riskLevel: 0.3,
            rebalanceFrequency: 604800.0, // 1 week
            allocations: {"FLOW": 0.6, "USDC": 0.4}
        )
        
        self.strategies["balanced"] = Strategy(
            name: "Balanced Portfolio",
            type: StrategyType.Balanced,
            riskLevel: 0.5,
            rebalanceFrequency: 432000.0, // 5 days
            allocations: {"FLOW": 0.4, "USDC": 0.3, "BTC": 0.3}
        )
    }
    
    // Get strategy by name
    pub fun getStrategy(name: String): Strategy? {
        return self.strategies[name]
    }
}