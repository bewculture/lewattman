$(document).ready(function() {

	// Open external links in a new window
	hostname = window.location.hostname
	$("a[href^=http]")
	  .not("a[href*='" + hostname + "']")
	  .addClass('link external')
	  .attr('target', '_blank');


    	
    // Initialize a new counter    
    var launch = new Date("April 31, 2012 10:32:00");
    var diff = Math.round((launch - new Date()) / 1000);
    
    var wattmanCounter = new flipCounter('flip-counter', {value: diff, inc:-1, pace:1000, auto:true});
    
    if (wattmanCounter.getValue() <= 0){
        wattmanCounter.stop();
        console.log("FINI !");
    }

    $(".pop").popover();
});
