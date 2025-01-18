export const getCoins = async () => {
  try {
    const response = await fetch("https://api.coinlore.net/api/tickers/");
    const coins = (await response.json()).data; //this is an array
    //console.log(coins);
    return coins;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

