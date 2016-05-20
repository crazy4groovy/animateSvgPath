/* global $, animateSvgPath */
'use strict'

$('#svg-button').on('click', function (e) {
  e.preventDefault()

  var file = $('#svg-file').val()
  var seconds = +($('#svg-seconds').val()) || 5
  var cb = animateSvgPath

  // $('#svg-holder').html('')

  $('#svg-holder').load(
    file,
    animateSvgPath.bind(null, '#svg-holder path', { fill: 'transparent', stroke: '#FF00AA', 'stroke-width': '2', sequential: true }, seconds, 0, 2, cb, null)
  )
})
