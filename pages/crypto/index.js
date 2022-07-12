import Coins from "../../Components/Crypto/Coins";
import useCoins from "../../lib/useCoins";

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
  };
};

const GetCoins = ({ coins }) => {
  return <Coins coins={coins.data} style={{ background: "red" }} />;
};
export default GetCoins;
