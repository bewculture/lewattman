$(document).ready(function() {

	// Open external links in a new window
	hostname = window.location.hostname
	$("a[href^=http]")
	  .not("a[href*='" + hostname + "']")
	  .addClass('link external')
	  .attr('target', '_blank');

});

$(window).load(function()
  {
    var scroller = new StickyScroller("#menu",
        {
            //start: 42,
            start: 42,
            end: 3000,
            interval: 5,
            range: 300,
            margin: 0
        });
        
    var opacity = .25;
    var fadeTime = 300;
    var current;
        
    scroller.onScroll(function(index)
          {            
            // console.log('current index : ' + index);
              if(scroller.inRange())
              {
                if (index >= 54)
                {
                  $("#ribbon_one").addClass("fixed");
                } else if (index < 54)
                {
                  $("#ribbon_one").removeClass("fixed");
                }
              }
          });
  

  });