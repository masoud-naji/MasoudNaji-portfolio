import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import "../lib/CustomBootstrap.scss";
import theme from "./theme";
import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Masoud Naji Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
