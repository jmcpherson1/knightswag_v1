
$( window ).ready(function() {
	var feed = new Instafeed({
	    get: 'tagged',
	    tagName: '100daysofcommutetherapy',
	    // userId: '12465383',
	    accessToken: '12465383.09bb975.81a1570117134eb8a926366b11e2fc13',
	    template: '<a href="{{link}}"><img src="{{image}}""{{id}}" /></a>',
	    resolution: 'low_resolution',
	    sortBy: 'most-liked'
	    //template: '<img src="{{model.user.profile_picture}}" />'
	});
		
	feed.run();

	var loadButton = document.getElementById('loadMoreBtn');
	    var feed = new Instafeed({
	    // every time we load more, run this function
	        after: function() {
	            // disable button if no more results to load
	            if (!this.hasNext()) {
	                loadButton.setAttribute('disabled', 'disabled');
	            }

	            else {
	            	console.log('Load more does not work!');
	            }
	        },
	    });

	    // bind the load more button
	    loadButton.addEventListener('click', function() {
	        feed.next();
	    });

	    // run our feed!
	    feed.run();

});

	//http://localhost/#access_token=12465383.09bb975.81a1570117134eb8a926366b11e2fc13

	/*==== DETECT THE SCREEN IS NEAR BOTTOM OF BROSWER ======*/

	// $(window).scroll(function(){
	//   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) 
	//     {
	//       feed.next();
	//     }
	  
	// });