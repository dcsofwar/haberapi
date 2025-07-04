const puppeteer = require('puppeteer');
const express = require('express');
const ss = require('./express.js');
const news = require('./haber.js');
const app = express();

app.get('/takess',async (req, res) => {
    const link = req.query.link;

    const data = await ss.takess(link);

    const condata = Buffer.from(data, 'base64');    

    res.set('Content-Type', 'image/png');
    res.send(condata);
});

app.get('/takenews',async (req, res) => {
  const ary = await news.takenews();
  res.json(ary);
})

app.listen(1545, () => {
    console.log("h");
});
