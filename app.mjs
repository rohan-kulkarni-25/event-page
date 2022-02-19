// require("dotenv").config();
import dotevn from "dotenv";
dotevn.config();
import express from "express";
import mongoose from "mongoose";
import fetchCount from "./fetchCount.mjs";
import Event from "./models/eventModel.js";
import fetch from "node-fetch";
// const express = require("express");
const app = express();
// const mongoose = require("mongoose");
// const Event = require("./models/eventModel");
// const fetchCount = require("./fetchCount.mjs");
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static("./public"));
// CONNECT DB
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log(`DB Connected Successfully`))
  .catch((error) => {
    console.log(`DB Connection Failed`);
    console.log(error);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/update", async (req, res) => {
  const list = await Event.find({ platform: "YOUTUBE" });
  list.forEach(async (event) => {
    let count = "";
    const id = event.yt_id;
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${process.env.KEY}`;
    const data = await fetch(`${url}`)
      .then((data) => data.json())
      .then((data) => {
        let count = data.items;
        count = count[0].statistics;
        count = count.viewCount;
        event.audience = count;
        console.log(event);
      });
    await event.save();
  });
  const allevents = await Event.find({});
  res.status(200).json({ allevents });
});

app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
