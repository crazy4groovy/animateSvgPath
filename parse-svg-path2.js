'use strict'

const glob = require('glob')
const fs = require('fs')
const parseString = require('xml2js').parseString
const _ = require('lodash-getpath')

const opts = {
  encoding: 'UTF-8'
}

glob('*.svg', function (er, files) {
  console.log(files)
  const dVals = files.map((f) => {
    console.log(f)

    const xml = fs.readFileSync(f, opts)

    let paths = []

    parseString(xml, parseXmlPaths(paths))

    return paths
  })

  const filePaths = _.zip(files, dVals)

  console.log(filePaths)
})

function parseXmlPaths (paths) {
  return function (err, res) {
    if (err) return console.log(err)

    console.log('res: ', res.svg)

    paths.push(123)
  }
}
