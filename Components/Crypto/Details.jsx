/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react";
import HttpGetter from "../../lib/HttpGetter";
import Image from "next/image";
import style from "./UsersList.module.css";
import useCoins, { searchForPrices } from "../../lib/useCoins";
import { useRouter } from "next/router";
import { split } from "lodash";
import Chart from "./Chart/News";
import { Card } from "theme-ui";

const Details = ({ coin }) => {
  console.log(coin);
  const router = useRouter();
  //-----------------------------------------------------Coin List
  const [coinsList, setCoinsList] = useState([]);
  const [name, setName] = useState(coin ? coin : "bitcoin");
  useEffect(() => {
    const GetCoinsList = async () => {
      const featuredCoins = await useCoins();
      setCoinsList(featuredCoins.data);
    };
    GetCoinsList();
  }, []);
  const SelectCoin = (e) => {
    const CoinName = coinsList.find((coin) => coin.symbol === e.target.value);
    setName(CoinName);
    // console.log(CoinName.id);
    router.push(`/crypto/${CoinName.id}`);
  };
  //-----------------------------------------------------Time Manage
  const [startTime, setStartTime] = useState(
    (new Date(Date.now()).getTime() / 1000 - 86400).toFixed(0)
  );
  const [endTime] = useState(
    (new Date(Date.now()).getTime() / 1000).toFixed(0)
  );
  const timeController = [
    { value: new Date().setHours(new Date().getHours() - 4), label: "4H" },
    { value: new Date().setDate(new Date().getDate() - 1), label: "1D" },
    { value: new Date().setDate(new Date().getDate() - 7), label: "7D" },
    { value: new Date().setMonth(new Date().getMonth() - 1), label: "1M" },
    { value: new Date().setMonth(new Date().getMonth() - 3), label: "3M" },
    {
      value: new Date().setFullYear(new Date().getFullYear() - 1),
      label: "1Y",
    },
    {
      value: new Date().setFullYear(new Date().getFullYear() - 5),
      label: "5Y",
    },
  ];
  const setStarthandler = (event) => {
    const alldata = event.target.value;
    const alldatavalue = split(alldata, ",")[0];
    setStartTime(Math.round(+alldatavalue / 1000));
  };
  //-----------------------------------------------------Chart Data Provider
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const GetChartData = async () => {
      const Data = await searchForPrices({
        name: name.id,
        startTime,
        endTime,
      });
      if (Data) {
        // console.log(Data.data.prices);
        setChartData(Data.data.prices);
      }
    };
    GetChartData();
  }, [name, startTime, endTime]);

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // console.log(name.id)
  return (
    <Card
      sx={{
        color: "primary",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}
    >
      <div className={style.tableContainer}>
        <div className={style.toptable_child}>
          <select
            className={style.dropdown}
            onChange={(e) => SelectCoin(e)}
            placeholder="Select Coin"
            // value={coin.id}
          >
            {typeof coinsList !== "undefined" ? (
              coinsList
                .map((coin) => coin.symbol)
                .map((symbol) => (
                  <option key={symbol} value={symbol}>
                    {symbol}
                  </option>
                ))
            ) : (
              <option value={coin.id}>{coin.id}</option>
            )}
          </select>
          <select
            className={style.dropdown}
            onChange={(e) => setStarthandler(e)}
            placeholder="Select Duration ..."
          >
            <>
              <option value={Object.values(timeController[0])}>4H</option>
              <option value={Object.values(timeController[1])}>1D</option>
              <option value={Object.values(timeController[2])}>7D</option>
              <option value={Object.values(timeController[3])}>1M</option>
              <option value={Object.values(timeController[4])}>3M</option>
              <option value={Object.values(timeController[5])}>1Y</option>
              <option value={Object.values(timeController[6])}>5Y</option>
            </>
          </select>
        </div>
        <div className={style.toptable_child}>
          {chartData && <Chart data={chartData} data2={"USD Coin"} />}
          <ul>
            {HttpGetter(coin.links).map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          ----------------
          <h1>Coin Details</h1>
          <p>CoinName--{coin.name} </p>
          <p>CoinSymbol--{coin.symbol} </p>
          <Image
            src={coin.image.small}
            alt={coin.name}
            width={40}
            height={40}
          />
          <p>CoinId--{coin.id} </p>
          <p>public_interest_score--{coin.public_interest_score}</p>
          <p>public_interest_stats-- {coin.public_interest_stats.alexa_rank}</p>
          <p>public_notice:--{coin.public_notice}</p>
          <p>
            sentiment_votes_down_percentage:--
            {coin.sentiment_votes_down_percentage}
          </p>
          <p>
            sentiment_votes_up_percentage:--{coin.sentiment_votes_up_percentage}{" "}
          </p>
          <p>CoinPrice--{coin.market_data.current_price.usd} </p>
          <p>hashing_algorithm--{coin.hashing_algorithm} </p>
          <p> ATH:--{coin.market_data.ath.usd}</p>
          <p>CoinPriceChange24h--{coin.market_data.price_change_24h} </p>
          <p>
            market_cap_change_24h--{coin.market_data.market_cap_change_24h}{" "}
          </p>
          <p>
            price_change_percentage_1h_in_currency --
            {coin.market_data.price_change_percentage_1h_in_currency.usd}{" "}
          </p>
          <p>
            price_change_percentage_1y
            {coin.market_data.price_change_percentage_1y}
          </p>
          <p>
            price_change_percentage_1y_in_currency
            {coin.market_data.price_change_percentage_1y_in_currency.usd}
          </p>
          <p>
            price_change_percentage_7d
            {coin.market_data.price_change_percentage_7d}
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
      </div>
    </Card>
  );
};

export default Details;
