import React, { useState, useEffect } from "react";
import { loremIpsum } from "react-lorem-ipsum";
import style from "../Styles/about.module.css";

export default function LoremMaker(props) {
  const [paragraph, setparagraph] = useState(2);
  const [avgword, setavgword] = useState(8);
  const [avesents, setavesents] = useState(8);
  const [randomiz, setrandomiz] = useState(true);
  const [lorem, setlorem] = useState("");

  useEffect(() => {
    setlorem(
      loremIpsum({
        p: paragraph,
        avgWordsPerSentence: avgword,
        avgSentencesPerParagraph: avesents,
        random: randomiz,
      })
      //   <LoremIpsum
      //     p={paragraph}
      //     avgWordsPerSentence={avgword}
      //     avgSentencesPerParagraph={avesents}
      //     random={randomiz}
      //   />
    );
  }, [paragraph, avgword, avesents, randomiz]);

  const handelChange = (e) => {
    props.onChange(e.target.value);
    props.openDetails(false);
    // console.log(lorem);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <input
        type="range"
        min="1"
        max="50"
        value={paragraph}
        onChange={(e) => setparagraph(e.target.value)}
      />
      &nbsp;({paragraph}) Paragraph Count
      <br />
      <input
        type="range"
        min="1"
        max="20"
        value={avgword}
        onChange={(e) => setavgword(e.target.value)}
      />
      &nbsp;({avgword}) Average Words Per Sentence
      <br />
      <input
        type="range"
        min="1"
        max="20"
        value={avesents}
        onChange={(e) => setavesents(e.target.value)}
      />
      &nbsp;({avesents}) Average Sentences Per Paragraph
      <br />
      <input
        type="checkbox"
        checked={randomiz}
        onChange={(e) => setrandomiz(!randomiz)}
      />
      &nbsp; Random Text
      <br />
      <button
        className={style.languagebtn}
        onClick={handelChange}
        value={lorem}
      >
        Send
      </button>
      {/* <hr />
       {lorem} */}
      <hr />
      {loremIpsum({
        p: paragraph,
        avgWordsPerSentence: avgword,
        avgSentencesPerParagraph: avesents,
        random: randomiz,
      }).map((text) => (
        <div className="text" key={text}>
          {text}
        </div>
      ))}
    </div>
  );
}
