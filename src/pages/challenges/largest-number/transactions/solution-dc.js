
const uniqueTransactions = (transactions, taxRate) => {
    let numCalls = 0;
  
    const calculateCostAfterTax = (cost, taxRate) => {
      numCalls = numCalls + 1;
      return cost * taxRate;
    };
  
    const computeTotal = taxRate => {
       // console.log('computerTotal')
      return cost => {
        console.log('cost')
        return calculateCostAfterTax(cost, taxRate);
      };
    };
    // just need to add this
    let uniqueTransactions = [...new Set(transactions)];
    uniqueTransactions.map(computeTotal(taxRate));
    
    return numCalls;
  };

console.log('Unique Transaction',uniqueTransactions([10,24,12,8,10,24],1.2))