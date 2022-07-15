import Facts from "../../components/Crypto/Facts";
import useCoins from "../../lib/useCoins";

export const getServerSideProps = async () => {
  const coins = await useCoins();
  return {
    props: {
      coins,
    },
  };
};

const CryptoFacts = ({ coins }) => {
  return (
    <div>
      <Facts coins={coins} />
    </div>
  );
};

export default CryptoFacts;
