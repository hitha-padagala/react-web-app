import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Layout>
      {/* ⭐ Score */}
      <Box sx={styles.score}>⭐ 5</Box>

      {/* 🎈 Header */}
      <Typography sx={styles.title}>Hi Parinika! 🌈</Typography>
      <Typography sx={styles.subtitle}>Let’s Learn & Play 🎉</Typography>

      {/* 📖 Telugu */}
      <Card
        sx={{ ...styles.card, background: "#FFE4EC" }}
        onClick={() => navigate("/Telugu")}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <CardContent>
          <Typography sx={styles.cardTitle}>📖 Learn Telugu 🐘</Typography>
          <Typography sx={styles.cardSub}>Listen & Read</Typography>
        </CardContent>
      </Card>

      {/* 🔢 Maths */}
      <Card
        sx={{ ...styles.card, background: "#E3F6FF" }}
        onClick={() => navigate("/Maths")}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <CardContent>
          <Typography sx={styles.cardTitle}>🔢 Math Fun ➕</Typography>
          <Typography sx={styles.cardSub}>Solve & Play</Typography>
        </CardContent>
      </Card>

      {/* 🔤 English */}
      <Card
        sx={{ ...styles.card, background: "#E9FFE6" }}
        onClick={() => navigate("/English")}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <CardContent>
          <Typography sx={styles.cardTitle}>🔤 English 🐱</Typography>
          <Typography sx={styles.cardSub}>Words & Sounds</Typography>
        </CardContent>
      </Card>

      {/* 💛 Footer */}
      <Typography sx={styles.footer}>You’re doing amazing! ⭐</Typography>
    </Layout>
  );
}

const styles = {
  score: {
    position: "absolute",
    top: 20,
    right: 20,
    background: "#FFFFFF",
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },

  title: {
    fontSize: "34px",
    fontWeight: "bold",
    marginTop: "40px",
    color: "#333",
  },

  subtitle: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "25px",
  },

  card: {
    borderRadius: "24px",
    margin: "16px auto",
    width: "85%",
    padding: "12px",
    cursor: "pointer",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    transition: "all 0.2s ease",
  },

  cardTitle: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#333",
  },

  cardSub: {
    fontSize: "14px",
    marginTop: "6px",
    color: "#666",
  },

  footer: {
    marginTop: "30px",
    fontSize: "15px",
    color: "#0e0c0cff",
  },
};
