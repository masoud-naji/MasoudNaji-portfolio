import React from 'react'
import ExtensionImage from "../../Images/ChromeEXTScreenshot.png";
import Gist from "react-gist";
import Card from "../UI/Card";
import classes from "../Styles/Card.module.css";
import cardStyle from "../Styles/infoCard.module.css";
import tablestyle from "../Styles/UsersList.module.css";

export default function ChromeExtension() {
  return (
    <Card className={`${classes.input} ${classes.topchartdetail}`}>
    <h3 className={tablestyle.title}>Morning Click Chrome Extension </h3>
    <div className={classes.HeroPlaceWif}>
      <div className={classes.OtherText}>
        This is a simple Chrome Extension to Save then open all your Saved
        Tabs . all tabs are stored on local storage and available on your
        hand
        <p>
          <ul>
            <li>input: save what you enterd on input box</li>
            <li>Save Tab: Save the current tab</li>
            <li>All Tabs: save all open Tabs </li>
            <li>Reset All: clear all Data</li>
            <li>Open All: Open All saved tabs</li>
            <li>Theme: change the theme</li>
            <li>Save Json: All open tabs save as a json file</li>
            <li>
              Save CMD: All open tabs save as a stand alone executable cmd
              file
            </li>
          </ul>
        </p>
        <div
          style={{
            height: "25vw",
            overflow: "scroll",
            borderRadius: "1rem",
            background: "rgb(242,242,242)",
          }}
        >
          <Gist id="c206a322c55cb9944913f675b926e0ed"></Gist>
        </div>
      </div>
      <div className={cardStyle.tableContainer}>
        <img
          src={ExtensionImage}
          alt="extentionImage"
          style={{ maxWidth: "100%", borderRadius: "0.5rem" }}
        />
        <br />
        Link:
        <a href="https://github.com/masoud-naji/Morning-Click-Chrome-Extension.git">
          {" "}
          Github
        </a>
        <br />
        Download:
        <a href="https://github.com/masoud-naji/Morning-Click-Chrome-Extension/archive/refs/heads/master.zip">
          {" "}
          Zip
        </a>
      </div>
    </div>
  </Card>
  )
}
