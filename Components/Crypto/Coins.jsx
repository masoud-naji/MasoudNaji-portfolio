/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react";
import { Card } from "theme-ui";
import style from "./UsersList.module.css";
import Pagination from "../UI/pagination";
import Paginate from "../../lib/paginate";
import Select from "react-select";
import customDropDownStyles from "../../lib/DropDownStyle";

function Coins({ coins }) {
  
  const coinCTX = coins;
  const [foundCoins, setFoundCoins] = useState(coinCTX);
  const [order, setOrder] = useState("ASC");
  const [isItLoading, setIsItLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [name, setName] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [favShow, setFavShow] = useState(false);
  const paginatedFilteredCoins = Paginate(foundCoins, currentPage, pageSize);
  const paginationOptions = [
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
  ];

  useEffect(() => {
    coinCTX ? setIsItLoading((prev) => false) : setIsItLoading((prev) => false);
  }, [coinCTX]);

  //////////////////////////////////////////// search by filter//////////////////////////////////////////////////
  const filter = (event) => {
    const keyword = event.target.value;

    if (keyword !== "") {
      const results = coinCTX.coins
        .filter((coin) => coin !== null)
        .filter((coin) => {
          return (
            coin.id.startsWith(keyword.toLowerCase()) ||
            coin.symbol.startsWith(keyword.toLowerCase())
          );
        });
      setFoundCoins(results);
      setCurrentPage(1);
    } else {
      setFoundCoins(coinCTX.coins);
      // If the text field is empty, show all users
    }
    setName(keyword);
  };
  ////////////////////////////////////  Sorting ////////////////////////////////////////////////////////////
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("ASC");
    }
  };
  //////////////////////////////sort onfav///////////////////////////////////////////////////////////////
  const sortOnFav = (col) => {
    if (order === "ASC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("ASC");
    }
  };

  ////////////////////////////////////Pagination////////////////////////////////////////////////////////////
  const PageChangeHandler = (page) => {
    setCurrentPage(page);
  };

  const optionSelectHandler = (event) => {
    setPageSize(event.value);
    setCurrentPage(1);
  };

  const onRowClick = (coinname) => {
    coinCTX.setSelectedCoin(coinname);
    Link("/Details");
  };

  // ///////////////////////////////Tops gainer and loser Finder////////////////
  const TopGainer = coinCTX
    ? coinCTX.reduce(
        (max, coin) =>
          coin.price_change_percentage_24h > max
            ? coin.price_change_percentage_24h
            : max,
        coinCTX[0].price_change_percentage_24h
      )
    : 0;

  const TopGainerID = coinCTX
    ? coinCTX.filter(
        (coin) => coin.price_change_percentage_24h === TopGainer
      )[0].id
    : "No Gainer";

  const TopLoser = coinCTX
    ? coinCTX.reduce(
        (min, coin) =>
          coin.price_change_percentage_24h < min
            ? coin.price_change_percentage_24h
            : min,
        coinCTX[0].price_change_percentage_24h
      )
    : 0;
  const TopLoserID = coinCTX
    ? coinCTX.filter(
        (coin) => coin.price_change_percentage_24h === TopLoser
      )[0].id
    : "No loser";
  // ///////////////////////////////Favorite////////////////
  const addFavoritehandler = (coin) => {
    coinCTX.setFavoritesCoin((prev) => [...prev, coin.id]);
  };

  const removeFavoritehandler = (FavoriteCoin) => {
    coinCTX.setFavoritesCoin((prev) =>
      prev.filter((coin) => coin !== FavoriteCoin.id)
    );
  };

  const itemIsFavorite = (coin) => {
    if (coinCTX.FavoritesCoin) {
      return coinCTX.FavoritesCoin.some((favorite) => favorite === coin.id);
    }
    return false;
  };

  const toggleFavorite = (e, coin) => {
    e.preventDefault();
    localStorage.removeItem("favorites");
    if (itemIsFavorite(coin)) {
      removeFavoritehandler(coin);
    } else {
      addFavoritehandler(coin);
    }
    localStorage.setItem(
      "favoriteCoins",
      JSON.stringify(coinCTX.FavoritesCoin)
    );
  };

  const FavCoinsList = () => {
    if (favShow) {
      const favelistcoin =
        coinCTX.coins &&
        coinCTX.coins.length > 0 &&
        coinCTX.coins.filter((coin) => coinCTX.FavoritesCoin.includes(coin.id));
      setFoundCoins(favelistcoin);
    } else {
      setFoundCoins(coinCTX.coins);
    }
    setFavShow((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////
  // const customStyles = {
  //   control: (base, state) => ({
  //     ...base,
  //     color: "white",
  //     height: "38px",
  //     background: "transparent",
  //     // match with the menu
  //     borderRadius: "0.5rem",
  //     // Overwrittes the different states of border
  //     border: state.isFocused ? "2px double #ccc" : "2px dotted #ccc",
  //     // Removes weird border around container
  //     boxShadow: state.isFocused ? null : null,
  //     "&:hover": {
  //       // Overwrittes the different states of border
  //       // borderColor: state.isFocused ? "red" : "blue",
  //       // border: "1px solid #ff8b67",
  //       // boxShadow: "0px 0px 6px #ff8b67"
  //     },
  //   }),
  //   menu: (base) => ({
  //     ...base,
  //     // override border radius to match the box
  //     borderRadius: 10,
  //     // kill the gap
  //     marginTop: 0,
  //   }),
  //   menuList: (base) => ({
  //     ...base,
  //     // kill the white space on first and last option
  //     padding: 0,
  //     background: "transparent",
  //   }),
  //   singleValue: (base) => ({
  //     ...base,
  //     height: "100%",
  //     color: "#white",
  //     paddingTop: "3px",
  //     borderRadius: 10,
  //   }),
  //   option: (styles) => {
  //     return {
  //       ...styles,
  //       // backgroundColor: "transparent",
  //       borderRadius: 10,
  //     };
  //   },
  // };

  if (isItLoading) {
    return (
      <Card
        sx={{
          maxWidth: 256,
        }}
      >
        <div className={`${style.tableContainer}`}>
          Loading ...
          <br />
          <progress />
        </div>
      </Card>
    );
  } else {
    return (
      <Card
        // sx={{
        //   maxWidth: 256,
        // }}
      >
        <div className={style.tableContainer}>
          {/* ///////////////Search///////////////// */}
          <div className={style.toptable_child}>
            <input
              style={{ position: "relative" }}
              type="search"
              value={name}
              id={style.myInput}
              onChange={filter}
              onDoubleClick={() => setShowDetails(!showDetails)}
              placeholder="Search for coin names.."
              list={showDetails && "suggestions"}
            />

            <Select
              className={style.dropdown}
              options={paginationOptions}
              onChange={optionSelectHandler}
              placeholder="Select Duration ..."
              defaultValue={{ value: 10, label: "10" }}
              styles={customDropDownStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  text: "red",
                  font: "red",
                  primary25: "#A7A7A8",
                  primary: "grey",
                  neutral80: "black",
                  color: "yellow",
                },
              })}
            />

            {/* ///////////////Pagination///////////////// */}
            {/* <div className={style.toptable_childR}> */}
            <Pagination
              itemsCount={foundCoins ? foundCoins.length : 0}
              pageSize={pageSize}
              onPageChange={PageChangeHandler}
              currentPage={currentPage}
            />
            {/* </div> */}
            <section
              type="text"
              className={`${style.dropdown} ${style.infobox}`}
            >
              TopGainer | {TopGainerID} {parseFloat(TopGainer).toFixed(2)} %
            </section>
            <section
              type="text"
              className={`${style.dropdown} ${style.infobox}`}
            >
              TopLoser | {TopLoserID} {parseFloat(TopLoser).toFixed(2)} %
            </section>
          </div>

          <form>
            <table className={style.userTable} rules="all">
              <thead>
                <tr>
                  <th>image</th>
                  <th onClick={FavCoinsList}>Fav</th>
                  <th onClick={() => sorting("market_cap_rank")}>Rank</th>
                  <th onClick={() => sorting("name")}>Name</th>
                  <th onClick={() => sorting("symbol")}>symbol</th>
                  <th onClick={() => sorting("current_price")}>
                    current price
                  </th>
                  <th onClick={() => sorting("total_volume")}>total volume</th>
                  <th onClick={() => sorting("low_24h")}>low 24h</th>
                  <th onClick={() => sorting("high_24h")}>high 24h</th>
                  <th onClick={() => sorting("price_change_percentage_24h")}>
                    price change24h
                  </th>
                  {/* <th>7Days Change</th> */}
                </tr>
              </thead>
              <tbody>
                {foundCoins && foundCoins.length > 0 ? (
                  paginatedFilteredCoins
                    .filter((coin) => coin !== null)
                    .map(
                      (coin) =>
                        coin !== null && (
                          <tr
                            key={coin.id}
                            // onClick={(e) => onRowClick(coin.id)}
                          >
                            <td onClick={(e) => onRowClick(coin.id)}>
                              <img
                                src={coin.image}
                                height="50rem"
                                alt={coin.image}
                              ></img>
                            </td>
                            <td>
                              <button
                                onClick={(e) => toggleFavorite(e, coin)}
                                style={{
                                  backgroundColor: "#ff000000",
                                  border: "0",
                                  padding: "0",
                                }}
                              >
                                {itemIsFavorite(coin) ? "❤️" : "🤍"}
                              </button>
                            </td>
                            <td
                              data-label="market_cap_rank"
                              onClick={(e) => onRowClick(coin.id)}
                            >
                              {coin.market_cap_rank}
                            </td>
                            <td
                              data-label="Name"
                              onClick={(e) => onRowClick(coin.id)}
                            >
                              {" "}
                              {coin.name}
                            </td>
                            <td
                              data-label="symbol"
                              onClick={(e) => onRowClick(coin.id)}
                            >
                              {" "}
                              {coin.symbol}
                            </td>
                            <td
                              data-label="current_price"
                              onClick={(e) => onRowClick(coin.id)}
                            >
                              {coin.current_price}
                            </td>
                            <td
                              data-label="total_volume"
                              onClick={(e) => onRowClick(coin.id)}
                            >
                              {coin.total_volume}
                            </td>
                            <td
                              data-label="low_24h"
                              onClick={(e) => onRowClick(coin.id)}
                            >
                              {coin.low_24h} $
                            </td>
                            <td
                              data-label="high_24h"
                              onClick={(e) => onRowClick(coin.id)}
                            >
                              {coin.high_24h} $
                            </td>
                            <td
                              data-label="price_change_percentage_24h"
                              style={{
                                color:
                                  Math.sign(coin.price_change_percentage_24h) <
                                  0
                                    ? "red"
                                    : "#6adc6a",
                              }}
                              onClick={(e) => onRowClick(coin.id)}
                            >
                              {coin.price_change_percentage_24h}%
                            </td>
                            {/* <td> */}

                            {/* {render7DayChart} */}
                            {/* </td> */}
                          </tr>
                        )
                    )
                ) : (
                  <tr>
                    <td style={{ textAlign: "center", padding: "auto" }}>
                      <h3>No results found!</h3>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </form>
        </div>
      </Card>
    );
  }
}
export default Coins;
