// Création d'un objet unique accessible de partout.
var website = website || {}; // Si « website » a déjà été crée dans un précédent fichier on le reprend. Sinon on le créer.

// Création d'un context d'execution isolant.
// Ce contexte d'exécution représente le code exécuté sur toutes les pages du site.
(function (publics) { // Tout ce qui devra être accessible en dehors de ce contexte d'execution sera accroché à « publics » et accessible via « website ».
    "use strict"; // Mode Strict pour ce contexte d'execution.

    var privates = {}; // Tout ce qui ne devra pas quitter le contexte d'execution sera accroché à « privates » et accessible uniquement via « privates ».

    /* Attributs / Fonctions privées */

    // ... //


    /* Attributs / Fonctions publiques */

    publics.getArticleJA = function(){
      var url = 'https://www.jeuneafrique.com/api/business/v1.0/homepage/';
      var textBtnAction = $("#my-action-btn").text();
      var request = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        cache: true,
        beforeSend: function() {
          $("#my-action-btn").text('Chargement'); // On indique sur le bouton que le chargement est en cours
        }
      });

      // Ci-dessous exemple avec les promises (done, fail, always)
      request.done(function(response) {
        var items = [];
          $.each( response.data.posts, function(i, post){
              var title = post.title;
              var artId = post.id;
              console.log(i , post);
              items.push("<li id='article_"+ i +"'><h4>"+title+"</b> - <small>"+ artId +"</small></h4></li>");
          });
          $( "<ul/>", {
          "class": "my-new-list",
          html: items.join( "" )
          }).appendTo( "#result-ajax" );

      });

      request.fail(function( jqXHR, textStatus ) {
        console.error( "Request failed: " + textStatus );
      });

      request.always(function() {
          console.log( "complete" );
          $("#my-action-btn").text(textBtnAction); // Quel que soit le résultat (done ou fail) on remet le texte initial du bouton
      });
    }

    // Variante avec methode getJSON
    publics.getArticleJA_2 = function(){
      $.getJSON("https://www.jeuneafrique.com/api/business/v1.0/homepage/", function( response ){
          var items = [];
          $.each( response.data.posts, function(i, post){
              var title = post.title;
              var artId = post.id;
              console.log(i , post);
              items.push("<li id='article_"+ i +"'><h4>"+title+"</b> - <small>"+ artId +"</small></h4></li>");
          });
          $( "<ul/>", {
          "class": "my-new-list",
          html: items.join( "" )
          }).appendTo( "#result-ajax" );
      });
    }

    publics.manageEvents = function(){

          // Click event on id element
          $("#my-action-btn").on('click', function(e) {
            e.preventDefault();

            publics.getArticleJA();
          });
    }

    publics.init = function () {
      website.manageEvents();
      // Le code ici sera exécutable via « website.init() ».
    };
}(website));

// On exécute le code commun sur la page courante.
website.init();



