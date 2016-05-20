'use strict'

const glob = require('glob')
const fs = require('fs')
const xmlreader = require('xmlreader')
const _ = require('lodash')

const opts = {
  encoding: 'UTF-8'
}

glob('*.svg', function (er, files) {
  console.log(files)
  const dVals = files.map((f) => {
    console.log(f)

    const xml = fs.readFileSync(f, opts)

    var vals = []

    xmlreader.read(xml, function (err, res) {
      if (err) return console.log(err)

      console.log(res.svg.count())
      if (!res.svg.path && !res.svg.g) return

      const path = res.svg.path || listify(res.svg.g.array)
      console.log(path)

      path.each((i, p) => {
        // console.log(p.attributes().d)
        vals.push(p.attributes().d)
      })
    })

    return vals
  })

  const filePaths = _.zip(files, dVals)

  console.log(filePaths)
})

function listify (objs) {
  console.log(`listify ${objs}`)
  objs.each = objs.forEach
  return objs
}
