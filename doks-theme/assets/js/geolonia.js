( function( $ ) {

  if ( $( '.geolonia-styles' ).length ) {
    var imgUrl = 'https://styles.geolonia.com/:style/screenshot.png'
    $.ajax( { url: 'https://api.geolonia.com/v1/styles' } )
      .done( function( data ) {
        for ( var key in data ) {
          var style = $( '<div class="style"></div>' )
          var img = $('<div><img src="' + imgUrl.replace( ':style', key ) + '" /></div>')
          var name = $('<div>' + key + '</div>')
          style.append( img )
          style.append( name )

          $( '.geolonia-styles' ).append( style )
        }
      } )
  }

  var map = new geolonia.Map( document.querySelector( '#toturial-009' ) );
  setInterval( function() {
    map.rotateTo( map.getBearing() + 90 )
  }, 3000 );

} )( jQuery );
