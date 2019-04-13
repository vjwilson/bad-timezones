function parseDateAndTz(timezones, datetime, tz) {
  const tzLookup = timezones[tz];

  const dateWithTz = `${datetime} ${tzLookup}`;

  const dateObj = new Date(dateWithTz);

  return dateObj;
}

module.exports.parseDateAndTz = parseDateAndTz;
