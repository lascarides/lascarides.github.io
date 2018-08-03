
// Prototype text correction hacking
// NOT PRODUCTION-READY!!!!!!!!!!!!!

var currentZoomLevel = 1.0;
var minZoomLevel = 0.5;
var maxZoomLevel = 1.6;


$( document ).ready(function() {

	// Stabilise the rendered images at their original sizes
	var imageInitialWidth = $(".correction-images-pad").outerWidth();
	$(".correction-images-pad").css("width", imageInitialWidth + "px");
	$(".correction-images-pad img").each(function() {
		$(this).data("original-width", $(this).outerWidth())
	});
	
	// Place all of the highlights into the right place
	function placeHighlights() {
		$(".correction-images-pad .img-hilite").each(function() {
			var topOffset = $(this).data('top-offset');
			var heightOffset = $(this).data('height');
			topOffset = currentZoomLevel * topOffset;
			heightOffset = currentZoomLevel * heightOffset;
			$(this).css('top', topOffset + 'px');
			$(this).css('height', heightOffset + 'px');
			$(this).hide();
		});
	}
	placeHighlights();
	
	// Do stuff when a row is highlighted
	$(".correction-text-pad input").focus(function() {

		// Turn on the highlight for the appropriate line
		// when a row is focused upon.
		$(".correction-images-pad .img-hilite").hide();
		var rowNum = $(this).data('hilite-row');
		var hiliteRowSelector = "#img-hilite-" + rowNum;
		$(hiliteRowSelector).show();

		// Move image to align to highlighted row
		var hilitePos = $(hiliteRowSelector).offset();
		var rowPos = $(this).offset();
		var rowDelta = rowPos.top - hilitePos.top;
		var oldMargin = parseInt($(".correction-images-pad").css("margin-top"));
		if (rowDelta + oldMargin >= 0) {
			$(".correction-images-pad").css("margin-top", (rowDelta + oldMargin) + "px");
		}
		
	});

	// Perform save action (update text block)
	$(".correction-save-button").click(function(){
		var newText = "";
		$(".correction-text-pad input").each(function() {
			newText += $(this).val() + " ";
		});
		$(".ocrContents").empty();
		$(".ocrContents").html("<p>" + newText + "</p>");
	});

	function resizeCorrectionImages() {
		var newCorrectionImageWidth = imageInitialWidth * currentZoomLevel;
		$(".correction-images-pad").css("width", newCorrectionImageWidth + "px");
		$(".correction-images-pad img").each(function() {
			var newWidth = parseInt($(this).data("original-width")) * currentZoomLevel;
			$(this).css("width", newWidth + "px")
		});
		placeHighlights();
	}

	// Zoom in
	$(".zoom-tool-in").click(function(){
		currentZoomLevel = currentZoomLevel + 0.25;
		if (currentZoomLevel > maxZoomLevel) {
			currentZoomLevel = maxZoomLevel;
		}
		resizeCorrectionImages()
	});

	// Zoom out
	$(".zoom-tool-out").click(function(){
		currentZoomLevel = currentZoomLevel - 0.25;
		if (currentZoomLevel < minZoomLevel) {
			currentZoomLevel = minZoomLevel;
		}
		resizeCorrectionImages()
	});



});