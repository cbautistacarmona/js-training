// setItem(clé,valeur) : stocke une paire clé/valeur
// getItem(clé) : retourne la valeur associée à une clé
// removeItem(clé) : supprime la paire clé/valeur en indiquant le nom de la clé
// key(index): retourne la clé stockée à l'index spécifié
// clear(): efface toutes les paires



// Création d'un objet unique accessible de partout.
var website = website || {}; // Si « website » a déjà été crée dans un précédent fichier on le reprend. Sinon on le créer.

// Création d'un context d'execution isolant.
// Ce contexte d'exécution représente le code exécuté sur toutes les pages du site.
(function (publics) { // Tout ce qui devra être accessible en dehors de ce contexte d'execution sera accroché à « publics » et accessible via « website ».
    "use strict"; // Mode Strict pour ce contexte d'execution.

    // Options

    var settings = {

      version: "0.0.1",

      userGender: null,

      expiration_days: "3",

      // Consent box template:
      //my_template: function(){ return '<div class="some-class"><div class="container"><p>'+ this.option1 +'<br>'+ this.option2 +'</p></div>' },

    };

    var privates = {}; // Tout ce qui ne devra pas quitter le contexte d'execution sera accroché à « privates » et accessible uniquement via « privates ».

    /* Attributs / Fonctions privées */

    // ... //


    /* Attributs / Fonctions publiques */
    publics.init = function () {
      var  s = this.settings;
      website.manageEvents();

      // Le code ici sera exécutable via « website.init() ».
    };

    publics.doSomething = function(){

    }


    publics.manageEvents = function(){

        $("form").submit(function(e){
          e.preventDefault();
          settings.userGender = $('input[type=radio][name=userGender]:checked').val();

          //return userGender;
          console.log(settings.userGender);

        });
    }

}(website));

// On exécute le code commun sur la page courante.
website.init();









