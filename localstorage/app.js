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

      expiration_days: "3"

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

    publics.customiseForGender = function(){
         if (localStorage.userGender == 'male'){
            $('body').css({
              color: '#fff',
              backgroundColor: '#41cdf4'
            })
          }

          if (localStorage.userGender == 'female'){
            $('body').css({
              color: '#333',
              backgroundColor: '#f9e0f7'
            })
          }

          if (localStorage.userGender == 'nocomment'){
            $('body').css({
              color: '#333',
              backgroundColor: '#c5f442'
            })
          }
    }


    publics.manageEvents = function(){

        $("form").submit(function(e){
          e.preventDefault();
          settings.userGender = $('input[type=radio][name=userGender]:checked').val();

          localStorage.setItem("userGender", settings.userGender);

          //return userGender;
          console.log(settings.userGender);
          publics.customiseForGender();

        });

        $("#btn-reset").on('click', function(e) {
            e.preventDefault();
            localStorage.clear();
            $('body').css({
              color: 'inherit',
              backgroundColor: 'inherit'
            })

          });



      $(window).on("load", function(){
        publics.customiseForGender();
      });
    }

}(website));

// On exécute le code commun sur la page courante.
website.init();









