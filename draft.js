var myApp = (function( $ ){

  var options = {

    option1: "",

    option2: "",

    // Consent box template:
    my_template: function(){ return '<div class="some-class"><div class="container"><p>'+ this.option1 +'<br>'+ this.option2 +'</p></div>' },

  };

  function is_mobile() {
    return $('.navbar-toggle').is(':visible');
  }

  var manageEvents = {
    getConsentCookie: function() {
      var value = '; ' + document.cookie;
      var parts = value.split( '; ' + options.cookie_name + '=' );
      return parts.length != 2 ? undefined : parts.pop( ).split( ';' ).shift( );
    },
    setConsentCookie: function( value ) {
      var exdate = new Date( );
      exdate.setDate( exdate.getDate( ) + ( options.cookie_expiry_days ) );
      var cookie = [
          options.cookie_name + '=' + value,
          'expires=' + exdate.toUTCString( ),
          'path=' + ( options.cookie_path || '/' )
      ];
      if ( options.cookie_domain ) {
        cookie.push( 'domain=' + options.cookie_domain );
      }
      document.cookie = cookie.join( ';' );
    },
    displayQuestionIfNeeded: function() {
      var acknowledged = this.getConsentCookie();
      if ( !acknowledged ) {
        var $box = $( options.box_template() );

        $box.insertBefore( '#top' );

        var offset = $box.height()+1;

        $adminbar = $( '#wpadminbar' );
        if ( $adminbar.length ) {
          offset -= $adminbar.height();
        }

        if ( is_mobile() ) {
          $('body').css( { 'margin-top': offset +'px' });
          $('#navigation #principale-nav').css( { 'top': offset +'px' } );
        } else {
          $('body').css( { 'margin-top': offset +'px' });
        }

        $box.on( 'click', '.consent-ok', function( e ) {
          e.preventDefault();
          cookie_consent.setConsentCookie( true );
          $box.slideToggle();
          $( "body" ).animate( { 'margin-top': 0 }, { duration: 400, queue: false } );
          $( "#navigation #principale-nav" ).animate( { 'top': 0 }, { duration: 400, queue: false });
        } );
      }
    }
  };

  $( document ).ready( function(){
    cookie_consent.displayQuestionIfNeeded();
  });

  return cookie_consent;
})( jQuery );
