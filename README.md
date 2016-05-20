A simple project, intended to exercise/develop [this SVG path animation](https://gist.github.com/crazy4groovy/b9793d573e9b58e1c758a0b6379cfe22) function.

# animateSvgPath

`animateSvgPath(selectorNodes, style, animateSeconds, delaySeconds, cbPauseSeconds, cb)`

* selectorNodes - can be a CSS selector, or an array of DOM nodes (SVG paths)
	* `'path'`
* style - map of SVG path styles to be applied
	* `{ }` 
* animateSeconds - duration of SVG path animation
	* `5`
* delaySeconds - delay before animation
	* `0` 
* cbPauseSeconds - delay after animation, before callback
	* `0`
* cb - callback (all `arguments` passed thru)
	* `function() {}`

All params are optional, sensible defaults provided (sub-points above).

Enjoy!!
