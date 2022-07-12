// import style from "../Styles/UsersList.module.css";
import Link from "next/link";
import Image from 'next/image'
import Daco from "../public/Images/Daco.webp";
import adrien from "../public/Images/pexels-adrien-olichon-2387428.webp";
import linkedin from "../public/Images/linkedin.png";
import Github from "../public/Images/Github.png";
import skills from "../public/Images/skills.svg";
// import { motion } from "framer-motion";
// import SkillsRadarChart from "../Skill/SkillsRadarChart";

function First() {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 2 }}
    // >

      <div className={style.cover}>
        <div className={style.homebackground}>

          {/* <Image src={adrien} className={style.background} alt="galaxy" />
          <Image src={Daco} className={style.foreground} alt="Daco" /> */}
          <h2 className={style.Maintitle}>
            “Yesterday I was clever, so I wanted to change the world.
            <br /> Today, I am wise so I am changing myself.”
            <section
              style={{ color: "white", fontSize: "small", textAlign: "right" }}
            >
              -Rumi
            </section>
            &nbsp;
          </h2>
          <p />
        </div>

        <div className={style.grid}>
          <div className={`${style.gridInside} , ${style.gridColSpan2}`}></div>
          <div className={style.gridInside}>
            <h1 className={style.subtitle}>Masoud Naji</h1>
            <h2 className={style.subtitle} style={{ fontSize: "small" }}>
              <img
                src={Github}
                style={{
                  width: "2rem",
                  height: "100%",
                  padding: "0",
                  border: "none",
                  filter: "invert(100%)",
                }}
                alt="Github"
              />
              &nbsp;
              <a href="https://github.com/masoud-naji">Github</a>
              <br />
              <img
                src={linkedin}
                style={{
                  width: "2rem",
                  height: "100%",
                  padding: "0",
                  border: "none",
                }}
                alt="linkedin"
              />
              &nbsp;
              <a href="https://www.linkedin.com/in/masoud-naji/">linkedin</a>
              <br />
            </h2>
            <ol>
              <li>
                <Link className="navlink" href="./Coins">
                  CryptoCurrency 100 first list and updates
                </Link>
              </li>
              <ol>
                <li> duration</li>
                <li> Table </li>
                <li> 24 hour changes </li>
              </ol>
              <li>
                <Link className="navlink" href="./Details">
                  Details about the specified Coin
                </Link>
              </li>
              <ol>
                <li> Chart </li>
                <li> Table </li>
                <li> Community Score / Developer Score /Liquidity Score</li>
                <li>
                  Official WebSites /Hashing Algorithm /Block Time In Minutes
                </li>
              </ol>
              <li>
                <Link className="navlink" href="./Compare">
                  Compare two coin in detail
                </Link>
              </li>
              <ol>
                <li> Chart compare</li>
                <li> duration compare</li>
                <li> Market Cap Compare</li>
                <li>
                  The price of one currency compared to the price of other
                  currencies is set by market cap
                </li>
              </ol>
              <li>
                <Link className="navlink" href="./Crypto_fun_facts">
                  Some Fun Facts around the low and high prices regardless of
                  priority.
                </Link>
              </li>
              <ol>
                <li>Highest </li>
                <li>Lowest </li>
                <li>Difference </li>
                <li>Difference on sort sequence of our choice </li>
                <li>Money approximately could make </li>
              </ol>
              <li>
                &nbsp;
                <Link className="navlink" href="./Twittespl">
                  Twitte Splitter
                </Link>
              </li>
              <li>
                &nbsp;
                <Link className="navlink" href="./DocumentView">
                  Document Viewer
                </Link>
              </li>
              <li>
                &nbsp;
                <Link className="navlink" href="./Regextest">
                  Regex Test
                </Link>
              </li>
              <li>
                <Link className="navlink" href="./CompareText">
                  Compare Text
                </Link>
              </li>
              <li>
                <Link className="navlink" href="./CompareImage">
                  Compare Image
                </Link>
              </li>
              <li>
                &nbsp;
                <Link className="navlink" href="./Other_projects">
                  Other Projects
                </Link>
              </li>
            </ol>
          </div>
          <div className={style.gridInside}>
            <h3 className={style.subtitle}>Libraries used at this Site</h3>
            <br />
            <ol>
              <li> react-confirm-alert</li>
              <li> bootstrap react-bootstrap</li>
              <li> lodash</li>
              <li> xlsx</li>
              <li> react-chartjs-2 chart.js</li>
              <li> react-router</li>
              <li> react-router-dom</li>
              <li> react-select</li>
              <li> html-to-text</li>
              <li> react-load-script</li>
              <li> react-scripts</li>
              <li> react-input-emoji</li>
              <li> browser-image-compression</li>
              <li> json-as-xlsx</li>
              <li> react-lorem-ipsum</li>
              <li> react-alice-carousel</li>
              <li> sass node-sass</li>
              <li> dotenv</li>
              <li> react-diff-viewer</li>
              <li> save rss-parser</li>
              <li> react-highlight-within-textarea</li>
            </ol>
          </div>

          <div className={style.gridInside}>
            <h3 className={style.subtitle}>Some Sources to start</h3>
            <br />
            <br />
            <ul
              style={{ textTransform: "uppercase" }}
              className={style.minilist}
            >
              <li>
                <a href="https://reactjs.org/docs/getting-started.html">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="https://reactresources.com/">REACT RESOURCES</a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources">
                  developer.mozilla
                </a>
              </li>
              <li>
                <a href="https://dev.to/hulyakarakaya/ultimate-react-resources-obl">
                  Ultimate React Resources
                </a>
              </li>
              <li>
                <a href="https://x-team.com/blog/essential-react-resources/">
                  ESSENTIAL RESOURCES
                </a>
              </li>
              <li>
                <a href="https://reactforbeginners.com/">React for beginners</a>
              </li>
              <li>
                <a href="https://advancedreact.com/">Advanced react</a>
              </li>
              <li>
                <a href="https://linguinecode.com/">Linguine code</a>
              </li>
              <li>
                <a href="https://www.geeksforgeeks.org/">geeks for geeks</a>
              </li>
            </ul>
          </div>

          <div className={`${style.gridInside} , ${style.gridColSpan2}`}>
            <img src={skills} alt="" width="100%" />
          </div>
          <div className={style.gridInside}>
            <ul className={style.ulabout}>
              <li style={{ marginTop: "8rem" }}>
                <strong>Overall 8+</strong>&nbsp;years of Information Technology
                experience in Web design and development of ERP application.
              </li>
              <li>
                <strong>Overall 4+ years</strong>&nbsp;of extensive experience
                as a<strong> Front-End UI Developer</strong>&nbsp;with solid
                understanding of database designing, development, and
                installation of different modules.
              </li>
              <li>
                Extensive experience in
                <strong> Designing professional UI </strong>web applications
                using front-end technologies like HTML5, CSS3, JavaScript,
                reactJS, XML, DHTML, XHTML, JSON
              </li>
              <li>
                Excellent Understanding of
                <strong> Document Object Model (DOM) </strong>and
                <strong> DOM Functions.</strong>
              </li>
              <li>
                Excellent experience in developing web pages complying with
                <strong> W3C web standards. </strong>
              </li>
              <li>
                Extensive experiences in
                <strong>
                  UI Development, Web UI analysis, Web design, coding, testing,
                  implementation
                </strong>
                and Support working with various projects.
              </li>
              <li>
                Professional in creating Templates, Mockups and Prototypes, Web
                Interfaces, Layouts and Flow of Future Pages.
              </li>
              <li>
                Experience in designing <strong>UI</strong>
                <strong>patterns</strong>&nbsp;and&nbsp;
                <strong> UI applications</strong>
                with the help of Adobe products like
                <strong>
                  {" "}
                  Adobe Photoshop, Adobe XD and Adobe Illustrator.
                </strong>
              </li>
              <li>
                Expertise in creating&nbsp;
                <strong>
                  Templates, Web Interfaces, Layouts, and Flow of Future Pages.
                </strong>
              </li>
              <li>
                Optimized the page<strong> load time</strong>&nbsp;for the pages
                that had heavy traffic and improvised those pages using CSS3
              </li>
              <li>
                Experience in Version Control tools like <strong>GIT</strong>
              </li>
              <li>
                Experience in using Mgmt. Software like&nbsp;
                <strong>
                  JIRA Agile, Scrum works and bug tracking system - Asana,
                  Slack.
                </strong>
              </li>
              <li>
                Experience on various Charting/UI tools like
                <strong> High Charts, Google API</strong>
              </li>
              <li>
                Experience on monitoring, and analyzing machine-generated data
                via a Web-style interface with <strong>Splunk</strong>
              </li>
              <li>
                Experience with Object Oriented Concepts,
                <strong> Object Oriented</strong>
                JavaScript, Object Oriented Design, and Implementation.
              </li>
              <li>
                Experience in quality assurance and unit testing, acceptance,
                and integration testing.
              </li>
              <li>
                Involved in working the Google <strong>Firebase</strong>
                &nbsp;and
                <strong>IBM watson </strong>
              </li>
              <li>
                Experienced in using Video Sharing and video subscription
                service with a Video API like YouTube and Vimeo.
              </li>
              <li>
                Skilled at analyzing and solving browser compatibility
                challenges and possesses ability to maintain consistency and
                well commented HTML and CSS markup.
              </li>
              <li>
                Experience of working on Data Modeling applications like
                <strong>
                  Excel, Power Tool, Power Bi, Tableau Software and Dax&nbsp;
                </strong>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    // </motion.div>
  );
}

export default First;
