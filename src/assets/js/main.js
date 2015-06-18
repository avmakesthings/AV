var data={
		    "myCarousel": [
		        "assets/img/pPlanter/pplanter_gallery0.jpg",
		        "assets/img/pPlanter/pplanter_gallery1.jpg",
		        "assets/img/pPlanter/pplanter_gallery2.jpg",
		        "assets/img/pPlanter/pplanter_gallery3.jpg",
		        "assets/img/pPlanter/pplanter_gallery4.jpg",
		        "assets/img/pPlanter/pplanter_gallery5.jpg",
		        "assets/img/pPlanter/pplanter_gallery6.jpg",
		        "assets/img/pPlanter/pplanter_gallery7.jpg",
		        "assets/img/pPlanter/pplanter_gallery8.jpg",
		        "assets/img/pPlanter/pplanter_gallery9.jpg",
		        "assets/img/pPlanter/pplanter_gallery10.jpg"
		    ],

		    "myCarousel1": [
		        "assets/img/brainwave/brainwave_gallery0.jpg",
		        "assets/img/brainwave/brainwave_gallery1.jpg",
		        "assets/img/brainwave/brainwave_gallery2.jpg",
		        "assets/img/brainwave/brainwave_gallery3.jpg",
		        "assets/img/brainwave/brainwave_gallery4.jpg",
		        "assets/img/brainwave/brainwave_gallery5.jpg",
		        "assets/img/brainwave/brainwave_gallery6.jpg",
		        "assets/img/brainwave/brainwave_gallery7.jpg",
		        "assets/img/brainwave/brainwave_gallery8.jpg",
		        "assets/img/brainwave/brainwave_gallery9.jpg",
		        "assets/img/brainwave/brainwave_gallery10.jpg",
		        "assets/img/brainwave/brainwave_gallery11.jpg"
		    ],



		    "myCarousel2": [
		        "assets/img/brainwave/brainwave_gallery12.jpg",
		        "assets/img/brainwave/brainwave_gallery13.jpg",
		        "assets/img/brainwave/brainwave_gallery14.jpg",
		        "assets/img/brainwave/brainwave_gallery15.jpg",
		        "assets/img/brainwave/brainwave_gallery16.jpg",
		        "assets/img/brainwave/brainwave_gallery17.jpg",
		        "assets/img/brainwave/brainwave_gallery18.jpg",
		        "assets/img/brainwave/brainwave_gallery19.jpg",
		        "assets/img/brainwave/brainwave_gallery20.jpg",
		        "assets/img/brainwave/brainwave_gallery21.jpg",
		        "assets/img/brainwave/brainwave_gallery22.jpg",
		        "assets/img/brainwave/brainwave_gallery23.jpg"                
		    ]

}


// Load files for carousel
function imgCarousel(data, id){
  var items = [];
  $.each( data, function(key, val ) {
  	if (key == 0) {
  		items.push("<div class='item active'><img src='"+val+"'></div>");	
  	} else {
    	items.push("<div class='item'><img src='"+val+"'></div>");
    }
  });
  $(id +" > .carousel-inner").html( items.join('') )
}



;(function(){

	imgCarousel(data.myCarousel , "#myCarousel");
	imgCarousel(data.myCarousel1 , "#myCarousel1");
	imgCarousel(data.myCarousel2 , "#myCarousel2");


	// Menu settings

	// $('#theMenu').on('click', function(){
	// 	$('#theMenu').toggle()
	// });





	$('#menuToggle, .menu-close').on('click', function(){

		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
		$('#menuToggle').toggleClass('hidden');
	});

	$(window).scroll($.debounce( 1000, true, function(){
	    // $('#scrollMsg').html('SCROLLING!');
	    $('#logo-top').toggleClass('fadeOut');
	} ) );

	$(window).scroll($.debounce( 1000, function(){
	    // $('#scrollMsg').html('DONE!');
	    $('#logo-top').toggleClass('fadeOut');
	} ) );

	$(window).scroll($.debounce( 1000, true, function(){
	    // $('#scrollMsg').html('SCROLLING!');
	    $('.menu').toggleClass('fadeOut');
	} ) );

	$(window).scroll($.debounce( 1000, function(){
	    // $('#scrollMsg').html('DONE!');
	    $('.menu').toggleClass('fadeOut');
	} ) );


	// $('#btn').click(function() {
 //    $('#wizard').toggle();
	// });

})(jQuery)








