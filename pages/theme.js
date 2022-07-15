const theme = {
  initialColorMode: "light",
  colors: {
    text: "#111",
    background: "white",
    primary: "#1a1a1a",
    secondary: "#3f3f3f",
    muted: "#e0e0e0",
    highlight: "#9f9f9f",
    gray: "#6c6c6c",
    accent: "#3f3f3f",
    modes: {
      dark: {
        text: "#fff",
        background: "#1a1a1a",
        primary: "#fff",
        secondary: "#fff",
        muted: "#fff",
        highlight: "#fff",
        gray: "#fff",
        accent: "#fff",
      },
    },
  },
  fonts: {
    body: "Comic Sans MS",
    size: "2rem",
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
};

export default theme;
