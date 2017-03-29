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
          //_this.afficheList();

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

          // Pour effacer un article
          $( ".liste-course" ).on( "click", ".article",  function(e) {
            e.preventDefault();
            //console.log( $( this ).text() );
            $( this ).fadeOut();
          });
       }

      this.afficheList = function (){
          $.each( itemsList, function( i, val ) {
          console.log( i+": " + val );
          var elt = $(this);
          elt = '<li class="article">'+ val +'</li>';
          $('.liste-course').append(elt);

          // On vide le tableau pour permettre des ajouts ultérieurs sans doublons
          return ( itemsList = [] );
         });

          // TODO pour améliorer, créer dynamiquement le ul.liste-course

        /*if ($(".liste-course")) { // Si le ul existe déjà
          $.each( itemsList, function( i, val ) {
            console.log( i+": " + val );
            var elt = $(this);
            elt = '<li class="article">'+ val +'</li>';
            $('.liste-course').append(elt);
           });
        }

        else{

          $('.liste-course-title').after('<ul class="liste-course"><ul>'); // Sinon on le créer
          $.each( itemsList, function( i, val ) {
            console.log( i+": " + val );
            var elt = $(this);
            elt = '<li class="article">'+ val +'</li>';
            $('.liste-course').append(elt);
           });

        }*/

      }

       this.debug = function(){
          //$(".article").trigger('click');
       }
  }

  window.CBCSCRIPTS_manageListCourse = new listeDeCourses();
  window.CBCSCRIPTS_manageListCourse.manageEvents();

});



