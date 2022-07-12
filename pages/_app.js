import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import "../lib/CustomBootstrap.scss";
// import "bootstrap/dist/css/bootstrap.css";
import theme from "./theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
