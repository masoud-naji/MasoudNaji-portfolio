import React from 'react'
import classes from "../Styles/Card.module.css";
import cardStyle from "../Styles/infoCard.module.css";
import tablestyle from "../Styles/UsersList.module.css";
import Card from "../UI/Card";
import jsonsample from "../../Images/jsonpretty2.png";
import npmImage from "../../Images/npm.png";

export default function JsonPretty() {
  return (
    <Card className={`${classes.input} ${classes.topchartdetail}`}>
    <h3 className={tablestyle.title}>
      <img
        src={npmImage}
        alt="npm Image"
        width={"32px"}
        style={{ margin: "0 1rem" }}
      />
      JSON-pretty-textarea
    </h3>
    <div className={classes.HeroPlaceWif}>
      <div className={classes.OtherText}>
        install
        <div className={classes.codesapmle}>npm i json-pretty-textarea</div>
        import{" "}
        <div className={classes.codesapmle}>
          import &#124; JsonPrettierTextarea &#125; from
          "json-pretty-textarea";
        </div>
        use{" "}
        <div className={classes.codesapmle}>
          &lt; JsonPrettierTextarea <br />
          <p style={{ marginLeft: "2rem" }}>
            prettyjson=&#124;MockDocument&#125;
            <br />
            preBcl="white"
            <br />
            stringCl="blue"
            <br />
            numberCl="blue"
            <br />
            booleanCl="red"
            <br />
            nullCl="violet"
            <br />
            keyCl="red"
            <br />
            string_font_size="1rem"
            <br />
            number_font_size="1rem"
            <br />
            boolean_font_size="1rem"
            <br />
            null_font_size="1rem"
            <br />
            key_font_size="1rem"
            <br />
            height="300px"
            <br />
            width="300px"
            <br />
            borderRadius="10px"
            <br />
          </p>
          &#47;&gt;
        </div>
      </div>
      <div className={cardStyle.tableContainer}>
        <a href="https://www.npmjs.com/package/json-pretty-textarea">
          <img
            src={jsonsample}
            alt="json pretty sample"
            style={{
              margin: "0 1rem 0 0rem",
              width: "100%",
              borderRadius: "0.5rem",
            }}
          />
          npm Page
        </a>
      </div>
    </div>
  </Card>
  )
}
