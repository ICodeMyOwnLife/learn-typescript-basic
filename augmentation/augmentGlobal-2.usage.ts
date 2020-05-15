import express from "express";
import { spawn } from "./myLib-1";

const app = express();
app.use((req, res) => {
  res.send(req.session?.info);
});

const childProcess = spawn({
  argv: ["--config", "myLib.config"],
  command: "run",
});
console.log(childProcess);
