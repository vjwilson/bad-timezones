function parseDateAndTz(timezones, datetime, tz) {
  const tzLookup = timezones[tz];

  if (!tzLookup) {
    throw "Timezone not found";
  }

  const dateWithTz = `${datetime} ${tzLookup}`;

  const dateObj = new Date(dateWithTz);
  if (dateObj.toString() === "Invalid Date") {
    throw "Invalid Date";
  }

  return dateObj;
}

module.exports.parseDateAndTz = parseDateAndTz;
