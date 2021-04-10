/*
 * Requires:
 *     psiturk.js
 *     utils.js
 */

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);



var randomLine;
// All pages to be loaded
var pages = [
	"instructions/instruct-ready.html",
	"stage.html"
];
const init = (async () => {
    await psiTurk.preloadPages(pages);
})()

var instructionPages = [ // add as a list as many pages as you like
	"instructions/instruct-ready.html"

];


var Drawing = function() {


	psiTurk.showPage('stage.html');
	var sketchpad = Raphael.sketchpad("editor", {
		width: 400,
		height: 400,
		editing: true
	});
	var pen = sketchpad.pen();
	pen.width(2);
	
	prompt_resubmit = function() {
		replaceBody(error_message);
		$("#resubmit").click(resubmit);
	};

	resubmit = function() {
		replaceBody("<h1>Trying to resubmit...</h1>");
		reprompt = setTimeout(prompt_resubmit, 10000);
		
		psiTurk.saveData({
			success: function() {
			    clearInterval(reprompt); 
			}, 
			error: prompt_resubmit}
		);
	};

	$('#Undo').click(function() {
		sketchpad.undo();
	});

	$('#StartOver').click(function() {
		sketchpad.clear();
	});

	$('#Next').click(function() {
		drawing_data = sketchpad.json();
		psiTurk.recordUnstructuredData("drawing_json", drawing_data);
	    psiTurk.saveData({
            success: function(){ psiTurk.completeHIT(); },
            error: prompt_resubmit
        });
	});
};

// Task object to keep track of the current phase
var currentview;

/*******************
 * Run Task
 ******************/
$(window).on('load', async () => {
	await init;
    psiTurk.doInstructions(
    	instructionPages, // a list of pages you want to display in sequence
    	function() { currentview = new Drawing(); } // what you want to do when you are done with instructions

    );

});
