var s,
CBC_manageListCourses = {

    settings : {

        itemNameInput: null,
        itemsList : []

    },

    version : 1.0,

    init: function () {
      s = this.settings;
      this.manageEvents();
      //this.afficheList();
      //this.debug();
    },

    manageEvents: function () {
    var _root = this
        //var manageEventsScope = this; // Same as var _this = this;

        $("form").submit(function(e){
          e.preventDefault();
          e.stopPropagation();
          s.itemNameInput=$('#input').val();
          s.itemsList.push(s.itemNameInput);

          // Décommenter pour afficher au fur et à mesure
          _root.afficheList();

          // Vide le champs pour faciliter les nouveaux ajouts
          $("#input").val("");

          //return $addedItem
          console.log(s.itemNameInput);

          // change the input size with long animate
          /*$('#input').stop(true, false).animate({
           "width" : "+=15"
          }, 5000, function() {
            console.info( 'animate finished.' );
          });*/

        });

          // Un bouton pour mettre à jour la liste avec les derniers ajouts
          $("#uppdate-to-buy").on('click', function(e) {
            e.preventDefault();
            _root.afficheList();
          });

          // Pour effacer un article
          $( ".liste-courses-body" ).on( "click", ".article",  function(e) {
            e.preventDefault();
            //var nBListElt = $('.liste-courses li').length ;
            //console.log( $( this ).text() );
            //console.log("Il y a maintenant "+nBListElt+" dans la liste");
            $( this ).fadeOut('1000', function() {
              $( this ).remove();
              _root.compteNombreArticleAffiche();
            });
          });
    },

    afficheList: function () {
    var _root = this
      if($('.liste-courses').length){
        _root.generateListElements();
      }

      else{
        $('.liste-courses-body').append($("<ul class='liste-courses'></ul>"));
        _root.generateListElements();
      }

      // On vide le tableau pour permettre des ajouts ultérieurs sans doublons
      return ( s.itemsList = [] );

    },

    generateListElements: function () {
          var elt = $(this);
          $.each( s.itemsList, function( i, val ) {
          //console.log( i+": " + val );
          elt = '<li class="article">'+ val +'</li>';
          $('.liste-courses').append(elt);
        });
    },

    compteNombreArticleAffiche: function (callback){
      var nBListElt = $('.liste-courses li').length ;
      var text = (nBListElt>1) ? 'affichés' : ' affiché';
      console.log("Il y a "+ nBListElt +" article"+((nBListElt>1)?'s':'')+" affiché"+((nBListElt>1)?'s':'')+" dans la liste"); // examples of ternary condition use
      if(nBListElt == 0){
         $( ".liste-courses").remove();
      }
    },

    debug: function () {

    }

  };

$(function () {
  CBC_manageListCourses.init();
});
