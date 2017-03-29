var s,
CBC_manageListCourses = {

    settings : {

        itemName: null,
        itemsList : []

    },

    init: function () {
      s = this.settings;
      this.manageEvents();
      this.afficheList();
      this.debug();
    },

    manageEvents: function () {

        $("form").submit(function(e){
          e.preventDefault();
          s.itemName=$('#input').val();
          s.itemsList.push(s.itemName);

          // Décommenter pour afficher au fur et à mesure
          //this.afficheList();

          // Vide le champs pour faciliter les nouveaux ajouts
          $("#input").val("");

          //return $addedItem
          console.log(s.itemName);

        });

          // Un bouton pour mettre à jour la liste avec les derniers ajouts
          $("#uppdate-to-buy").on('click', function(e) {
            e.preventDefault();
            this.afficheList();
          });

          // Pour effacer un article
          $( ".liste-course" ).on( "click", ".article",  function(e) {
            e.preventDefault();
            //console.log( $( this ).text() );
            $( this ).fadeOut();
          });
    },

    afficheList: function () {
      $.each( s.itemsList, function( i, val ) {
        //console.log( i+": " + val );
        var elt = $(this);
        elt = '<li class="article">'+ val +'</li>';
        $('.liste-course').append(elt);

        // On vide le tableau pour permettre des ajouts ultérieurs sans doublons
        return ( s.itemsList = [] );
      });
    },

    debug: function () {

    }

  };

$(function () {
  CBC_manageListCourses.init();
});