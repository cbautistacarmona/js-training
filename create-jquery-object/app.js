jQuery(document).ready(function($) {

  function listeDeCourses(){

    var $listArticle; // Useless ?
    var itemName;
    var $addedItem; // Useless ?
    var itemsList = []

       this.manageEvents = function(){

        var _this = this;
        $("form").submit(function(e){
          e.preventDefault();
          itemName=$('#input').val();

          // $addedItem = $("<li class='article'></li>").text(itemName);

          itemsList.push(itemName);

          // Décommenter pour afficher au fur et à mesure
          // _this.afficheList();

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
          $( ".article" ).on( "click", function() {
            //e.preventDefault();
            //console.log( $( this ).text() );
            console.log("ok test");
          });
       }

       this.afficheList = function (){
          // Affiche la liste
          $('.liste-course').append($listArticle);
          $.each( itemsList, function( i, val ) {
          console.log( i+": " + val );

          $("<li class='article'></li>").text(val).appendTo('.liste-course');

          // On vide le tableau pour permettre des ajouts ultérieurs sans doublons
          return ( itemsList = [] );
        });
       }

       this.debug = function(){
        // var art = $( ".article" );
        //     console.log( art.text() );
       }
  }

  window.CBCSCRIPTS_manageListCourse = new listeDeCourses();
  window.CBCSCRIPTS_manageListCourse.manageEvents();

});

