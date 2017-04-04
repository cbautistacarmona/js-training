var s,
MyApp = {



    settings : {

        setting1: null,
        setting2 : []

    },

    version : 0.0,

    init: function () {
      s = this.settings;
      this.manageEvents();
      //this.afficheList();
      //this.debug();
    },

    manageEvents: function () {
    //var _root = this
    //var manageEventsScope = this; // Same as var _this = this;

          // Click event on id element
          $("#my-action-btn").on('click', function(e) {
            e.preventDefault();

          });

          // Another Click event
          $( ".parent" ).on( "click", ".child",  function(e) {
            e.preventDefault();
            // Do some stuff
          });
    },

    doSomething: function () {
        // ... //
    },

    doSomethingElse: function (){
        // ... //
    },

    debug: function () {

    }

  };

$(function () {
  MyApp.init();
});


//https://blog.lesieur.name/structurer-le-javascript-de-son-site-avec-ou-sans-framework/

// Création d'un objet unique accessible de partout.
var website = website || {}; // Si « website » a déjà été crée dans un précédent fichier on le reprend. Sinon on le créer.

// Création d'un context d'execution isolant.
// Ce contexte d'exécution représente le code exécuté sur toutes les pages du site.
(function (publics) { // Tout ce qui devra être accessible en dehors de ce contexte d'execution sera accroché à « publics » et accessible via « website ».
    "use strict"; // Mode Strict pour ce contexte d'execution.

    var privates = {}; // Tout ce qui ne devra pas quitter le contexte d'execution sera accroché à « privates » et accessible uniquement via « privates ».

    /* Attributs / Fonctions privées */

    /* Attributs / Fonctions publiques */

    publics.init = function () {
        // Le code ici sera exécutable via « website.init() ».
    };
}(website));

// On exécute le code commun sur la page courante.
website.init();


// // Model vu sur https://blog.lesieur.name/structurer-le-javascript-de-son-site-avec-ou-sans-framework/

// // Création d'un objet unique accessible de partout.
// var website = website || {}; // Si « website » a déjà été crée dans un précédent fichier on le reprend. Sinon on le créer.

// // Création d'un context d'execution isolant.
// // Ce contexte d'exécution représente le code exécuté sur toutes les pages du site.
// (function (publics) { // Tout ce qui devra être accessible en dehors de ce contexte d'execution sera accroché à « publics » et accessible via « website ».
//     "use strict"; // Mode Strict pour ce contexte d'execution.

//     var privates = {}; // Tout ce qui ne devra pas quitter le contexte d'execution sera accroché à « privates » et accessible uniquement via « privates ».

//     /* Attributs / Fonctions privées */

//     /* Attributs / Fonctions publiques */

//     publics.init = function () {
//         // Le code ici sera exécutable via « website.init() ».
//     };
// }(website));

// // On exécute le code commun sur la page courante.
// website.init();

