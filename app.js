const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const stationObject = require("./key");
const querystring = require("querystring");

const app = express();
const port = 3000;
const url = "https://www.weather.gov.hk/wxinfo/ts/text_readings_c.htm";
const regex = /^\s*[\u4e00-\u9fa5\s]+\s+(?:\d+(\.\d+)|N\/A)/gm;
const stringDigitSeparate = /^([^0-9]+)([\d.]+)$/;

app.get("/api/weather", async (req, res) => {
  const lang = req.query?.lang || "en";
  const district = req.query?.district || "";

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const targetString = $('pre[id="ming"]');

    if (targetString.length < 1) {
      throw new Error("Data not found on fetching weather data.");
    }

    const targetStringText = targetString.text().split("十分鐘平均風向")[0];
    const regexResultArray = targetStringText.match(regex);
    const finalObj = {};

    regexResultArray.forEach((item) => {
      const noSpaceItem = item.replace(/\s/g, "");
      const matchResult = noSpaceItem.match(stringDigitSeparate);

      if (matchResult) {
        const nonDigitPart = matchResult[1];
        const digitPart = matchResult[2];
        finalObj[nonDigitPart] = digitPart;
      }
    });

    if (district) {
      let targetPosition = false;
      let districtObjects = stationObject.district;

      Object.keys(districtObjects).map((districtKey) => {
        if (districtObjects[districtKey].name.includes(district)) {
          // res.json(districtObject.position)
          targetPosition = districtObjects[districtKey].position;
        }
      });
      console.log(targetPosition);

      let selectedDistrict = [];

      if (targetPosition) {
        Object.keys(targetPosition).map((positionKey) => {
          selectedDistrict.push(finalObj[targetPosition[positionKey]]);
        });
        res.json({ targetPosition, selectedDistrict });
      } else {
        res
          .status(400)
          .json({ error: "District data not found, please check for typo." });
      }

      console.log(selectedDistrict);
    } else {
      res.json(finalObj);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
