import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const vegetables = [
  {
    telugu: "టమోటా",
    phonetic: "tamoTa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
  },
  {
    telugu: "బంగాళాదుంప",
    phonetic: "bangaladumpa",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Patates.jpg",
  },
  {
    telugu: "కారెట్",
    phonetic: "kaarat",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Carrots.jpg",
  },
  {
    telugu: "వంకాయ",
    phonetic: "vankaaya",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Eggplant.jpg",
  },
  {
    telugu: "దోసకాయ",
    phonetic: "dosakaaya",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Cucumber.jpg",
  },
];

export default function Telugu() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const current = vegetables[index];

  const speak = (text) => {
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // ✅ always works

    speechSynthesis.speak(utterance);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % vegetables.length);
  };

  return (
    <Layout>
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        {/* 🖼 Image */}
        <img
          src={current.image}
          alt={current.english}
          style={{
            width: "220px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "20px",
            marginTop: "30px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          }}
        />

        {/* 📝 Telugu */}
        <Typography
          sx={{
            fontSize: "34px",
            marginTop: "20px",
            fontWeight: "bold",
          }}
        >
          {current.telugu}
        </Typography>

        {/* 🔤 English */}
        <Typography
          sx={{
            fontSize: "20px",
            color: "#666",
            marginTop: "5px",
          }}
        ></Typography>

        {/* 🎯 Buttons */}
        <Box sx={{ marginTop: 3 }}>
          {/* 🔊 Listen */}
          <Button
            variant="contained"
            sx={{ marginRight: 2 }}
            onClick={() => speak(current.phonetic)}
          >
            🔊 Listen
          </Button>

          {/* ➡ Next */}
          <Button variant="outlined" onClick={next}>
            ➡ Next
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}
