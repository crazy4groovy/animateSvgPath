A simple project, intended to exercise/develop this SVG path animation function called "[animateSvgPath](https://gist.github.com/crazy4groovy/b9793d573e9b58e1c758a0b6379cfe22)". (It's plain JavaScript, no lib dependencies.)

A functional (but ugly!) [demo page](http://crazy4groovy.github.io/animateSvgPath) is here.

# animateSvgPath

`animateSvgPath(selectorNodes, style, animateSeconds, delaySeconds, cbPauseSeconds, cb)`

* selectorNodes - can be a CSS selector, or an array of DOM nodes (SVG paths)
	* `'path'`
* style - map of SVG path styles to be applied
	* `{ }`
	* _note: set `style.sequential = true` to make multiple SVG paths animate one-at-a-time!_
* animateSeconds - duration of SVG path animation
	* `5`
* delaySeconds - delay before animation starts
	* `0`
* cbPauseSeconds - delay after animation ends, before callback
	* `0`
* cb - callback when finished animation (note: all `arguments` are passed thru)
	* `function() {}`
	* _note: if set to `animateSvgPath`, it loops!_

All params are optional, sensible defaults provided (sub-points above).

## Example usage:

```html
<script type="text/javascript" src="https://rawgit.com/crazy4groovy/b9793d573e9b58e1c758a0b6379cfe22/raw/d53b605851682394c5ae24a7b0ff87bde503d262/animateSvgPath.min.js"></script>
```

```js
var style = { fill: 'transparent', stroke: '#FF00AA', 'stroke-width': '2', sequential: true };

//plain vanilla
animateSvgPath('svg path', style, 3, 0, 2, animateSvgPath)

//with jQuery, loading an image dynamically:
$('#svg-holder').load(
	'http://example.com/images/myPic.svg',
	animateSvgPath.bind(null, '#svg-holder path', style, 3, 0, 2, animateSvgPath)
);
```

Enjoy!!
