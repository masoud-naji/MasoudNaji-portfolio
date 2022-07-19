/** @jsxImportSource theme-ui */
import React, { useEffect, useState, Fragment } from "react";
import style from "../../Components/Crypto/UsersList.module.css";
import { split } from "lodash";
import Chart from "../../Components/Chart/News";
import axios from "axios";
import { Card } from "theme-ui";
import useCoins, { searchForPrices } from "../../lib/useCoins";
import stock from "../../public/Images/stock.png";
import stock2 from "../../public/Images/stock2.png";
import stock3 from "../../public/Images/stock3.png";
import stock4 from "../../public/Images/stock4.png";
import versus from "../../public/Images/pngaaa.com-719740.png";
import Image from "next/image";
// import classes from "../Styles/Card.module.css";
// import cardStyle from "../Styles/infoCard.module.css";
// import Card from "../../Components/UI/Card";
// import "../Styles/progressbar.css";
// import infostyle from "../Styles/about.module.css";
// import parse from "html-react-parser";



function Compare() {
  // const coinCTX = useContext(CoinContext);
  const [foundCoins, setFoundCoins] = useState([]);
  const [foundCoins2, setFoundCoins2] = useState([]);
  const [name, setName] = useState("cardano");
  const [name2, setName2] = useState("solana");
  const [error, setError] = useState();
  const [isItLoading, setIsItLoading] = useState(true);
  const [isItLoadingCoinDetail, setIsItLoadingCoinDetail] = useState(true);
  const [coinAllInfo, setCoinAllInfo] = useState([]);
  const [coinAllInfo2, setCoinAllInfo2] = useState([]);
  const [timeLabale, settimeLabale] = useState("");

  ////////////////////////////////////////////////Coin List/////////////////////////////////////////
  const [coinsList, setCoinsList] = useState([]);
  useEffect(() => {
    const GetCoinsList = async () => {
      const featuredCoins = await useCoins();
      setCoinsList(featuredCoins.data);
    };
    GetCoinsList();
  }, []);
  
  
  
  
  
  
  
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

    console.log(alldatavalue);
    console.log(alldataLabel);
    setStartTime(Math.round(+alldatavalue / 1000));
    settimeLabale(alldataLabel);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
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
          // coinCTX.setChartData(res.data.prices);
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

    const getCoinNews2 = () =>
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${name2}`)
        .then((res) => {
          if (res.status !== 200) return;
          setIsItLoadingCoinDetail(false);
          setCoinAllInfo2(res.data);

          // console.log(res.data);
          // console.log(res.data.description.en);
        })
        .catch((error) => {
          setError(error);
          setIsItLoadingCoinDetail(true);
          setCoinAllInfo2([]);
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
    const search2 = () =>
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${name2}/market_chart/range?vs_currency=usd&from=${startTime}&to=${endTime}`
        )
        .then((res) => {
          if (res.status !== 200) return;
          // console.log(res.status);
          setIsItLoading(false);
          setFoundCoins2(res.data.prices);
          // coinCTX.setChartData2(res.data.prices);
        })
        .catch((error) => {
          setError(error);
          setIsItLoading(true);
          setFoundCoins2([]);
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
    getCoinNews2();
    search2();
  }, [name, name2, startTime, endTime]);

  const Progress = ({ done, coinNumber }) => (
    <div className="MyProgress" style={{ overflow: "hidden" }}>
      <div
        className="progress-done"
        style={{ opacity: 1, width: `${done}%`, overflow: "hidden" }}
      >
        <img
          style={{
            all: "initial",
            margin: "0 0 0 0rem",
            left: "0",
            position: "absolute",
            opacity: ".5",
            aspectRatio: "1/1",
          }}
          src={coinNumber}
          alt={coinNumber}
        />
        <p>{done}%</p>
      </div>
    </div>
  );

  const Firstcoinimage = () => (
    <img
      style={{
        all: "initial",
        margin: "0 1rem 0 0rem",
        opacity: ".5",
        left: "0",
        position: "absolute",
        // height: "100%",
        // width: "100%",
        aspectRatio: "1/1",
      }}
      src={coinAllInfo.image.small ? coinAllInfo.image.small : "#"}
      alt="click to open Google Trend"
    />
  );
  const Secondcoinimage = () => (
    <img
      style={{
        all: "initial",
        margin: "0 1rem 0 0rem",
        opacity: ".5",
        left: "0",
        position: "absolute",
        // height: "100%",
        // width: "100%",
        aspectRatio: "1/1",
      }}
      src={coinAllInfo2.image.small ? coinAllInfo2.image.small : "#"}
      alt="click to open Google Trend"
    />
  );

  if (isItLoading) {
    return (
      <Card  sx={{
        color: "primary",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}>
        <div>
          Loading ...
          <br />
          <progress />
        </div>
      </Card>
    );
  } else if (isItLoadingCoinDetail) {
    return (
      <Card  sx={{
        color: "primary",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}>
        <div>
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
    Object.keys(coinAllInfo).length > 0 &&
    Object.keys(coinAllInfo2).length > 0
  ) {
    return (
        <Card  sx={{
        color: "primary",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}>
          <div className={style.tableContainer}>
            {/* /////////////////////////////////////////////////////Chart////////////////////////////////////////////////////// */}

            <Card  sx={{
        color: "primary",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}>
              {foundCoins && foundCoins.length > 0 ? (
                <div>
                  <div>
                    <Chart data={foundCoins} data2={foundCoins2} />
                    {/* <Chart data={foundCoins} /> */}
                  </div>
                  <div >
                    <div
                      style={{ background: "rgb(37, 54, 106)" }}
                      
                    ></div>

                    {/* /////////////////////////////////////////Fear Greed ////////////////////////////////////////// */}
                    <div className={style.toptablestatus}>
                      <Image
                        src="https://alternative.me/crypto/fear-and-greed-index.png"
                        alt="Latest Crypto Fear & Greed Index"
                        style={{
                          width: "65%",
                          borderRadius: ".6rem",
                          filter: "hue-rotate(180deg)",
                          border: "4px rgb(252, 125, 22) solid",
                      }}
                      height="300"
                      width="300"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <h2>{error}</h2>
              )}
            </Card>

            <hr />

            {/* ///////////////////////////////////////table/////////////////////////////// */}
            <Card  sx={{
        color: "primary",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}>
              {/* ///////////////////////////////////////////////// coin select DropDown//////////////////////////////// */}
              <div >
                <div>
                  <select
                    className={style.dropdownsmall}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Select Coin"
                    value={name}
                    // options={coinNameList}
                  >
                    {typeof coinsList !== "undefined" ? (
                      coinsList.map((coin) => (
                        <option key={coin.id} value={coin.id}>
                          {coin.symbol}
                        </option>
                      ))
                    ) : (
                      <option value="btc">btc</option>
                    )}
                  </select>
                </div>
                <div>
                  <select
                    className={style.dropdownsmall}
                    onChange={(e) => setName2(e.target.value)}
                    placeholder="Select Coin"
                    value={name2}
                    // options={coinNameList}
                  >
                    {typeof coinsList !== "undefined" ? (
                      coinsList.map((coin) => (
                        <option key={coin.id} value={coin.id}>
                          {coin.symbol}
                        </option>
                      ))
                    ) : (
                      <option value="btc">btc</option>
                    )}
                  </select>
                </div>

                {/* ///////////////////////////////////////// Time Controller DropDown////////////////////////////////////////// */}
                <div>
                  <select
                    className={style.dropdownsmall}
                    onChange={(e) => setStarthandler(e)}
                    placeholder="Select Duration ..."
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
                    </>
                  </select>
                </div>
              </div>

              {/* //////////////////////////////////////////////BTNS//////////////////////////////////////////////// */}
              <hr />
              <div >
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
                  <img
                    src={versus}
                    alt="versus"
                    style={{ width: "1rem", margin: "0 1rem 0 1rem" }}
                  />
                  <a
                    href={`https://trends.google.com/trends/explore?q=${coinAllInfo2.id}&geo=US`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={
                        coinAllInfo2.image.small
                          ? coinAllInfo2.image.small
                          : "#"
                      }
                      alt="click to open Google Trend"
                    />
                  </a>
                </span>

                <hr />
                {/* ////////////////////////////marketCAp//////////////////////////////// */}
                <div >
                  <Card  sx={{
        color: "primary",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}>
                    <section className="infoandpichrt">
                    
                        <img src={stock3} />
                        <Firstcoinimage />
                        Market Cap : $&nbsp;
                        {coinAllInfo.market_data.market_cap.usd
                          ? coinAllInfo.market_data.market_cap.usd.toLocaleString(
                              "en-US"
                            )
                          : ""}
                        <br />
                        Price : $&nbsp;
                        {coinAllInfo.market_data.current_price.usd
                          ? coinAllInfo.market_data.current_price.usd.toLocaleString(
                              "en-US"
                            )
                          : ""}
                    
                        <Secondcoinimage />
                        Market Cap : $&nbsp;
                        {coinAllInfo2.market_data.market_cap.usd
                          ? coinAllInfo2.market_data.market_cap.usd.toLocaleString(
                              "en-US"
                            )
                          : ""}
                        <br />
                        Price : $&nbsp;
                        {coinAllInfo2.market_data.current_price.usd
                          ? coinAllInfo2.market_data.current_price.usd.toLocaleString(
                              "en-US"
                            )
                          : ""}
                 
                        - Market Cap of the {coinAllInfo2.id} is &nbsp;
                        {coinAllInfo.market_data.market_cap.usd
                          ? (
                              (coinAllInfo2.market_data.market_cap.usd /
                                coinAllInfo.market_data.market_cap.usd) *
                              100
                            ).toFixed(2)
                          : ""}
                        % of the {coinAllInfo.id}.
                        <br />- {coinAllInfo.id} with the market cap of&nbsp;
                        {coinAllInfo2.id}
                        &nbsp;should be roughly $&nbsp;
                        {coinAllInfo.market_data.market_cap.usd
                          ? (
                              coinAllInfo2.market_data.market_cap.usd /
                              (coinAllInfo.market_data.market_cap.usd /
                                coinAllInfo.market_data.current_price.usd)
                            ).toLocaleString("en-US")
                          : ""}{" "}
                        
                        💵
                        <br />- {coinAllInfo2.id} with the market cap of&nbsp;
                        {coinAllInfo.id}
                        &nbsp;should be roughly $&nbsp;
                        {coinAllInfo.market_data.market_cap.usd
                          ? (
                              coinAllInfo.market_data.market_cap.usd /
                              (coinAllInfo2.market_data.market_cap.usd /
                                coinAllInfo2.market_data.current_price.usd)
                            ).toLocaleString("en-US")
                          : ""}{" "}
                        💵
           

                      {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
                      {/* <motion.div
                        animate={{
                          scale: [1, 2, 2, 1, 1],
                          rotate: [0, -120, 270, 360, 0],
                          borderRadius: ["30%", "20%", "50%", "80%", "20%"],
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          times: [0, 0.2, 0.5, 0.8, 1],
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                        style={{
                          background: "#ffc0eb",
                          borderRadius: "30px",
                          width: "150px",
                          height: "150px",
                        }}
                      >
                        test
                      </motion.div> */}
                      {/* <motion.div
                        initial={{ x: "-100vw" }}
                        animate={{ x: "0" }}
                        transition={{
                          type: "spring",
                          stiffness: 120,
                          delay: 5,
                        }}
                        style={{
                          background: "#ffc0eb",
                          borderRadius: "30px",
                          width: "150px",
                          height: "150px",
                        }}
                      > */}

                      <div
                        style={{
                          backgroundImage: `conic-gradient(blue  ${
                            coinAllInfo.market_data.market_cap.usd
                              ? (
                                  (coinAllInfo2.market_data.market_cap.usd /
                                    coinAllInfo.market_data.market_cap.usd) *
                                  100
                                ).toFixed(2)
                              : ""
                          }%, skyblue 0%, rgb(22, 160, 252))`,
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "0px solid black",
                            backgroundColor: "transparent",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          {coinAllInfo.market_data.market_cap.usd
                            ? (
                                (coinAllInfo2.market_data.market_cap.usd /
                                  coinAllInfo.market_data.market_cap.usd) *
                                100
                              ).toFixed(2)
                            : ""}{" "}
                          %
                        </span>
                      </div>

                      {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
                    </section>
                  </Card>
                </div>
                {/* //////////////////////////////////////////////////////////// */}
                <hr />
                {/* ////////////////////////////////////////first line of detail///////////////////////////////////////// */}
                <div >
                  {/* //////////////////////////////////////////////////////////// */}
                  <div >
                    <Card  sx={{
        color: "primary",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}>
                      <img src={stock} alt="stock" />
                      community score
                      <Progress
                        coinNumber={coinAllInfo.image.small}
                        done={
                          coinAllInfo.community_score
                            ? coinAllInfo.community_score
                            : ""
                        }
                      />
                      <Progress
                        coinNumber={coinAllInfo2.image.small}
                        done={
                          coinAllInfo2.community_score
                            ? coinAllInfo2.community_score
                            : ""
                        }
                      />
                      {/* ////////////////////// */}
                      developer score
                      <Progress
                        coinNumber={coinAllInfo.image.small}
                        done={
                          coinAllInfo.developer_score
                            ? coinAllInfo.developer_score
                            : ""
                        }
                      />
                      <Progress
                        coinNumber={coinAllInfo2.image.small}
                        done={
                          coinAllInfo2.developer_score
                            ? coinAllInfo2.developer_score
                            : ""
                        }
                      />
                      {/* ////////////////////// */}
                      liquidity score
                      <Progress
                        coinNumber={coinAllInfo.image.small}
                        done={
                          coinAllInfo.liquidity_score
                            ? coinAllInfo.liquidity_score
                            : ""
                        }
                      />
                      <Progress
                        coinNumber={coinAllInfo2.image.small}
                        done={
                          coinAllInfo2.liquidity_score
                            ? coinAllInfo2.liquidity_score
                            : ""
                        }
                      />
                    </Card>
                  </div>
                  {/* //////////////////////////////////////////////////////////// */}

                  {/* //////////////////////////////////////////////////////////// */}
                  <div >
                    <Card  sx={{
        color: "primary",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}>
                      <img src={stock4} alt="stock" />
                      public interest stats
                      <div
                        className="emptycontainer"
                        style={{
                          opacity: 1,
                          width: "100%",
                          maxWidth: "100%",
                          textAlign: "center",
                        }}
                      >
                        <Firstcoinimage />
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
                      <div
                        className="emptycontainer"
                        style={{
                          opacity: 1,
                          width: "100%",
                          maxWidth: "100%",
                          textAlign: "center",
                        }}
                      >
                        <Secondcoinimage />
                        <p
                          style={{
                            position: "absolute",
                            left: "5rem",
                            top: ".2rem",
                          }}
                        >
                          {" "}
                          {coinAllInfo2.public_interest_stats.alexa_rank
                            ? coinAllInfo2.public_interest_stats.alexa_rank
                            : ""}
                        </p>
                      </div>
                      {/* ////////////////////// */}
                      sentiment votes down
                      <Progress
                        coinNumber={coinAllInfo.image.small}
                        done={
                          coinAllInfo.sentiment_votes_down_percentage
                            ? coinAllInfo.sentiment_votes_down_percentage
                            : ""
                        }
                      />
                      <Progress
                        coinNumber={coinAllInfo2.image.small}
                        done={
                          coinAllInfo2.sentiment_votes_down_percentage
                            ? coinAllInfo2.sentiment_votes_down_percentage
                            : ""
                        }
                      />
                      {/* ////////////////////// */}
                      sentiment votes up
                      <Progress
                        coinNumber={coinAllInfo.image.small}
                        done={
                          coinAllInfo.sentiment_votes_up_percentage
                            ? coinAllInfo.sentiment_votes_up_percentage
                            : ""
                        }
                      />
                      <Progress
                        coinNumber={coinAllInfo2.image.small}
                        done={
                          coinAllInfo2.sentiment_votes_up_percentage
                            ? coinAllInfo2.sentiment_votes_up_percentage
                            : ""
                        }
                      />
                      {/* /////////////////////////////// */}
                    </Card>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Card>
   
    );
  } else {
    return (
         <Card  sx={{
        color: "primary",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}>
          <div className={`${style.tableContainer}`}>
            Not Loading
          </div>
        </Card>
     
    );
  }
}

export default Compare;

// npm install html-to-text
