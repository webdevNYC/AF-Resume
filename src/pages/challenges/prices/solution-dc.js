const biggestTrade = (prices) => {
    let currentTrade = 0;
    let  biggestTrade = 0; 
    prices.map((item, index) => {
      currentTrade =  prices[index+1]-item;
      biggestTrade = currentTrade > biggestTrade? currentTrade: biggestTrade
    })
    return biggestTrade
  };

  console.log ('Biggest Trade',prices([6,0,-1,10]))