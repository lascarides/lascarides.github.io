var commentary;
var rowWidth = 12;
var inningsGap = 2;
var bbSize = rowWidth + inningsGap;


$(document).ready(function(){

	commentary = $('#commentary');

	$('.ball').mouseover(function(e){

		var ball = $(e.target);
		if (ball.hasClass('inner-dot')) {
			ball = ball.parent('.ball');
		}

		makeCommentary(ball);

	});

	// Fill in scores
	calcTotals();

	// Set up run rates
	setupRunRates();

	// Batsman/bowler highlighter
	setupHighlighters('bowler');
	setupHighlighters('batsman');

	// Commentary box
	setupCommentaryBox();

});

function setupRunRates() {
	var chaserate = $('.innings-chase').attr('data-chaserate');
	$('.innings td').each(function(){
		// Place run rate marker at height of td, minus height of runs, 
		// minus the baseline of maiden dots
		var runrate_pos = $(this).innerHeight() - ($(this).attr('data-runrate') * bbSize);
		$(this).find('.runrate').css('top', runrate_pos + 'px');
	});
	$('.innings-chase td').each(function(){

		var chaserate_pos = parseInt($(this).innerHeight() - (chaserate * bbSize));
		var reqrate_pos = parseInt($(this).innerHeight() - ($(this).find('.reqrate').attr('data-reqrate') * bbSize));
		var cr_top = Math.min();
		$(this).find('.chaserate').css('top', chaserate_pos + 'px');
	});
}

function setupCommentaryBox() {
	$('.comment-section').hide();
	$('.sidebar .active').show();
	$('.sidebar-nav a').click(function(){
		$('.ball').removeClass('ball-dimmer');
		$('.panel div').removeClass('panel-highlight');
		$('.comment-section').hide();
		$('.sidebar-nav a').removeClass('active');
		$(this).addClass('active');
		$( $(this).attr('data-panel') ).show();
		return false;
	});
}

function setupHighlighters(hilite) {
	$('.' + hilite).click(function(e){
		var person = $(e.target).text();
		$('.panel div').removeClass('panel-highlight');
		$(this).addClass('panel-highlight');
		$('.fixture .ball').removeClass('ball-hilite').addClass('ball-dimmer');		
		$('.fixture .ball[data-' + hilite + '="' + person + '"]').removeClass('ball-dimmer').addClass('ball-hilite');
	});
	$('.' + hilite + '-all').click(function(e){
		var person = $(e.target).text();
		$('.panel div').removeClass('panel-highlight');
		$('.ball').removeClass('ball-dimmer');		
		$('.ball').removeClass('ball-hilite');
	});
}

function makeCommentary(ball) {

	// Make commentary
	var c = "";

	c += "<h4>";
	c += "<span>Over "
	c += ball.attr('data-over');
	c += ", ball "
	c += ball.attr('data-ball');
	c += "</span>"
	c += "</h4>";

	c += "<h3>";
	c += ball.attr('data-batsman');
	c += ', '
	c += ball.attr('data-result');
	c += "</h3>";

	c += "<h4>bowled by ";
	c += ball.attr('data-bowler');
	c += "</h4>";

	c += "<p>";
	c += ball.find('.commentary').html();
	c += "</p>";

	$('.comment-section').hide();
	commentary.show();
	commentary.html(c);

}

function calcTotals() {
	
	var bowler = '';
	var batsman = '';
	var runner = '';
	var score = 0;

	$('tr.innings').each(function(){
		// Display side score
		var score = $(this).find('td.over:last').attr('data-runtotal');
		var wickets = $(this).find('.ball-wicket').length;
		if (!score) {
			score = '';
		} else if (wickets == 10) {
			score = score + ' all out';
		} else {
			score = score + ' for ' + wickets;
		}
		$(this).find('h2 .score').html ( score );

		// Find last batsman & bowler
		$('.ball').each(function(){
			if (batsman != $(this).attr('data-batsman')) {
				runner = batsman;
				batsman = $(this).attr('data-batsman');
			} 
			bowler = $(this).attr('data-bowler');
		});
		// $('.current-batsman').html(batsman);
		// $('.current-runner').html(runner);
		// $('.current-bowler').html(bowler);
	});


	makeCommentary($('.innings td.over:last .ball:first'));

}