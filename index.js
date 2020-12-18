#!/usr/bin/env node
/* global module exports require */
const { join } = require('path');
const dotenv = require('dotenv')

const cwd = process.cwd()

if (!module.pareng) {
  process.argv.forEach((name, i) => {
    if (i < 2) return
    dotenv.config({ path: join(cwd, name) })
  })
}

const missing = require(join(cwd, './.env.required')).filter(
  key => process.env[key] === undefined
)

exports.missing = missing

if (missing.length && !module.parent) {
  console.log('here')
  console.log('Missing variables:')
  console.log(missing.join('\n'))
  process.exit(1)
}
