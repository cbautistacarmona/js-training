// Création d'un objet unique accessible de partout.
var website = website || {}; // Si « website » a déjà été crée dans un précédent fichier on le reprend. Sinon on le créer.

// Création d'un context d'execution isolant.
// Ce contexte d'exécution représente le code exécuté sur toutes les pages du site.
(function (publics) { // Tout ce qui devra être accessible en dehors de ce contexte d'execution sera accroché à « publics » et accessible via « website ».
    "use strict"; // Mode Strict pour ce contexte d'execution.

    var privates = {}; // Tout ce qui ne devra pas quitter le contexte d'execution sera accroché à « privates » et accessible uniquement via « privates ».

    /* Attributs / Fonctions privées */

    /* ... */

    /* Attributs / Fonctions publiques */

    publics.getArticleJA = function(){

      var request = $.ajax({
        url: "https://www.jeuneafrique.com/api/business/v1.0/homepage/",
        method: "GET",
        //: data,
        dataType: "json",
        success: function(result){
          console.log(result);
        },
        error: function(result, statut, erreur){

          console.error("Erreur : responseText: "+result.responseText)

        },
        complete:  function(result, statut, erreur){
           console.log("Terminé !")
        }
      });
    }

    publics.getArticleJA_2 = function(){
      $.getJSON("https://www.jeuneafrique.com/api/business/v1.0/homepage/", function( data ){
          var items = [];
          $.each( data, function(key, value){
            // var title = data.posts[i].title;
            // var artId = data.posts[i].id;
            items.push("<li id='article_"+ key +"'>"+key+" :"+ value +"</li>");
          });
          $( "<ul/>", {
          "class": "my-new-list",
          html: items.join( "" )
          }).appendTo( "#result-ajax" );
      });
    }


    // publics.displayArticleJA = function(){
    //   $("#result-ajax").append(request.statut);


    // }

    publics.manageEvents = function(){

          // Click event on id element
          $("#my-action-btn").on('click', function(e) {
            e.preventDefault();

            publics.getArticleJA_2();
          });
    }

    publics.init = function () {
      website.manageEvents();
     // website.getArticleJA_2();
        // Le code ici sera exécutable via « website.init() ».
    };
}(website));

// On exécute le code commun sur la page courante.
website.init();



