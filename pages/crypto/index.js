import Coins from "../../Components/Crypto/Coins";
import useCoins from "../../lib/useCoins";
import useSWR from "swr";
import { Spinner } from "theme-ui";
import { useState, useEffect } from "react";

export const getStaticProps = async () => {
  const featuredCoins = await useCoins();
  if (!featuredCoins) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      coins: featuredCoins,
    },
    revalidate: 10,
  };
};

const GetCoins = ({ coins }) => {
  const [AllCoins, setAllCoins] = useState(coins.data);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  
  useEffect(() => {
    if (data) {
      setAllCoins(data);
    }
  }, [data]);
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );
  return <Coins coins={AllCoins} />;
};
export default GetCoins;
