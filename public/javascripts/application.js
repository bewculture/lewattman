$(document).ready(function() {

	// Open external links in a new window
	hostname = window.location.hostname
	$("a[href^=http]")
	  .not("a[href*='" + hostname + "']")
	  .addClass('link external')
	  .attr('target', '_blank');


    	
    // Initialize a new counter
     var wattmanCounter = new flipCounter('flip-counter', {value:5184000, inc:-1, pace:1000, auto:true});
    // 30 Days !!

    if (wattmanCounter.getValue() <= 0){
        console.log("FINI !");
    }

});
