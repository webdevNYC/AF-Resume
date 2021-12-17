// on this exercise you need to fix the code to 0return
// a unique transaction number of calls

const uniqueTransactions = (transactions, taxRate) => {
    let numCalls = 0;
  
    const calculateCostAfterTax = (cost, taxRate) => {
      numCalls = numCalls + 1;
      return cost * taxRate;
    };
  
    const computeTotal = taxRate => {
      return cost => {
        console.log('cost')
        return calculateCostAfterTax(cost, taxRate);
      };
    };
    transactions.map(computeTotal(taxRate));
    
    return numCalls;
  };

{console.log('Unique Transaction',uniqueTransactions([10,24,12,8,10,24],1.2))}