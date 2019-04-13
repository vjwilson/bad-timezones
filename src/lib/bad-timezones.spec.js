const badTimezones = require("./bad-timezones");

describe("bad-timezones", () => {
  describe("parseDateAndTz", () => {
    let timezones;

    beforeEach(() => {
      timezones = {
        "E. South America Time": "-0500",
        "Eastern Daylight Time": "-0400",
        "SA Eastern Time": "?", // 'South American Eastern Time' maybe -0500, or South East Asia Common Time, which is just a proposal for +0800 (https://en.wikipedia.org/wiki/ASEAN_Common_Time)
        "North Asia East Time": "+0800", // Irkutsk, Ulaan Bataar
        "Central Europe Time": "+0100",
        "Korea Time": "+0900",
        "AUS Eastern Time": "+1000",
        "Hawaiian Time": "-1000",
        "Mid-Atlantic Time": "-0200",
        "Pacific Time": "-0800",
        "Central Time": "-0600",
        "Coordinated Universal Time (UT": "+0000", // is this missing 'C)' at the end?
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
    });

    it("should lookup the correct date for a ISO date", () => {
      const date = "2019-06-18 08:00:00.000";
      const tz = "Greenwich Time";

      const parsedDate = badTimezones.parseDateAndTz(timezones, date, tz);

      expect(parsedDate.toUTCString()).toEqual("Tue, 18 Jun 2019 08:00:00 GMT");
    });

    it("should lookup the correct date for an ISO date in a different timezone date", () => {
      const date = "2019-06-18 08:00:00";
      const tz = "Pacific Time";

      const parsedDate = badTimezones.parseDateAndTz(timezones, date, tz);

      expect(parsedDate.toUTCString()).toEqual("Tue, 18 Jun 2019 16:00:00 GMT");
    });

    it("should lookup the correct date for an IETF-compliant RFC 2822 date", () => {
      const date = "December 17, 1995 03:24:00";
      const tz = "Greenwich Time";

      const parsedDate = badTimezones.parseDateAndTz(timezones, date, tz);

      expect(parsedDate.toUTCString()).toEqual("Sun, 17 Dec 1995 03:24:00 GMT");
    });

    it("should lookup the correct date for an IETF-compliant RFC 2822 date in a different timezone", () => {
      const date = "December 17, 1995 03:24:00";
      const tz = "W. Europe Time";

      const parsedDate = badTimezones.parseDateAndTz(timezones, date, tz);

      expect(parsedDate.toUTCString()).toEqual("Sun, 17 Dec 1995 02:24:00 GMT");
    });

    it("should throw when the supplied timezone is not in the list of timezones", () => {
      const date = "2019-06-18 08:00:00.000";
      const tz = "Martian Time";
      function getMartianTime() {
        badTimezones.parseDateAndTz(timezones, date, tz);
      }

      expect(getMartianTime).toThrow("Timezone not found");
    });

    it("should throw when the supplied datetime cannot be parsed by Date", () => {
      const date = "2019-06-32 08:00:00";
      const tz = "Pacific Time";
      function getBadTime() {
        badTimezones.parseDateAndTz(timezones, date, tz);
      }

      expect(getBadTime).toThrow("Invalid Date");
    });
  });
});
