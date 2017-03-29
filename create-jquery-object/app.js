jQuery(document).ready(function($) {

  function listeDeCourses(){

    var itemName;
    var itemsList = []

       this.manageEvents = function(){

        var _this = this;
        $("form").submit(function(e){
          e.preventDefault();
          itemName=$('#input').val();

          itemsList.push(itemName);

          // Décommenter pour afficher au fur et à mesure
          _this.afficheList();

          // Vide le champs pour faciliter les nouveaux ajouts
          $("#input").val("");

          //return $addedItem
          console.log(itemName);

        });

          // Un bouton pour mettre à jour la liste avec les derniers ajouts
          $("#uppdate-to-buy").on('click', function(e) {
            e.preventDefault();
            _this.afficheList();
          });

          // Pour effacer un article --> ne fonctionne pas
          $( ".article" ).on( "click", function(e) {
            e.preventDefault();
            //console.log( $( this ).text() );
            console.log("ok test");
            alert("ok test");
          });

       }

      this.afficheList = function (){

          $('.liste-course').append($listArticle);
          $.each( itemsList, function( i, val ) {
          console.log( i+": " + val );
          var elt = $(this);
          elt = '<li ><a href="#" class="article">'+ val +'</a></li>';
          $('.liste-course').append(elt);

          // On vide le tableau pour permettre des ajouts ultérieurs sans doublons
          return ( itemsList = [] );
        });
       }

       this.debug = function(){
        // var art = $( ".article" );
        //     console.log( art.text() );
          $(".article").trigger('click');
       }
  }

  window.CBCSCRIPTS_manageListCourse = new listeDeCourses();
  window.CBCSCRIPTS_manageListCourse.manageEvents();

});

