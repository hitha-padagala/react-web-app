import { Box } from "@mui/material";

export default function Layout({ children }) {
  return <Box sx={styles.container}>{children}</Box>;
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Comic Sans MS, cursive",
    background: `
  linear-gradient(rgba(183, 240, 130, 0.7), rgba(159, 85, 243, 0.7)),
  url('/homebg.png')
`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
};
