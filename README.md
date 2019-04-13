# bad-timezones

A library to help a specific case of non-standard date storage. When someone has stored dates in strings WITHOUT timezone information in one field, and then the timezone in another field.

## Usage

For now, this isn't installable. Simply copy to the `src/lib/bad-timezones.js` file into your project somewhere. Then, `require` it, and call it's `parseDateAndTz` method with 3 arguments:

```
const goodDatetime = parseDateAndTz(timezones, datetime, tz);
```

### Arguments

- `timezones`: a dictionary object where the keys are the timezones string used by the legacy project, and the values are ISO offsets for the matching timezone (e.g., `{ "E. Time": "-0500", "C. Time": "-0600" }`)
- `datetime`: a string that can be parsed by JavaScript's `Date` object, either in ISO-8601 or IETF-compliant RFC 2822 format (e.g., "2019-06-18 08:00:00.00" or "Tue, 18 Jun 2019 08:00:00")
- `tz`: A string corresponding to one of the non-standard timezones in the first (`timezones`) argument

### Return value

- a JavaScript **Date** object

## Example app

Run

```
npm start
```

to see the example app in `src/index.js`

## Tests

To run the tests, you have to have `jest` installed. Run

```
npm install
```

to install it in the local project folder.

Then, you can run the tests with

```
npm test
```
