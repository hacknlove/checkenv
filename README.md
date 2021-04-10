# requirenv

## how to use

1. install it `npm i requirenv`
2. add a file `env.required.js` to the root of your project
3. prepend `requirenv && ` to the scripts that do you want to fail early if any required environmental variable is missing
4. that's it

## `.env.required.js` example

```
module.exports = [
  "foo",
  "bar",
  "baz",
]
```

## `package.json` example

```
{
  ...
  "scripts": {
    "dev": "requirenv .env.local && next dev",
    "build": "requirenv && next build",
    "start": "requirenv && next start"
  },
  ....
}

```

## How to use it as a library

```javascript
const missing = require('requirenv')

```

that's it. Missing is an array with all the missing variables.
remember to call this after dotenv, if you use it.
