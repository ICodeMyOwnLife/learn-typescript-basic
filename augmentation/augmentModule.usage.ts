import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  const params = req.allParams<Params>();
  if (!params) return next();
  const { type } = params;
  switch (type) {
    case "proxy":
      return res.proxy("//abc.com");

    case "spa":
      return res.spa("index.html");

    default:
      return next();
  }
});

interface Params {
  type: "spa" | "proxy";
}
