import React, { useEffect, useState, useMemo } from "react";
import classes from "../Styles/Card.module.css";
import cardStyle from "../Styles/infoCard.module.css";
import tablestyle from "../Styles/UsersList.module.css";
import style from "../Styles/about.module.css";
import Card from "../UI/Card";
import "../Styles/progressbar.css";
import "../Styles/inventory.css";
import "react-datepicker/dist/react-datepicker.css";
import ReactCompareImage from "react-compare-image";
import { useDropzone } from "react-dropzone";
import Resizer from "react-image-file-resizer";
import Spinner from "react-bootstrap/Spinner";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

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

// const formatArry = [
//   ".jpg",
//   ".jpeg",
//   ".png",
//   ".gif",
//   ".bmp",
//   ".svg",
//   ".tiff",
//   ".tif",
//   ".webp",
//   ".ico",
//   ".raw",
//   ".psd",
//   ".ai",
//   ".eps",
//   ".pdf",
//   ".raw",
//   ".arw",
// ];

const CompareImage = () => {
  const [File1, setFile1] = useState("");
  const [File2, setFile2] = useState("");
  const [errorDataFile1, setErrorDataFile1] = useState("");
  const [errorDataFile2, setErrorDataFile2] = useState("");
  const [Orientation, setOrientation] = useState(false);
  const [aspectRatio, setaspectRatio] = useState("wider");
  const [File1path, setFile1path] = useState("");
  const [File2path, setFile2path] = useState("");
  ///resizer config
  const [Loading, setLoading] = useState(false);
  const [ExportbtnEnable, setExportbtnEnable] = useState(true);
  const [ConverttbtnEnable, setConvertbtnEnable] = useState(true);
  const [maxWidth, setMaxWidth] = useState(300);
  const [maxHeight, setMaxHeight] = useState(300);
  const [compressFormat, setCompressFormat] = useState("WEBP");
  const [quality, setQuality] = useState(100);
  const [rotation, setRotation] = useState(0);

  const [ImprtImgH1, setImprtImgH1] = useState(0);
  const [ImprtImgW1, setImprtImgW1] = useState(0);

  const [ImprtImgH2, setImprtImgH2] = useState(0);
  const [ImprtImgW2, setImprtImgW2] = useState(0);

  const [estSize, setestSize] = useState(0);

  /////////////////////////drag and drop file upload/////////////////////////////

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fileChangeHandler(File1path);
    }, 500);
    return () => {
      setLoading(false);
      clearTimeout(timeoutId);
    };
  }, [rotation, quality, compressFormat, maxWidth, maxHeight, ExportbtnEnable]);

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
    accept: "image/*",
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

  const showFile1 = (image) => {
    const reader = new FileReader();
    setFile1path(image);
    reader.onloadend = () => {
      const Imageresult = reader.result;

      if (!Imageresult.length) {
        setErrorDataFile1("**Not valid Image file!**");
        setFile1("");
        return;
      }
      try {
        setFile1(Imageresult);
        setConvertbtnEnable(false);
      } catch (error) {
        setErrorDataFile1("**Not valid Image file!**");
        setFile1("");
        return;
      }
    };
    reader.readAsDataURL(image);
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
    accept: "image/*",
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

  const showFile2 = (image) => {
    setFile2path(image);
    const reader = new FileReader();
    reader.onloadend = () => {
      const Imageresult = reader.result;

      if (!Imageresult.length) {
        setErrorDataFile2("**Not valid Image file!**");
        setFile2("");
        return;
      }
      try {
        setFile2(Imageresult);
      } catch (error) {
        setErrorDataFile2("**Not valid Image file!**");
        setFile2("");
        return;
      }
    };
    reader.readAsDataURL(image);
  };

  const dateFile1path =
    File1path && new Date(File1path.lastModified).toString().slice(0, 15);
  // console.log(dateFile1path);
  const dateFile2path =
    File2path && new Date(File2path.lastModified).toString().slice(0, 15);
  // console.log(dateFile2path);

  ////////////////////////// Convert Image to base64 ///////////////////////////////

  const sizemaker = (imagesize) => {
    let result = Math.round(imagesize / 10) / 100;
    if (result > 1024) {
      result = Math.round((result / 1024) * 100) / 100 + " MB";
    } else {
      result = result + " KB";
    }

    return result;
  };

  const fileChangeHandler = (File1path) => {
    if (File1path) {
      try {
        setLoading(true);
        Resizer.imageFileResizer(
          File1path,
          maxWidth,
          maxHeight,
          compressFormat,
          quality,
          rotation,
          (uri) => {
            setFile2(uri);

            //method 1
            let base64Length = uri.length - (uri.indexOf(",") + 1);
            let padding =
              uri.charAt(uri.length - 2) === "="
                ? 2
                : uri.charAt(uri.length - 1) === "="
                ? 1
                : 0;
            let fileSize = base64Length * 0.75 - padding;

            // method 2
            // let base64lenght = uri.split(",")[1].split("=")[0].length;
            // let fileSize = base64lenght - (base64lenght / 8) * 2;
            setestSize(fileSize);
          },
          "base64",
          200,
          200
        );
      } catch (error) {
        console.log(error);
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  ////////////////////////////test download//////////////////////////////

  function downloadImage(src) {
    const lastDot = File1path.path.lastIndexOf(".");
    const fileName = File1path.path.substring(0, lastDot);
    const img = new Image();
    img.crossOrigin = "anonymous"; // This tells the browser to request cross-origin access when trying to download the image data.
    // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Implementing_the_save_feature
    img.src = src;
    img.onload = () => {
      // create Canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // create a tag
      const a = document.createElement("a");
      a.download = `${fileName}.${compressFormat}`;
      a.href = canvas.toDataURL(`${fileName}.${compressFormat}`);
      a.click();
    };
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Helmet>
        <title>Convert and Compare Images</title>
        <meta
          name="description"
          content="Use this handy webp converter to resize you images from one format to another."
        />
        <meta
          name="description"
          content="jpg to Webp converter"
        />
        <meta
          name="description"
          content="png to Webp converter"
        />
        <meta
          name="description"
          content="Convert images from one format to another with the powerful image converter in this free image tool."
        />
        <meta
          name="description"
          content="Convert images and resize them in webp format with this handy online tool."
        />
        <meta
          name="description"
          content="This application helps you to compare two images and find the best match."
        />
      </Helmet>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div className={classes.infodisplay}>
          <h1 className={tablestyle.title}>Image Compare & Convert</h1>
          <h2 className={tablestyle.smallsubtitle}>
            Open and compare two images and find the best match. Convert images
            and resize them in webp , jpg , png format with this handy online
            tool.
          </h2>
          <div
            className={classes.HeroPlace}
            style={{
              paddingTop: "2rem",
              height: "fit-content",
              minHeight: "fit-content",
            }}
          >
            {/* ////////////////////////////  file 1 //////////////////////////////// */}
            <div
              className={cardStyle.tableContainerdragndrop}
              style={{ maxWidth: "62%", minWidth: "62%" }}
            >
              <div
                style={{
                  background: "rgba(54, 162, 235, 1)",
                  minHeight: "14rem",
                  aspectRatio: "16/7",
                }}
                className={(cardStyle.container, classes.card)}
                {...getRootPropsFile1({ stylefile1 })}
              >
                <input {...getInputPropsFile1()} />
                <div className={cardStyle.tableContainer}>
                  For converting or compare Drag 'n' drop first file here
                  <br />, or click to select files
                </div>
                <div className="container">
                  <p>Only Images Accepted</p>
                </div>
                {errorDataFile1 ? (
                  errorDataFile1
                ) : File1path ? (
                  <ul>
                    <li>Name: {File1path.path}</li>
                    <li>Size: {sizemaker(File1path.size)}</li>
                    {/* <li>last Modified Date: {dateFile1path}</li> */}
                    <li>Height :{ImprtImgW1}</li>
                    <li>Width : {ImprtImgH1}</li>
                    <li>
                      <img
                        src={File1}
                        alt=""
                        onLoad={({ target: img }) => {
                          const { offsetHeight, offsetWidth } = img;
                          setImprtImgH1(offsetHeight);
                          setImprtImgW1(offsetWidth);
                          setMaxHeight(offsetHeight);
                          setMaxWidth(offsetWidth);
                          console.log(offsetHeight, offsetWidth);
                        }}
                        style={{
                          position: "absolute",
                          marginLeft: "-10000px",
                        }}
                      />
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>

            {/* ////////////////////////////  File 2 //////////////////////////////// */}
            {ConverttbtnEnable ? (
              <div
                className="cardStyle tableContainerdragndrop"
                style={{ maxWidth: "62%" }}
              >
                <div
                  style={{
                    background: "rgba(54, 162, 235, .5)",
                    minHeight: "14rem",
                    aspectRatio: "16/7",
                  }}
                  // className={(cardStyle.container, classes.card)}
                  className={(cardStyle.container, classes.card)}
                >
                  <div className={cardStyle.tableContainer}>
                    For Comparing two Images you have to add the first image
                    section
                    <div className="container">
                      <p>🚫Add first file first</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="cardStyle tableContainerdragndrop"
                style={{ maxWidth: "62%" }}
              >
                <div
                  style={{
                    background: "rgba(54, 162, 235, 1)",
                    minHeight: "14rem",
                    aspectRatio: "16/7",
                  }}
                  className={(cardStyle.container, classes.card)}
                  {...getRootPropsFile2({ stylefile2 })}
                >
                  <input {...getInputPropsFile2()} />
                  <div className={cardStyle.tableContainer}>
                    For compare Drag 'n' drop second file here , or click to
                    select files
                  </div>
                  <div className="container">
                    <p>Only Images Accepted</p>
                  </div>
                  {errorDataFile2 ? (
                    errorDataFile2
                  ) : File2path ? (
                    <ul>
                      <li>Name: {File2path.path}</li>
                      <li>Size: {sizemaker(File2path.size)}</li>
                      {/* <li>last Modified Date: {File2path.size}</li> */}
                      <li>Height :{ImprtImgW2}</li>
                      <li>Width : {ImprtImgH2}</li>
                      <li>
                        <img
                          src={File2}
                          alt=""
                          onLoad={({ target: img }) => {
                            const { offsetHeight, offsetWidth } = img;
                            setImprtImgH2(offsetHeight);
                            setImprtImgW2(offsetWidth);
                            console.log(offsetHeight, offsetWidth);
                          }}
                          style={{
                            position: "absolute",
                            marginLeft: "-10000px",
                          }}
                        />
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>
            )}

            {/* ------------------------------------------- */}
            {/* ? coinAllInfo.description.en.replace(/<[^>]+>/g, "") */}
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
            <button
              className="anchorBtn"
              onClick={() => setOrientation(!Orientation)}
            >
              Orintation - {Orientation ? "Vertical" : "Horizontal"}
            </button>
            <button
              className="anchorBtn"
              onClick={() =>
                setaspectRatio(aspectRatio === "wider" ? "taller" : "wider")
              }
            >
              aspectRatio -{" "}
              {aspectRatio === "wider" ? "Vertical" : "Horizontal"}
            </button>

            <button
              className="anchorBtn"
              disabled={ConverttbtnEnable}
              onClick={() => {
                setFile2(File1);
                setExportbtnEnable(false);
              }}
            >
              {ConverttbtnEnable ? "🚫 " : ""}
              Convert Image
            </button>
            <button
              className="anchorBtn"
              onClick={() => {
                downloadImage(File2);
              }}
              disabled={ExportbtnEnable}
            >
              {ExportbtnEnable ? "🚫 " : ""}
              Export Image
            </button>
          </div>
        </div>
      </Card>

      {/* ////////////////////////////  Convert Control //////////////////////////////// */}

      <div
        className={classes.ImageEditor}
        // className={(cardStyle.container, classes.card)}
      >
        <div className={cardStyle.tableContainer}></div>
        <section style={{ display: "grid" }}>
          <label>Width:&nbsp;&nbsp;</label>
          <input
            value={maxWidth}
            id="maxWidth"
            type="number"
            placeholder="Max Width..."
            onChange={(e) => {
              setMaxWidth(e.target.value);
              // fileChangeHandler(File1path);
            }}
          />
        </section>
        <section style={{ display: "grid" }}>
          <label>Height:&nbsp;</label>
          <input
            value={maxHeight}
            id="maxHeight"
            type="number"
            placeholder="Max Height.."
            onChange={(e) => {
              setMaxHeight(e.target.value);
              // fileChangeHandler(File1path);
            }}
          />
        </section>
        <section style={{ display: "grid" }}>
          <label>Format:&nbsp;</label>
          <select
            name="compressFormat"
            id="compressFormat"
            onChange={(e) => {
              setCompressFormat(e.target.value);
              // fileChangeHandler(File1path);
            }}
          >
            <option value="WEBP">webp</option>
            <option value="JPEG">jpeg</option>
            <option value="PNG">png</option>
          </select>
        </section>
        <label>Quality:{quality}</label>
        <input
          id="quality"
          type="range"
          min={1}
          max={100}
          step={1}
          onChange={(e) => {
            setQuality(e.target.value);
            // fileChangeHandler(File1path);
          }}
        />
        <label>Rotation:{rotation}</label>
        <input
          id="rotation"
          type="range"
          min={0}
          max={360}
          step={1}
          onChange={(e) => {
            setRotation(e.target.value);
            // fileChangeHandler(File1path);
          }}
        />
        <hr />
        <label>
          Estimated size:
          {Loading ? (
            <>
              &nbsp; <Spinner animation="border" size="sm" />
            </>
          ) : estSize ? (
            sizemaker(estSize)
          ) : (
            "0"
          )}
        </label>
      </div>

      {/* ////////////////////////////  Image //////////////////////////////// */}
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <ReactCompareImage
          leftImage={File1}
          rightImage={File2}
          vertical={Orientation}
          aspectRatio={aspectRatio}
        />
      </Card>
    </motion.div>
  );
};

export default CompareImage;
