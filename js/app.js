$(document).ready(function() {
	// method chaining - browser listens for a series of events on .ryu div
    $(".ryu").mouseenter(function() {
    	$('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
    	$('.ryu-ready').hide();
    	$('.ryu-still').show();
    })
    .mousedown(function() {
    	playHadouken();
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish().show().animate(
    		// .finish() ensures animation reaches end-state (solves bug of hadouken not starting from hands when multiple mouse clicks)
    		// desired property: i.e. end-state is want css to position hadouken at left: 1060px
    		// 500 indicates duration taken to reach end-state
    		// finally, call another function to hide current element, reset position
    		{'left': '1060px'}, 500, function() {
    			$(this).hide();
                $(this).css('left', '560px');
            }
);
    })
    .mouseup(function() {

    	$('.ryu-throwing').hide();
    	$('.ryu-ready').show();
    });
    
    // solving bug - when mouseup over .hadouken, both .ryu-ready and .ryu-throwing are displayed
    $(".hadouken").mouseup(function() {
    	$('.ryu-throwing').hide();
    });

    // make Ryu look cool when pressing 'x' key
    $(document).keydown(function(e) {
    	if (e.which == 88) {
    		$(".ryu-ready").hide();
    		$(".ryu-throwing").hide();
    		$(".ryu-still").hide();
    		$(".ryu-cool").show();
    	}
    });

    $(document).keyup(function() {
    	$(".ryu-still").show();
    	$(".ryu-ready").hide();
    	$(".ryu-cool").hide();
    });

    // define Audio for hadouken
    function playHadouken () {
    	$('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
//End of file
});

