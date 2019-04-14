( function( $ ) {

  if ( $( '.tilecloud-styles' ).length ) {
    var imgUrl = 'https://styles.tilecloud.io/:style/screenshot.png'
    $.ajax( { url: 'https://api.tilecloud.io/v1/styles' } )
      .done( function( data ) {
        for ( var key in data ) {
          var style = $( '<div class="style"></div>' )
          var img = $('<div><img src="' + imgUrl.replace( ':style', key ) + '" /></div>')
          var name = $('<div>' + key + '</div>')
          style.append( img )
          style.append( name )

          $( '.tilecloud-styles' ).append( style )
        }
      } )
  }

} )( jQuery );
