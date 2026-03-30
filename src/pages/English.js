import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";

const questions = [
  {
    sentence: "The cat is ___",
    options: ["run", "running", "runs"],
    answer: "running",
  },
  {
    sentence: "She ___ to school every day",
    options: ["go", "goes", "going"],
    answer: "goes",
  },
  {
    sentence: "They are ___ cricket",
    options: ["play", "playing", "plays"],
    answer: "playing",
  },
  {
    sentence: "I ___ a mango",
    options: ["eat", "eats", "eating"],
    answer: "eat",
  },
];

export default function English() {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const current = questions[index];

  const checkAnswer = (option) => {
    if (option === current.answer) {
      setResult("✅ Correct!");
      setScore(score + 1);
    } else {
      setResult("❌ Try again!");
    }

    setTimeout(() => {
      setResult("");
      setIndex((prev) => (prev + 1) % questions.length);
    }, 1000);
  };

  return (
    <Layout>
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        {/* ⭐ Score */}
        <Typography sx={{ marginTop: 2 }}>⭐ Score: {score}</Typography>

        {/* 🧠 Question */}
        <Typography
          sx={{
            fontSize: "28px",
            marginTop: "30px",
            fontWeight: "bold",
          }}
        >
          {current.sentence}
        </Typography>

        {/* 🎯 Options */}
        <Box sx={{ marginTop: 3 }}>
          {current.options.map((opt, i) => (
            <Button
              key={i}
              variant="contained"
              sx={{
                margin: 1,
                padding: "10px 20px",
                borderRadius: "15px",
              }}
              onClick={() => checkAnswer(opt)}
            >
              {opt}
            </Button>
          ))}
        </Box>

        {/* 🎉 Result */}
        <Typography sx={{ marginTop: 2 }}>{result}</Typography>
      </Box>
    </Layout>
  );
}
