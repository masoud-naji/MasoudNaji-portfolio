import React from 'react'
import classes from "../Styles/Card.module.css";
import cardStyle from "../Styles/infoCard.module.css";
import tablestyle from "../Styles/UsersList.module.css";
import Card from "../UI/Card";
import skillChart from "../../Images/skills-radar-chart.png";
import npmImage from "../../Images/npm.png";

export default function SkillRadar() {
  return (
    <Card className={`${classes.input} ${classes.topchartdetail}`}>
    <h3 className={tablestyle.title}>
      <img
        src={npmImage}
        alt="npm Image"
        width={"32px"}
        style={{ margin: "0 1rem" }}
      />
      Skills-Radar-Chart
    </h3>
    <div className={classes.HeroPlaceWif}>
      <div className={classes.OtherText}>
        install
        <div className={classes.codesapmle}>npm i skills-radar-chart</div>
        import{" "}
        <div className={classes.codesapmle}>
          import &#124; RadarChart &#125; from "skills-radar-chart";
        </div>
        use{" "}
        <div className={classes.codesapmle}>
          &lt; RadarChart <br />
          <p style={{ marginLeft: "2rem" }}>
            rawData=&#124;SkillsArray&#125;
            <br />
            skillPercentage="skillPercentage"
            <br />
            skillName="skillName"
            <br />
            label="Skills"
            <br />
            backgroundColor="rgba(255, 99, 132, 0.2)"
            <br />
            borderColor={["blue", "red", "green", "yellow"]}
            <br />
            borderWidth="5"
            <br />
            pointBackgroundColor="rgb(54, 162, 235)"
            <br />
            pointBorderColor={["blue", "red", "green", "yellow"]}
            <br />
            pointHoverBackgroundColor="#fff"
            <br />
            pointHoverBorderColor="rgb(54, 162, 235)"
            <br />
            borderDash={[2, 5]}
            <br />
            borderDashOffset="8"
            <br />
            angleLines="rgba(255, 99, 132, 0.2)"
            <br />
            grid="rgba(255, 99, 132, 0.2)"
            <br />
            pointLabels="rgba(255, 99, 132, 0.2)"
            <br />
            ticks="rgba(255, 99, 132, 0.2)"
            <br />
          </p>
          &#47;&gt;
        </div>
      </div>
      <div className={cardStyle.tableContainer}>
        <a href="https://www.npmjs.com/package/skills-radar-chart">
          <img
            src={skillChart}
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
