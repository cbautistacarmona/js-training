jQuery(document).ready(function($) {

  function listeDeCourse(){

    var $listArticle;

       this.manageEvents = function(){

        var _this = this;
        $("form").submit(function(e){
          e.preventDefault();
          var itemName=$('#input').val();

          var $addedItem = $("<li class='article'></li>").text(itemName);
          console.log(itemName);
          //$listArticle +=  $addedItem ;

          $('.liste-course').append($addedItem);

          // Vide le champs pour faciliter les nouveaux ajouts
          $("#input").val("");

          //return $listArticle

        });

        // Un bouton pour mettre à jour la liste avec les derniers ajouts
        $("#uppdate-to-buy").on('click', function(e) {
          e.preventDefault();
          //$( ".liste-course li" ).clone().appendTo( ".achat-course " );
          _this.afficheList();

        });

          // Pour effacer un article --> ne fonctionne pas
          $( ".article" ).on( "click", function(e) {
            e.preventDefault();
            console.log( $( this ).text() );
          });
       }

       this.afficheList = function (){
          // Affiche la liste
          //$('.liste-course').append($listArticle);
          console.log($listArticle);
       }

       this.debug = function(){
        // var art = $( ".article" );
        //     console.log( art.text() );
       }
  }

  window.CBCSCRIPTS_manageListCourse = new listeDeCourse();
  window.CBCSCRIPTS_manageListCourse.manageEvents();

});

