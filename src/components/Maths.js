import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

export default function Maths() {
  const navigate = useNavigate();

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");

  // 🎲 Generate random question
  const generateQuestion = () => {
    const ops = ["+", "-", "×"];
    const op = ops[Math.floor(Math.random() * ops.length)];

    let a = Math.floor(Math.random() * 10); // 0–9
    let b = Math.floor(Math.random() * 10); // 0–9

    // avoid negative subtraction
    if (op === "-" && a < b) {
      [a, b] = [b, a];
    }

    setNum1(a);
    setNum2(b);
    setOperator(op);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const getCorrectAnswer = () => {
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "×") return num1 * num2;
  };

  const checkAnswer = () => {
    if (parseInt(answer) === getCorrectAnswer()) {
      setScore(score + 1);
      setResult("🎉 Correct!");
      setBgColor("#DFFFD6"); // green
    } else {
      setResult("❌ Try again!");
      setBgColor("#FFE0E0"); // red
    }

    setAnswer("");

    setTimeout(() => {
      setResult("");
      setBgColor("#ffffff");
      generateQuestion();
    }, 1200);
  };

  return (
    <Layout>
      {/* ⭐ Score */}
      <Typography variant="h6">⭐ Score: {score}</Typography>

      {/* 🧠 Question */}
      <Typography variant="h3" sx={{ marginTop: 4 }}>
        {num1} {operator} {num2} = ?
      </Typography>

      {/* ✍️ Input */}
      <TextField
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        sx={{ marginTop: 3 }}
      />

      <br />

      {/* ✅ Submit */}
      <Button variant="contained" onClick={checkAnswer} sx={{ marginTop: 2 }}>
        Submit
      </Button>

      {/* 🎉 Result */}
      <Typography sx={{ marginTop: 2, fontSize: "20px" }}>{result}</Typography>
    </Layout>
  );
}
