/*
 * Raphael sketchpad obtained from http://ianli.com/sketchpad/
 *
 *
 *
 * Requires:
 *     psiturk.js
 *     utils.js
 */

var ncols = 5,
	original_size = 400,
	totalwidth = 800,
	nrows,
	size,
	drawings;

var size = totalwidth/ncols;
var sc = size/original_size;

function renderDrawing(data) {

	var strokes = data;

	for (var i=0; i<strokes.length; i++) {
		strokes[i]['transform'] = 's'+sc+','+sc+',0,0';
		strokes[i]['stroke-width']=1;
	};

	var sketchpad = Raphael.sketchpad("viewer", {
		width: size,
		height: size,
		strokes: strokes,
		editing: false
	});
	var pen = sketchpad.pen();
	pen.width(2);

};

function start() {

	$.get('drawings', function(data) {

		drawings = data['drawings'];

		n = drawings.length;
		nrows = Math.ceil(n/ncols);

		$(drawings).each(function(item) {
			renderDrawing(this);
		});

	});
};



/*******************
 * Run Task
 ******************/
$(window).load( function(){
    start();
});

// vi: noexpandtab tabstop=4 shiftwidth=4
