#!/usr/bin/env node
'use strict'

const babylon = require('babylon')
const fs = require('fs')

var readStdin = done => {
  if (process.argv.length > 2) {
    return done(process.argv[2])
  }
  var text = ''
  process.stdin.setEncoding('utf8');

  process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      text = chunk.toString('utf8')
    }
  });

  process.stdin.on('end', () => {
    done(text)
  });
}

readStdin(text => {
  const ast = babylon.parse(text)
  console.log(JSON.stringify(ast))
})
