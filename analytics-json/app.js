/* Main navigation script
------------------------------------------------------------*/
var JA_GaEventTracking = JA_GaEventTracking || {}; // Si « JA_GaEventTracking » a déjà été crée dans un précédent fichier on le reprend. Sinon on le créer.

(function( $ , publics ){

      // Options
      var settings = {
        version: "_v2" // Ne pas modifier
      }


      var privates = {}; // Tout ce qui ne devra pas quitter le contexte d'execution sera accroché à « privates » et accessible uniquement via « privates ».

      /* Attributs / Fonctions privées */

      // ... //

      /* Attributs / Fonctions publiques */
      publics.init = function () {
        var codeVersion = settings.version;
        // Le code ici sera exécutable via « publics.init() ».
        console.log('Le script JA_GaEventTracking version '+settings.version+' est initialisé.');
        publics.manageEvents();
        this.settings;

      }

      // Detecter la largeur desktop - Cette animation ne s'applique qu'a cette condition
      publics.is_desktop = function(){ // En réalité tous (tablette et petit ecran) sauf mobile
        if (window.matchMedia("(min-width: 768px)").matches){
          return true;
        }
        else{
          return false;
        }
      }
      publics.is_mobile = function(){
        if (window.matchMedia("(max-width: 767px)").matches){
          return true;
        }
        else{
          return false;
        }
      }

      publics.is_GA_data_complete = function(){
        //data = $(this).data("ga_analytics");
          if($(this).data("ga_analytics").length > 0){
            return true
          }
          else{
            return false
          }
      }

      publics.sendGAEvent = function(){
        //return ga('send', 'event', category, 'click', label);
      }

      // All events
      publics.manageEvents = function () {

      // CLICK EVENTS

      // Tracking général
      $( 'body' ).each(function(index) {

          $(this).on('touchstart click', '.tracking-click-evt-ga'+settings.version, function(e){
          var data = $(this).data("ga_analytics");
          //var data = JSON.parse(json);

              //if( publics.is_GA_data_complete() == true){
              //
              if(e.type === "touchstart") {
                      console.log("Nom event : TOUCHSTART");
                      console.log("Ma cat  : "+data.events[1].click['category']);
                      console.log("Mon Label  : "+data.events[1].click['label']);
                      console.log('B');

              } else if(e.type === "click") {
                   //console.log("Nom event : "+data.events[0]);
                      console.log("Nom event : CLICK");
                      console.log("Ma cat  : "+data.events[0].click['category']);
                      console.log("Mon Label  : "+data.events[0].click['label']);
                      console.log('A');
              }


              //}
          });


      });


      $( window ).on( 'load', function () {

      } );

      // Au Chargement du dom
      $( document ).ready( function ( $ ) {

      } )


    }



  // On exécute le code commun sur la page courante.
  publics.init();



}) (jQuery, JA_GaEventTracking);

