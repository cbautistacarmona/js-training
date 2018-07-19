/* Main navigation script
------------------------------------------------------------*/
var JA_GaEventTracking = JA_GaEventTracking || {}; // Si « JA_GaEventTracking » a déjà été crée dans un précédent fichier on le reprend. Sinon on le créer.

(function( $ , publics ){

      // Options
      var settings = {
        version: "_v2", // Ne pas modifier
        prevent_click_sending_tracking: null
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
          if($(this).hasAttribute("data-ga_analytics")){
            console.log('TTRRRUE');
            return true
          }
          else{
            console.log('FALSE');
            return false
          }
      }

     /*publics.sendGAEvent = function(category, typeEvent, label){
        //return ga('send', 'event', category, 'click', label);
        //return ga('send', 'event', category, typeEvent, label);
        //console.log(category+' '+typeEvent+' '+label);

         console.log("Mon event :  "+typeEvent+", ma catégorie : "+category+' et le label : '+label);
      }*/

      publics.sendGAEvent = function(category, typeEvent, label){
        //return ga('send', 'event', category, 'click', label);
        //return ga('send', 'event', category, typeEvent, label);
        console.log(category+' '+typeEvent+' '+label);


      }

      // All events
      publics.manageEvents = function () {

      // CLICK EVENTS

      // Tracking général
      $( 'body' ).each(function(index) {

          $(this).on('click', '.ja-tracking-event'+settings.version, function(e){
          var data = $(this).data("ga_analytics");

              if(e.type == "touchstart") {
                  if( data.events.touchstart !== undefined ){
                      var category = data.events.touchstart['category'];
                      var label = data.events.touchstart['label'];
                      console.log('Sending tap GA event');
                      settings.prevent_click_sending_tracking = true; // prevent from sending twice GA Event
                      publics.sendGAEvent(category, 'tap', label);
                  }

              } else if(e.type == "click") {

                  if(settings.prevent_click_sending_tracking !== true){
                    if( data.events.click  !== undefined ){
                      var category = data.events.click['category'];
                      var label = data.events.click['label'];

                      console.log('Sending click GA event');
                      publics.sendGAEvent(category, 'click', label);
                    }
                  }
              }

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

