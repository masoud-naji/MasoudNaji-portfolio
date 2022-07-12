import React, { useEffect, useState, useContext } from "react";
import style from "../Styles/UsersList.module.css";
import classes from "../Styles/Card.module.css";
import cardStyle from "../Styles/infoCard.module.css";
import Card from "../UI/Card";
// import Select from "react-select";
import "../Styles/progressbar.css";
import axios from "axios";
import CoinContext from "../../contexts/coinContext";
// import _uniqueId from "lodash/uniqueId";
import infostyle from "../Styles/about.module.css";
import Chart from "../Chart/News";
import parse from "html-react-parser";
import stock from "../../Images/stock.png";
import stock2 from "../../Images/stock2.png";
import stock3 from "../../Images/stock3.png";
import stock4 from "../../Images/stock4.png";
import { split } from "lodash";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
// import { stream } from "xlsx";
// import googleTrendShow from "../GoogleTrend/GoogleTrendShow";
// import Script from "react-load-script";

function Details() {
  const coinCTX = useContext(CoinContext);
  const [foundCoins, setFoundCoins] = useState(coinCTX.selectedCoin);
  const [foundCoins2, setFoundCoins2] = useState("USD Coin");
  const [name, setName] = useState(
    coinCTX.selectedCoin ? coinCTX.selectedCoin : "cardano"
  );
  const [error, setError] = useState();
  const [isItLoading, setIsItLoading] = useState(true);
  const [isItLoadingCoinDetail, setIsItLoadingCoinDetail] = useState(true);
  const [coinAllInfo, setCoinAllInfo] = useState([]);
  const [timeLabale, settimeLabale] = useState("");
  ////////////////////////////////////////////////duration Cotrol maker/////////////////////////////////////////
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
    const alldataLabel = split(alldata, ",")[1];

    // console.log(alldatavalue);
    // console.log(alldataLabel);
    setStartTime(Math.round(+alldatavalue / 1000));
    settimeLabale(alldataLabel);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    coinCTX.setChartData2([]);
    const getCoinNews = () =>
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${name}`)
        .then((res) => {
          if (res.status !== 200) return;
          setIsItLoadingCoinDetail(false);
          setCoinAllInfo(res.data);

          // console.log(res.data);
          // console.log(res.data.description.en);
        })
        .catch((error) => {
          setError(error);
          setIsItLoadingCoinDetail(true);
          setCoinAllInfo([]);
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
          } else {
            // Something happened in setting up the request and triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    //////////////////////////////////////////////////////////
    //https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=5&interval=daily
    // marketchart
    const search = () =>
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${name}/market_chart/range?vs_currency=usd&from=${startTime}&to=${endTime}`
        )
        .then((res) => {
          if (res.status !== 200) return;
          // console.log(res.status);
          setIsItLoading(false);
          setFoundCoins(res.data.prices);
          coinCTX.setChartData(res.data.prices);
        })
        .catch((error) => {
          setError(error);
          setIsItLoading(true);
          setFoundCoins([]);
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
          } else {
            // Something happened in setting up the request and triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });

    getCoinNews();
    search();
  }, [name, startTime, endTime]);

  const Progress = ({ done }) => (
    <div className="MyProgress">
      <div className="progress-done" style={{ opacity: 1, width: `${done}%` }}>
        <p>{done}%</p>
      </div>
    </div>
  );

  // console.log(startTime);

  if (isItLoading) {
    return (
      <Card className={classes.card}>
        <div className={`${style.tableContainer} ${classes.App}`}>
          Loading ...
          <br />
          <progress />
        </div>
      </Card>
    );
  } else if (isItLoadingCoinDetail) {
    return (
      <Card className={classes.card}>
        <div className={`${style.tableContainer} ${classes.App}`}>
          Loading ...
          <br />
          <progress />
        </div>
      </Card>
    );
  } else if (
    foundCoins.length > 0 &&
    !isItLoading &&
    !isItLoadingCoinDetail &&
    Object.keys(coinAllInfo).length > 0
  ) {
    // console.log(coinAllInfo.links);
    // console.log(coinCTX.selectedCoin);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Helmet>
          <title>Crypto Currency`s Details</title>
          <meta name="description" content="Crypto Currency`s Details" />
        </Helmet>
        <Card className={classes.card}>
          <div className={style.tableContainer}>
            {/* /////////////////////////////////////////////////////Chart////////////////////////////////////////////////////// */}

            <Card className={`${classes.input} ${classes.topchartdetail}`}>
              {foundCoins && foundCoins.length > 0 ? (
                <div className={classes.HeroPlace}>
                  <div className={classes.chartdisplay}>
                    <Chart data={foundCoins} data2={"USD Coin"} />
                  </div>
                  <div className={classes.infodisplay}>
                    <div
                      style={{ background: "rgb(37, 54, 106)" }}
                      className={classes.insidetitle}
                    >
                      <div className={classes.flextbtn}>
                        {/* ///////////////////////////////////////////////// coinselect DropDown//////////////////////////////// */}
                        <div>
                          <select
                            className={style.dropdownsmall}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Select Coin"
                            value={name}
                            // options={coinNameList}
                          >
                            {typeof coinCTX.coins !== "undefined" ? (
                              coinCTX.coins.map((coin) => (
                                <option key={coin.id} value={coin.id}>
                                  {coin.symbol}
                                </option>
                              ))
                            ) : (
                              <option value="btc">btc</option>
                            )}
                          </select>
                        </div>

                        {/* ///////////////////////////////////////// TimeControler DropDown////////////////////////////////////////// */}
                        <div>
                          <select
                            className={style.dropdownsmall}
                            onChange={(e) => setStarthandler(e)}
                            // onChange={(e) => alert(e.target.value)}
                            placeholder="Select Duration ..."
                            // value={startTime}
                          >
                            <>
                              <option value={Object.values(timeController[0])}>
                                4H
                              </option>
                              <option value={Object.values(timeController[1])}>
                                1D
                              </option>
                              <option value={Object.values(timeController[2])}>
                                7D
                              </option>
                              <option value={Object.values(timeController[3])}>
                                1M
                              </option>
                              <option value={Object.values(timeController[4])}>
                                3M
                              </option>
                              <option value={Object.values(timeController[5])}>
                                1Y
                              </option>
                              <option value={Object.values(timeController[6])}>
                                5Y
                              </option>

                              {/* {typeof coinCTX.coins !== "undefined" ? (
                              timeController.map((timeC) => (
                                <option key={timeC.value} value={Object.values(timeC)}>
                                  {timeC.label}
                                </option>
                              ))
                            ) : (
                              <option value="1D">1D</option>
                            )} */}
                            </>
                          </select>
                        </div>
                        {/* ///////////////////////////////////////// ////////////////////////////////////////// */}
                      </div>
                    </div>
                    <div className={classes.insidecontent}>
                      {foundCoins && (
                        <div>
                          <h3 className={style.tableTitle}>
                            {foundCoins.length} Records Show on chart
                          </h3>
                        </div>
                      )}

                      {/* ? coinAllInfo.description.en.replace(/<[^>]+>/g, "") */}
                      <div
                        className={style.toptablestatus}
                        style={{ maxHeight: "20rem" }}
                      >
                        <ul>
                          {coinAllInfo.status_updates.length > 0 ? (
                            coinAllInfo.status_updates.map((descript) => (
                              <li
                                key={descript.created_at}
                                className={style.tableTitle}
                              >
                                <p className={cardStyle.infotext}>
                                  Date: {descript.created_at} <br />
                                  Category: {descript.category}
                                </p>
                                {descript.description}--
                              </li>
                            ))
                          ) : (
                            <div className={style.errorMessage}>
                              Any Event will show here if its available , we
                              coulden't found anything for this Coin
                            </div>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h2>{error}</h2>
              )}
            </Card>

            <hr />

            {/* ///////////////////////////////////////table/////////////////////////////// */}
            <Card className={`${classes.input} ${classes.topchartdetail}`}>
              <hr />
              <div className={cardStyle.infotext}>
                <span title="Click to open Google Trend">
                  <a
                    href={`https://trends.google.com/trends/explore?q=${coinAllInfo.id}&geo=US`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={
                        coinAllInfo.image.small ? coinAllInfo.image.small : "#"
                      }
                      alt="click to open Google Trend"
                    />
                  </a>
                </span>
                <details style={{ color: "#CCC" }}>
                  <summary className={cardStyle.infotext}>
                    {coinAllInfo.links.blockchain_site
                      ? coinAllInfo.links.blockchain_site.filter(
                          (sites) => sites !== ""
                        ).length
                      : null}
                    - Official WebSites
                  </summary>
                  {coinAllInfo.links.blockchain_site
                    ? coinAllInfo.links.blockchain_site
                        .filter((sites) => sites !== "")
                        .map((site) => (
                          <li key={site} className={cardStyle.infotext}>
                            <a
                              className={cardStyle.infotext}
                              href={site}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {site}
                            </a>
                          </li>
                        ))
                    : null}
                </details>
                <hr />
                {/* ////////////////////////////////////////first line of detail///////////////////////////////////////// */}
                <div className={cardStyle.container}>
                  <div className={cardStyle.tableContainer}>
                    <Card className={cardStyle.mycard}>
                      <img src={stock} alt="stock" />
                      community score
                      <Progress
                        done={
                          coinAllInfo.community_score
                            ? coinAllInfo.community_score
                            : ""
                        }
                      />
                      developer score
                      <Progress
                        done={
                          coinAllInfo.developer_score
                            ? coinAllInfo.developer_score
                            : ""
                        }
                      />
                      liquidity score
                      <Progress
                        done={
                          coinAllInfo.liquidity_score
                            ? coinAllInfo.liquidity_score
                            : ""
                        }
                      />
                    </Card>
                  </div>
                  <div className={cardStyle.tableContainer}>
                    <Card className={cardStyle.mycard}>
                      <img src={stock2} />
                      genesis date
                      <div className="emptycontainer">
                        {coinAllInfo.genesis_date
                          ? coinAllInfo.genesis_date
                          : ""}
                      </div>
                      hashing algorithm
                      <div className="emptycontainer">
                        {coinAllInfo.hashing_algorithm
                          ? coinAllInfo.hashing_algorithm
                          : ""}
                      </div>
                      block time in minutes
                      <div className="emptycontainer">
                        {coinAllInfo.block_time_in_minutes
                          ? coinAllInfo.block_time_in_minutes
                          : ""}
                      </div>
                    </Card>
                  </div>
                  <div className={cardStyle.tableContainer}>
                    <Card className={cardStyle.mycard}>
                      <img src={stock3} alt="stock" />
                      categories - {coinAllInfo.categories.length}
                      <div className="emptycontainer">
                        {coinAllInfo.categories.length > 1 ? (
                          <ul>
                            {coinAllInfo.categories.map(
                              (coincategory, index) => (
                                <li key={index}> {coincategory}</li>
                              )
                            )}
                          </ul>
                        ) : (
                          coinAllInfo.categories
                        )}
                      </div>
                      official forum
                      <div className="emptycontainer">
                        {coinAllInfo.links.official_forum_url
                          ? coinAllInfo.links.official_forum_url
                          : ""}
                      </div>
                      twitter
                      <div className="emptycontainer">
                        {coinAllInfo.links.twitter_screen_name
                          ? coinAllInfo.links.twitter_screen_name
                          : ""}
                      </div>
                    </Card>
                  </div>
                  <div className={cardStyle.tableContainer}>
                    <Card className={cardStyle.mycard}>
                      <img src={stock4} alt="stock" />
                      public interest stats
                      <div className="emptycontainer">
                        <p
                          style={{
                            position: "absolute",
                            left: "5rem",
                            top: ".2rem",
                          }}
                        >
                          {coinAllInfo.public_interest_stats.alexa_rank
                            ? coinAllInfo.public_interest_stats.alexa_rank
                            : ""}
                        </p>
                      </div>
                      sentiment votes down
                      <Progress
                        done={
                          coinAllInfo.sentiment_votes_down_percentage
                            ? coinAllInfo.sentiment_votes_down_percentage
                            : ""
                        }
                      />
                      sentiment votes up
                      <Progress
                        done={
                          coinAllInfo.sentiment_votes_up_percentage
                            ? coinAllInfo.sentiment_votes_up_percentage
                            : ""
                        }
                      />
                    </Card>
                  </div>
                </div>

                <details style={{ color: "rgb(57,133,197)" }}>
                  <summary className={cardStyle.infotext}>
                    More info {coinAllInfo.id}
                  </summary>
                  {parse(
                    `${
                      coinAllInfo.description.en
                        ? coinAllInfo.description.en
                        : ""
                    }`
                  )}
                </details>
              </div>
            </Card>
          </div>
        </Card>
      </motion.div>
    );
  } else {
    return (
      <Card className={classes.card}>
        <div className={`${style.tableContainer} ${classes.App}`}>
          Not Loading
        </div>
      </Card>
    );
  }
}

export default Details;

// npm install html-to-text
