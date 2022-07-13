export default async function useCoins() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d"
  );
  const data = await res.json();
  if (res.ok) {
    return { data };
  } else {
    throw new Error(res.statusText);
  }
}

const getCoinDetail = async (coinId) => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  // console.log(res);
  const data = await res.json();
  if (res.ok) {
    // console.log(data);
    return { data };
  } else {
    // console.log("erorr");
    throw new Error(res.statusText);
  }
};

export { getCoinDetail };
