import React from "react";
import classes from "../Styles/Card.module.css";
import cardStyle from "../Styles/infoCard.module.css";
import tablestyle from "../Styles/UsersList.module.css";
import Card from "../UI/Card";
import progressbar from "../../Images/progressbar-chart.png";
import npmImage from "../../Images/npm.png";

export default function ProgressBar() {
  return (
    <Card className={`${classes.input} ${classes.topchartdetail}`}>
      <h3 className={tablestyle.title}>
        <img
          src={npmImage}
          alt="npm Image"
          width={"32px"}
          style={{ margin: "0 1rem" }}
        />
        ProgressBar-Chart
      </h3>
      <div className={classes.HeroPlaceWif}>
        <div className={classes.OtherText}>
          install
          <div className={classes.codesapmle}>npm i progressbar-chart</div>
          import{" "}
          <div className={classes.codesapmle}>
            import &#124; ProgressBar &#125; from "progressbar-chart";
          </div>
          use{" "}
          <div className={classes.codesapmle}>
            &lt; ProgressBar <br />
            <p style={{ marginLeft: "2rem" }}>
              Data=&#124;SkillsArray&#125;
              <br /> DataName="skillName"
              <br /> DataPercentage="skillPercentage"
              <br /> height="0.8rem"
              <br /> borderRadius="0.8rem"
              <br /> background="linear-gradient(to left,rgba(54, 162, 235,
              1),rgba(54, 162, 235, 0.2))"
              <br /> boxShadow=" 0 3px 3px -5px rgba(54, 162, 235, 0.8),0 2px
              5px rgba(54, 162, 235, 0.5)"
              <br /> color="rgb(0, 0, 0)"
            </p>
            &#47;&gt;
          </div>
        </div>
        <div className={cardStyle.tableContainer}>
          <a href="https://www.npmjs.com/package/progressbar-chart">
            <img
              src={progressbar}
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
  );
}
