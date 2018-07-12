


/* Main navigation script
------------------------------------------------------------*/
var NoOrphans = NoOrphans || {}; // Si « NoOrphans » a déjà été crée dans un précédent fichier on le reprend. Sinon on le créer.

// Si la class js-no-orphans est trouvée, un espace insécable est ajouté avant certains caractères spéciaux (Guillemet, Point d'interrogation etc.) situé à la fin d'une chaîne de caractère et susceptibles de passer à la ligne, pour éviter qu'il se retouve "orphelin" seul sur la ligne.

(function( $ , publics ){


     // Options
     var settings = {
          version: "1.0.0"
      }


    var privates = {}; // Tout ce qui ne devra pas quitter le contexte d'execution sera accroché à « privates » et accessible uniquement via « privates ».

      /* Attributs / Fonctions privées */

    /*privates.myGreatFunction = function() {

    }*/


    /* Attributs / Fonctions publiques */
      publics.init = function () {
        var codeVersion = settings.version;

        console.log('Le script NoOrphans version '+codeVersion+' est initialisé.');

        publics.manageEvents();
      }

      publics.addNonBreakingSpace = function (text) {
        /*$('.js-no-orphans').each(function(){
          var wordArray = $(this).text().split(" ");
          var finalTitle = "";
           for (i=0;i<=wordArray.length-1;i++) {
              finalTitle += wordArray[i];
              if (i == (wordArray.length-2)) {
                  finalTitle += "&nbsp;";
              } else {
                  finalTitle += " ";
              }
            }
          $(this).html(finalTitle);
      });*/

         $('.js-no-orphans, .lead, p').each(function(){
          var wordArray = $(this).text().split(" ");
          var finalTitle = "";
           for (i=0;i<=wordArray.length-1;i++) {
              finalTitle += wordArray[i];
              if (i == (wordArray.length-1)) {
                  finalTitle += '</span>';
              }
              if (i == (wordArray.length-3)) {
                  finalTitle += ' <span class="css-nowrap">';
              } else {
                  finalTitle += " ";
              }
            }
          $(this).html(finalTitle);
      });

        /*$("*").each(function(){
        var content,widow;
        content = $(this).text().split(" ");
        widow = " "+content.pop();
        $(this).html(content.join(" ")+widow);
        });*/
    }




      // All events
      publics.manageEvents = function () {

        // Au Chargement du dom
      $( document ).ready( function ( $ ) {

      });

      // When all assets (including images) are loaded
        $( window ).on( 'load', function () {




        });


      }




  // On exécute le code commun sur la page courante.
  publics.init();


}) (jQuery, NoOrphans);
