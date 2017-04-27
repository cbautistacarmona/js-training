(function() {

  function addMyScript() {
    var s = document.getElementsByTagName('script')[0]
      , p = document.createElement('script')
      , body = document.getElementsByTagName('body')[0];
    p.async = 'async';
    p.src = 'http://a.teads.tv/page/60016/tag';
    //s.parentNode.insertBefore(p, s);
    body.appendChild(p);

    console.log('My script is available');
  }

  $( document ).ready(function() {
  	addMyScript();
  }) ;

  // $(document).ready(function($) { // When DOM is ready
  //  addMyScript();
  // });

  // When all assets (including images) are loaded
  $(window).on("load", function(){
      addMyScript();
  });



})();

