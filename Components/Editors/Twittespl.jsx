import React from "react";
import { useEffect, useState } from "react";
import Card from "../UI/Card";
import InputEmoji from "react-input-emoji";
import LoremMaker from "../UI/LoremMaker";
import ReactTooltip from "react-tooltip";
import "../Styles/inventory.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import classes from "../Styles/Card.module.css";
import style from "../Styles/about.module.css";
import style2 from "../Styles/UsersList.module.css";
import useImageUploader from "../CustomHooks/useImageUploader";
import TextareaAutosize from 'react-textarea-autosize';

const Twittespl = () => {
  const [tweet, setTweet] = useState(
    JSON.parse(localStorage.getItem("tweet")) || ""
  );
  const [Stweet, setSTweet] = useState([]);
  const [endChar, setEndChar] = useState("");
  const [divDirection, setDivDirection] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [clipArtforshow, setClipArtforshow] = useState("");
  const [addCounter, setAddCounter] = useState(false);
  const [counterlenght, setCounterlenght] = useState("");
  const [waterMark, setWaterMark] = useState("");
  const [ColorWater, setColorWater] = useState("#ff0000");
  const [posWatermark, setposWatermark] = useState(
    JSON.parse(localStorage.getItem("posWatermaek")) || "24"
  );
  const [posverWatermark, setposverWatermark] = useState(
    JSON.parse(localStorage.getItem("posverWatermark")) || "22"
  );
  const [detailElement, setDetailElement] = useState(false);
  const [detailUpload, setDetailUpload] = useState(false);
  const { File, FilePath, dateFilePath, UploadForm } = useImageUploader();

  useEffect(() => {
    // const backgroundTweet = getComputedStyle(document.documentElement).getPropertyValue('--tweetBackgroung');
    // console.log(backgroundTweet);
    // console.log(File);
    document.documentElement.style.setProperty(
      "--tweetBackgroung",
      `url('${File}')`
    );

    let Counter = "";
    if (addCounter) {
      Counter = counterlenght + 1;
    } else {
      Counter = 0;
    }
    let s = tweet;

    const size = 280 - endChar.length - Counter;
    const regex = new RegExp(String.raw`\S.{1,${size - 2}}\S(?= |$)`, "g");
    let chunk = s.match(regex);
    chunk && setSTweet(chunk);
  }, [tweet, endChar, addCounter, File, ColorWater]);

  // const settestcolor = (e) => {
  //   document.documentElement.style.setProperty("--color", e.target.value);
  // }

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  const handleCopyClick = (tweets, key, endChar) => {
    var Counter = "";
    if (addCounter) {
      Counter = +key + 1 + ".";
    } else {
      Counter = "";
    }
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(Counter + tweets + endChar)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        //linebelow just for show in page clipart is already fill and no need this usestate
        setClipArtforshow([Counter + tweets + endChar, key]);
        setCounterlenght(key.length);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setlorem = (newValue) => {
    setTweet(newValue);
  };

  // console.log(File);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Twitte Splitter</title>
        <meta
          name="description"
          content="This tweet splitter will split a long tweet into multiple tweets automatically. You can split the tweet by character."
        />
        <meta
          name="description"
          content="A simple Twitter to Multi twitte splitter. EASY TO USE, IT CAN BE USED IN A SECS."
        />
        <meta
          name="description"
          content="You can now split twitter messages into multiple parts.with next indicator"
        />
        <meta
          name="description"
          content="share image on twitter? need watermark? add water mark now"
        />
      </Helmet>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div className={style.container}>
          <h1
            className={style2.title}
            data-for="main"
            data-tip="long story on twitter? try this tool.<br/> you can use this tool to create multiple tweets<br/> with different text and different end char<br/> even with counter"
          >
            Twitte Splitter
          </h1>
          <h2 className={style2.smallsubtitle}>
            This tweet splitter will split a long tweet into multiple tweets
            automatically. You can split the tweet by time or by character.
            <br />
            {clipArtforshow[1] ? (
              `Box Below is Your ClipBoard Now ➡️ Part + ${
                +clipArtforshow[1] + 1
              }`
            ) : (
              <br />
            )}
          </h2>

          <Card className={`${classes.clipboardinside} ${classes.topTwitter}`}>
            {clipArtforshow.length ? (
              <div
                dir={divDirection ? "ltr" : "rtl"}
                className={classes.clipboardinsidetext}
              >
                <div
                  style={{
                    position: "absolute",
                    color: `${ColorWater}`,
                    top: `${posverWatermark - 2}%`,
                    left: `${posWatermark}%`,
                    opacity: "0.5",
                    transform: "rotate(-45deg)",
                    whiteSpace: "break-spaces",
                  }}
                >
                  {waterMark}
                </div>
                <div className={classes.insidecontent}>{clipArtforshow[0]}</div>
              </div>
            ) : null}
          </Card>
          <div className={style.twitterdiv}>
            <div
              className={style.lorembox}
              style={{ color: "#CCC", height: "fit-content" }}
            >
              <details
                style={{ color: "#CCC" }}
                open={detailElement}
                onToggle={(e) => setDetailElement(e.currentTarget.open)}
              >
                <summary>- Lorem Maker</summary>
                <div>
                  <LoremMaker
                    onChange={setlorem}
                    openDetails={(e) => setDetailElement(e)}
                  />
                </div>
              </details>
            </div>
            <div
              className={style.lorembox}
              style={{ color: "#CCC", height: "fit-content" }}
            >
              <details
                style={{ color: "#CCC" }}
                open={detailUpload}
                onToggle={(e) => setDetailUpload(e.currentTarget.open)}
              >
                <summary>- Background Uploader</summary>
                <div>{UploadForm}</div>
              </details>
            </div>
          </div>

          <form dir={divDirection ? "ltr" : "rtl"}>
          
              <TextareaAutosize 
                value={tweet}
                name="text"
                id="text"
                onChange={(e) => (
                  setTweet(e.target.value),
                  localStorage.setItem("tweet", JSON.stringify(e.target.value))
                )}
                placeholder="write your long tweet here"
                className={style.textareamain}
              ></TextareaAutosize>
            
            {/* Next Indicator */}
            <InputEmoji
              value={endChar}
              onChange={setEndChar}
              onEnter={setEndChar}
              placeholder="Write next indicator 20Chr Max like ⬇️,👇"
              maxLength={15}
            />
            <InputEmoji
              value={waterMark}
              onChange={setWaterMark}
              onEnter={setWaterMark}
              placeholder="WaterMark 50Chr Max , just for screenshot"
              maxLength={50}
            />
            {/* Watermark */}

            <br />
            <br />
            <hr />
          </form>
        </div>
        <div
          className={style.container}
          style={{
            paddingTop: "0",
            minHeight: "20rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "flex-start",
            alignSelf: "flex-start",
          }}
        >
          <div
            className={style.watermarkdiv}
            onClick={(e) => detailElement !== false && setDetailElement(false)}
            dir="ltr"
          >
            <div
              className={style.watermatkchilds}
              style={{ position: "relative", margin: "0 0 -.5rem 0" }}
            >
              <input
                style={{ padding: "10px" }}
                className={style.languagebtn}
                type="color"
                value={ColorWater}
                onChange={(e) => setColorWater(e.target.value)}
                data-for="main"
                data-tip="Chose Color for watermark"
              />
              <h5
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: "2rem",
                  fontSize: ".8rem",
                  pointerEvents: "none",
                }}
              >
                Watermark
              </h5>
            </div>
            <div
              className={style.watermatkchilds}
              style={{ marginTop: "10px" }}
            >
              ↔️ &nbsp;{posWatermark}&nbsp;
              <input
                type="range"
                min={1}
                max={100}
                step={1}
                value={posWatermark}
                onChange={(e) => (
                  setposWatermark(e.target.value),
                  localStorage.setItem(
                    "posWatermark",
                    JSON.stringify(e.target.value)
                  )
                )}
                className={style.rangeselector}
                data-for="main"
                data-tip="Change the WaterMark Position"
              />
              <input
                type="range"
                min={1}
                max={100}
                step={1}
                value={posverWatermark}
                onChange={(e) => (
                  setposverWatermark(e.target.value),
                  localStorage.setItem(
                    "posverWatermark",
                    JSON.stringify(e.target.value)
                  )
                )}
                style={{ transform: "rotate(90deg)" }}
                className={style.rangeselector}
                data-for="main"
                data-tip="Change the WaterMark Position"
              />
              ↕️ &nbsp;{posverWatermark}
            </div>
            <button
              className={(style.watermatkchilds, style.languagebtn)}
              onClick={(e) => setDivDirection(!divDirection)}
              data-for="main"
              data-tip="Change Direction <br /> (LTR/RTL)"
            >
              {divDirection ? "➡️" : "⬅️"} {divDirection ? "LTR" : "RTL"}
            </button>
            <button
              className={(style.watermatkchilds, style.languagebtn)}
              onClick={(e) => setAddCounter(!addCounter)}
              data-for="main"
              data-tip="Add Counter <br /> to tweets <br/> it will be like 1-tweet"
            >
              {!addCounter ? " Count  🔢 " : "NoCount 🔠 "}
            </button>
            <button
              className={(style.watermatkchilds, style.languagebtn)}
              onClick={() =>
                tweet !== ""
                  ? (setTweet(""),
                    setSTweet(""),
                    setWaterMark(""),
                    localStorage.setItem("tweet", JSON.stringify("")),
                    localStorage.setItem("posWatermark", JSON.stringify("")),
                    localStorage.setItem("posverWatermark", JSON.stringify("")))
                  : setEndChar("")
              }
              data-for="main"
              data-tip="Clear everything <br/>"
            >
              Clear 🆑
            </button>
            {/* image:{File} */}
          </div>
        </div>

        <div className={style.container}>
          <div className={classes.inputinside}>
            <ul>
              {Stweet !== null && Stweet.length
                ? Object.entries(Stweet).map(([key, tweets]) => (
                    <li
                      key={tweets.index}
                      className={style.litweet}
                      style={
                        addCounter
                          ? { listStyleType: "none" }
                          : { listStyleType: "decimal" }
                      }
                      onClick={(e) => handleCopyClick(tweets, key, endChar)}
                    >
                      {addCounter ? +key + 1 + "." : ""}
                      {tweets}
                      {endChar}
                      <br />
                      <div
                        style={{
                          position: "absolute",
                          color: `${ColorWater}`,
                          top: `${posverWatermark}%`,
                          left: `${posWatermark}%`,
                          opacity: "0.5",
                          transform: "rotate(-45deg)",
                          whiteSpace: "break-spaces",
                        }}
                      >
                        {waterMark}
                      </div>
                      <button
                        className={style.languagebtn}
                        onClick={(e) => {
                          handleCopyClick(tweets, key, endChar);
                        }}
                      >
                        <span>
                          ({tweets.length} Charecter)
                          {isCopied ? " Copied!" : " Copy"}
                        </span>
                      </button>
                      <hr />
                    </li>
                  ))
                : ""}
            </ul>
          </div>

          <ReactTooltip
            id="main"
            multiline={true}
            place="bottom"
            type="info"
            effect="float"
            className="customeTheme"
            delayHide={800}
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default Twittespl;
