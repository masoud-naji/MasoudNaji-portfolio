import React, { useEffect, useState, useMemo } from "react";
import classes from "../Styles/Card.module.css";
import cardStyle from "../Styles/infoCard.module.css";
import tablestyle from "../Styles/UsersList.module.css";
import style from "../Styles/about.module.css";
import * as XLSX from "xlsx";
import Card from "../UI/Card";
import "../Styles/progressbar.css";
import "react-datepicker/dist/react-datepicker.css";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../Styles/inventory.css";
// import Prism from "prismjs"
// import eclipse from "../../Images/eclipse.gif";
// import Line from "../../Images/Line.gif";
// import network from "../../Images/network.gif";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 10,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const CompareText = () => {
  const [File1, setFile1] = useState("");
  const [File2, setFile2] = useState("");
  const [Split, setSplit] = useState(true);
  const [Darkthm, setDarkthm] = useState(false);
  const [LineNumbers, setLineNumbers] = useState(true);

  const [errorDataFile1, setErrorDataFile1] = useState("");
  const [errorDataFile2, setErrorDataFile2] = useState("");
  const [Orientation, setOrientation] = useState(false);
  const [aspectRatio, setaspectRatio] = useState("wider");
  const [File1path, setFile1path] = useState("");
  const [File2path, setFile2path] = useState("");

  const newStyles = {
    diffContainer: {
      borderRadius: "1rem",
    },

    variables: {
      dark: {
        highlightBackground: "#fefed5",
        highlightGutterBackground: "#ffcd3c",
      },
    },
    line: {
      padding: "10px 2px",
      "&:hover": {
        background: "#a26ea1",
      },
    },
  };

  const oldCode = `
  const a = 10
  const b = 10
  const c = () => console.log('foo')
   
  if(a > 10) {
    console.log('bar')
  }
   
  console.log('done')
  `;
  const newCode = `
  const a = 10
  const boo = 10
   
  if(a === 10) {
    console.log('bar')
  }
  `;
  const frmtarry = [
    ".csv",
    ".json",
    ".JSON",
    ".txt",
    ".js",
    ".ts",
    ".jsx",
    ".css",
    ".scss",
  ];

  useEffect(() => {}, []);

  ////Left side
  const {
    getRootProps: getRootPropsFile1,
    getInputProps: getInputPropsFile1,
    isFocused: isFocusedFile1,
    isDragAccept: isDragAcceptFile1,
    isDragReject: isDragRejectFile1,
  } = useDropzone({
    onDrop: (acceptedFile) => {
      showFile1(acceptedFile[0]);
    },
    accept:
      ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/xml,text/xml,application/json,text/json,text/plain",
  });

  const stylefile1 = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocusedFile1 ? focusedStyle : {}),
      ...(isDragAcceptFile1 ? acceptStyle : {}),
      ...(isDragRejectFile1 ? rejectStyle : {}),
    }),
    [isFocusedFile1, isDragAcceptFile1, isDragRejectFile1]
  );

  const showFile1 = async (e) => {
    // console.log(e);
    const name = e.name;
    const lastDot = name.lastIndexOf(".");
    const ext = name.slice(lastDot);
    // console.log(ext);
    if (!frmtarry.includes(ext)) {
      alert("File Format is Wrong!");
      return;
    }
    // console.log("Go", e.name);
    try {
      setFile1path(e.name);
      const reader = new FileReader();
      reader.onload = async (e) => {
        setFile1(e.target.result);
      };
      reader.readAsText(e);
    } catch (error) {
      console.error(error);
    }
  };
  ////Right side
  const {
    getRootProps: getRootPropsFile2,
    getInputProps: getInputPropsFile2,
    isFocused: isFocusedFile2,
    isDragAccept: isDragAcceptFile2,
    isDragReject: isDragRejectFile2,
  } = useDropzone({
    onDrop: (acceptedFile) => {
      showFile2(acceptedFile[0]);
    },
    accept:
      ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/xml,text/xml,application/json,text/json,text/plain",
  });

  const stylefile2 = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocusedFile2 ? focusedStyle : {}),
      ...(isDragAcceptFile2 ? acceptStyle : {}),
      ...(isDragRejectFile2 ? rejectStyle : {}),
    }),
    [isFocusedFile2, isDragAcceptFile2, isDragRejectFile2]
  );

  const showFile2 = async (e) => {
    // console.log(e);
    const name = e.name;
    const lastDot = name.lastIndexOf(".");
    const ext = name.slice(lastDot);
    // console.log(ext);
    if (!frmtarry.includes(ext)) {
      alert("File Format is Wrong!");
      return;
    }
    // console.log("Go", e.name);
    try {
      setFile2path(e.name);
      const reader = new FileReader();
      reader.onload = async (e) => {
        setFile2(e.target.result);
      };
      reader.readAsText(e);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
    >
          <Helmet>
        <title>Compare Texts</title>
        <meta
          name="description"
          content="Compare Texts"
        />
      </Helmet>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div className={classes.infodisplay}>
          <h1 className={tablestyle.title}>Text Compare</h1>
          <h2 className={tablestyle.smallsubtitle}>
            Open and compare any text base file ( .xlsx,.xlsm,.xlsb,.xls,xlw,.xlr,.csv,.json,doc,.docx,.xml)
            you can check your code file is same or not.
        </h2>
          <div className={classes.HeroPlace}>
            {/* ////////////////////////////  file 1 //////////////////////////////// */}
            {/* <div
              style={{ background: "rgba(54, 162, 235, 1)" }}
              className={(cardStyle.container, classes.card)}
            >
              <div className={cardStyle.tableContainer}>
                <div className="container">
                  Choose a file that you want to check
                  <br />
                  File should be in one of listed format:
                  <br />
                  .txt .json .JSON .js .ts
                  <br />
                  <input
                    type="file"
                    accept=".csv,.json,.JSON,.txt,.js,.ts,.jsx,.css,.scss"
                    onChange={(e) => {
                      showFile1(e);
                    }}
                  />
                </div>
              </div> */}
            {/* ///////////////////////////////////////// info////////////////////////////////////////// */}
            {/* <div className={cardStyle.tableContainer}>File1</div>
            </div> */}

            {/* ////////////////////////////  File 2 //////////////////////////////// */}
            {/* <div
              style={{ background: "rgba(54, 162, 235, 1)" }}
              className={(cardStyle.container, classes.card)}
            >
              <div className={cardStyle.tableContainer}>
                Choose a file that you want to check
                <br />
                File should be in one of listed format:
                <br />
                .txt .json .JSON .js .ts
                <br />
                <input
                  type="file"
                  accept=".csv,.json,.JSON,.txt,.js,.ts,.jsx,.css,.scss"
                  onChange={(e) => {
                    showFile2(e);
                  }}
                />
              </div> */}
            {/* ///////////////////////////////////////// info////////////////////////////////////////// */}
            {/* <div className={cardStyle.tableContainer}>File2</div>
            </div> */}
            {/* ? coinAllInfo.description.en.replace(/<[^>]+>/g, "") */}

            <div
              style={{ background: "rgba(54, 162, 235, 1)" }}
              className={(cardStyle.container, classes.card)}
              {...getRootPropsFile1({ stylefile1 })}
            >
              <input {...getInputPropsFile1()} />
              <div className={cardStyle.tableContainer}>
                Drag 'n' drop some files here, or click to select files
              </div>
              <div className="container">
                <br />
                File should be in one of listed format:
                <br />
                .txt .json .JSON .js .ts
                <br />
              </div>
              {errorDataFile1 ? errorDataFile1 : File1path}
            </div>

            {/* ////////////////////////////  File 2 //////////////////////////////// */}

            <div
              style={{ background: "rgba(54, 162, 235, 1)" }}
              className={(cardStyle.container, classes.card)}
              {...getRootPropsFile2({ stylefile2 })}
            >
              <input {...getInputPropsFile2()} />
              <div className={cardStyle.tableContainer}>
                Drag 'n' drop some files here, or click to select files
              </div>
              <div className="container">
                <br />
                File should be in one of listed format:
                <br />
                .txt .json .JSON .js .ts
                <br />
              </div>
              {errorDataFile2 ? errorDataFile2 : File2path}
            </div>

            {/* //////////////////// */}
          </div>
        </div>
      </Card>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div>
          <div
            className={classes.HeroPlace}
            style={{
              height: "fit-content",
              maxHeight: "fit-content",
              minHeight: "fit-content",
            }}
          >
            <button className="anchorBtn" onClick={() => setSplit(!Split)}>
              {Split ? "unified" : "Split"}
            </button>
            <button className="anchorBtn" onClick={() => setDarkthm(!Darkthm)}>
              {Darkthm ? "Light" : "Dark"}
            </button>
            <button
              className="anchorBtn"
              onClick={() => setLineNumbers(!LineNumbers)}
            >
              {LineNumbers ? "Line #" : "No line #"}
            </button>
          </div>
        </div>
      </Card>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div className={classes.infodisplay}>
          <div className={classes.HeroPlace}>
            {/* ////////////////////////////  file 1 //////////////////////////////// */}

            {/* enum DiffMethod {
              CHARS = 'diffChars',
              WORDS = 'diffWords',
              WORDS_WITH_SPACE = 'diffWordsWithSpace',
              LINES = 'diffLines',
              TRIMMED_LINES = 'diffTrimmedLines',
              SENTENCES = 'diffSentences',
              CSS = 'diffCss',
            } */}

            <ReactDiffViewer
              styles={newStyles}
              oldValue={File1 || oldCode}
              newValue={File2 || newCode}
              splitView={Split}
              compareMethod={DiffMethod.WORDS}
              useDarkTheme={Darkthm}
              hideLineNumbers={LineNumbers}
              // renderContent={highlightSyntax}
            />

            {/* ? coinAllInfo.description.en.replace(/<[^>]+>/g, "") */}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CompareText;
