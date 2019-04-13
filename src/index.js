const badTimezones = require("./lib/bad-timezones");

const sampleTimezoneDict = {
  "E. South America Time": "-0500",
  "Eastern Daylight Time": "-0400",
  "SA Eastern Time": "?", // "South American Eastern Time" maybe -0500, or South East Asia Common Time, which is just a proposal for +0800 (https://en.wikipedia.org/wiki/ASEAN_Common_Time)
  "North Asia East Time": "+0800", // Irkutsk, Ulaan Bataar
  "Central Europe Time": "+0100",
  "Korea Time": "+0900",
  "AUS Eastern Time": "+1000",
  "Hawaiian Time": "-1000",
  "Mid-Atlantic Time": "-0200",
  "Pacific Time": "-0800",
  "Central Time": "-0600",
  "Coordinated Universal Time (UT": "+0000", // is this missing "C)" at the end?
  "China Time": "+0800",
  "GMT Time": "+0000",
  "Tokyo Time": "+0900", // Japan Standard Time
  "Mountain Time": "-0700",
  "E. Europe Time": "+0200",
  "Greenwich Time": "+0000",
  "South Africa Time": "+0200",
  "Central America Time": "-0600",
  "Mexico Time": "-0600", // assume Zona Centro (Central Zone) https://en.wikipedia.org/wiki/Time_in_Mexico
  "Arab Time": "+0300",
  "US Mountain Time": "-0700",
  "W. Europe Time": "+0100",
  "E. Australia Time": "+1000",
  "Samoa Time": "+1300",
  "Atlantic Time": "-0400",
  "Japan Standard Time": "+0900",
  "China Standard Time": "+0800",
  "Mexico2 Time": "?", // wtf?, https://en.wikipedia.org/wiki/Time_in_Mexico
  "Eastern Time": "-0500",
  "W. Australia Time": "+0800"
};

const date1 = {
  dt: "2019-06-18 08:00:00.000",
  tz: "Mountain Time"
};

const goodDate1 = badTimezones.parseDateAndTz(
  sampleTimezoneDict,
  date1.dt,
  date1.tz
);

console.log(date1);
console.log(goodDate1.toUTCString());
console.log(goodDate1.toLocaleDateString());
console.log(goodDate1.toLocaleString());
