const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const port = 3000;
const url = "https://www.weather.gov.hk/wxinfo/ts/text_readings_c.htm";
const regex = /^\s*[\u4e00-\u9fa5\s]+\s+(?:\d+(\.\d+)|N\/A)/gm;
const stringDigitSeparate = /^([^0-9]+)([\d.]+)$/;

app.get("/api/weather", async (req, res) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const targetString = $('pre[id="ming"]');

    if (targetString.length >= 1) {
      const finalObj = {};
      const targetStringText = targetString.text().split("十分鐘平均風向")[0];
      const regexResultArray = targetStringText.match(regex);

      regexResultArray.map((item) => {
        const noSpaceitem = item
          .split("/n")[0]
          .replace(/\s/g, "")
          .match(stringDigitSeparate);
        const nonDigitPart = noSpaceitem[1];
        const digitPart = noSpaceitem[2];

        finalObj[nonDigitPart] = digitPart;
      });

      res.json(finalObj);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

app.listen(port, () => {
  var host = req.headers.host;
  var origin = req.headers.origin;
  console.log(host, origin);
  console.log(`App listening at http://localhost:${port}`);
});
