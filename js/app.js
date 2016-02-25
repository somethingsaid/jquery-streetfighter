$(document).ready(function() {

// define Audio for hadouken
function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

function playTheme () {
	$('#ryu-theme')[0].volume = 0.5;
	$('#ryu-theme')[0].load();
	$('#ryu-theme')[0].loop = true;
	$('#ryu-theme')[0].play();
}

  playTheme();
// method chaining - browser listens for a series of events on .ryu div
$(".ryu").mouseenter(function() {
	// hide all other states, show only .ryu-ready
    $('.ryu-state').hide();
    $('.ryu-ready').show();
})
.mouseleave(function() {
	// show only .ryu-still
    $('.ryu-state').hide();
    $('.ryu-still').show();
})
.mousedown(function() {
    playHadouken();
    $('.ryu-state').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
	    // .finish() ensures animation reaches end-state (solves bug of hadouken not starting from hands when multiple mouse clicks)
	    // desired property: i.e. end-state is want css to position hadouken at left: 1060px
	    // 500 indicates duration taken to reach end-state
	    // finally, call another function to hide current element, reset position
	    {'left': '1200px'}, 600, function() {
		    $(this).hide();
            $(this).css('left', '560px');
        }
    );
})
.mouseup(function() {
    $('.ryu-state').hide();
    $('.ryu-ready').show()
});


// make Ryu look cool when pressing 'x' key
$(document).keydown(function(e) {
    if (e.which == 88) {
        $('.ryu-state').hide();
	    $(".ryu-cool").show();
    }
})
.keyup(function(e) {
    if (e.which == 88) {
        $(".ryu-cool").hide();
        $(".ryu-still").show();
    }
});

//End of file
});

