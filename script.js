
jQuery(document).ready(function() {

	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

	function run(){
		$.getJSON(flickerAPI,{
			tags:$("#tag").val(),
			tagmode:"any",
			format:"json"
		})
		.done(function(data){
			$('#images').html('');
	  		$.each( data.items, function( i, item ) {
	  			$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
	  			if ( i === 3 ) {
	  				return false;
	  			}
		    });
	    });
	}

	$('#boton').click(function(){
		run();
	});
});

