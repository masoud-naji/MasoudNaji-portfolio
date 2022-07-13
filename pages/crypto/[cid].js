import { getCoinDetail } from "../../lib/useCoins";
import Image from "next/image";
import HttpGetter from "../../lib/HttpGetter";
import { Spinner } from "theme-ui";

export async function getStaticProps(context) {
  const { params } = context;
  const coinId = params.cid;
  const res = await getCoinDetail(coinId);
  if (!res) {
    return {
      props: {
        notFound: true,
      },
    };
  }
  return {
    props: {
      coin: res.data,
    },
  };
}



export async function getStaticPaths() {
//if its array then we can use map
  // const ids = coin.map((coin) => coin.id);
  // const pathparams = ids.map((id) => ({ params: { cid: id } }));

  return {
    paths: [{ params: { cid: "bitcoin" } }, { params: { cid: "ethereum" } }],
    fallback: true,
  };
}




const CoinDetails = ({ coin }) => {
  if (!coin) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <ul>
        {HttpGetter(coin.links).map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      ----------------
      <h1>Coin Details</h1>
      <p>CoinName--{coin.name} </p>
      <p>CoinSymbol--{coin.symbol} </p>
      <Image src={coin.image.small} alt={coin.name} width={40} height={40} />
      <p>CoinId--{coin.id} </p>
      <p>public_interest_score--{coin.public_interest_score}</p>
      <p>public_interest_stats-- {coin.public_interest_stats.alexa_rank}</p>
      <p>public_notice:--{coin.public_notice}</p>
      <p>
        sentiment_votes_down_percentage:--{coin.sentiment_votes_down_percentage}
      </p>
      <p>
        sentiment_votes_up_percentage:--{coin.sentiment_votes_up_percentage}{" "}
      </p>
      <p>CoinPrice--{coin.market_data.current_price.usd} </p>
      <p>hashing_algorithm--{coin.hashing_algorithm} </p>
      <p> ATH:--{coin.market_data.ath.usd}</p>
      <p>CoinPriceChange24h--{coin.market_data.price_change_24h} </p>
      <p>market_cap_change_24h--{coin.market_data.market_cap_change_24h} </p>
      <p>
        price_change_percentage_1h_in_currency --
        {coin.market_data.price_change_percentage_1h_in_currency.usd}{" "}
      </p>
      <p>
        price_change_percentage_1y{coin.market_data.price_change_percentage_1y}
      </p>
      <p>
        price_change_percentage_1y_in_currency
        {coin.market_data.price_change_percentage_1y_in_currency.usd}
      </p>
      <p>
        price_change_percentage_7d{coin.market_data.price_change_percentage_7d}
      </p>
      <p>
        price_change_percentage_7d_in_currency
        {coin.market_data.price_change_percentage_7d_in_currency.usd}
      </p>
      <p>
        price_change_percentage_14d
        {coin.market_data.price_change_percentage_14d}
      </p>
      <p>
        price_change_percentage_14d_in_currency
        {coin.market_data.price_change_percentage_14d_in_currency.usd}
      </p>
      <p>
        price_change_percentage_24h
        {coin.market_data.price_change_percentage_24h}
      </p>
      <p>
        price_change_percentage_24h_in_currency
        {coin.market_data.price_change_percentage_24h_in_currency.usd}
      </p>
      <p>
        price_change_percentage_30d
        {coin.market_data.price_change_percentage_30d}
      </p>
      <p>
        price_change_percentage_30d_in_currency
        {coin.market_data.price_change_percentage_30d_in_currency.usd}
      </p>
      <p>
        price_change_percentage_60d
        {coin.market_data.price_change_percentage_60d}
      </p>
      <p>
        price_change_percentage_60d_in_currency
        {coin.market_data.price_change_percentage_60d_in_currency.usd}
      </p>
      <p>
        price_change_percentage_200d
        {coin.market_data.price_change_percentage_200d}
      </p>
      <p>
        price_change_percentage_200d_in_currency
        {coin.market_data.price_change_percentage_200d_in_currency.usd}
      </p>
      <p>total_supply: {coin.market_data.total_supply}</p>
      <p>total_value_locked: {coin.market_data.total_value_locked}</p>
      <p>total_volume:{coin.market_data.total_volume.usd}</p>
      <p>description:--{coin.description.en}</p>
    </div>
  );
};

export default CoinDetails;
