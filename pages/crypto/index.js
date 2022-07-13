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
    revalidate: 10,
  };
};

const GetCoins = ({ coins }) => {
  return <Coins coins={coins.data}/>;
};
export default GetCoins;
