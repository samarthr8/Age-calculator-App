const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the frontend to serve static HTML
app.use(express.static("public"));

app.post("/calculate-age", (req, res) => {
    const { date1, date2 } = req.body;

    const time1 = new Date(date1).getTime() / 1000; // Convert to seconds since epoch
    const time2 = new Date(date2).getTime() / 1000;

    if (isNaN(time1) || isNaN(time2)) {
        return res.send("Invalid date format. Please enter valid dates.");
    }

    const diff = time2 - time1; // Difference in seconds
    const secondsInDay = 24 * 60 * 60;

    const numberOfDays = Math.floor(diff / secondsInDay);
    const numberOfYears = Math.floor(numberOfDays / 365);
    const remainingDays = numberOfDays % 365;
    const numberOfMonths = Math.floor(remainingDays / 30);
    const numberOfMonthDaysRemain = remainingDays % 30;

    res.send(`
        <h1>Age Calculation Result</h1>
        <p><strong>From:</strong> ${date1}</p>
        <p><strong>To:</strong> ${date2}</p>
        <p><strong>Total Days:</strong> ${numberOfDays} days</p>
        <p><strong>Years, Months, and Days:</strong> ${numberOfYears} years, ${numberOfMonths} months, and ${numberOfMonthDaysRemain} days</p>
        <a href="/">Back to Calculator</a>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

