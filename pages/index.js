/** @jsxImportSource theme-ui */
import Head from "next/head";

function Home(props) {
  return (
    <div
      sx={{ backgroundColor: "background", color: "primary", p: 4 }}
      className="mainChildDiv"
    >
      <Head>
        <title>Masoud Naji Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Masoud Naji Portfolio, FrontEnd Developer" />
      </Head>
      Home
    </div>
  );
}

export default Home;
