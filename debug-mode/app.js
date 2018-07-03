


/* Main navigation script
------------------------------------------------------------*/
var DebugMode = DebugMode || {}; // Si « DebugMode » a déjà été crée dans un précédent fichier on le reprend. Sinon on le créer.

// Si c'est true les console.log appelés via _log apparaissent
//var JAdebug = true;
// Exemple :  _log('Mon message...');
//

(function( $ , publics ){


     // Options
     var settings = {
          version: "1.0.0",
          /*JAdebug: function(){
            publics.ls_JADebugMode_value();
          }*/
         // JAdebug: false
      }

   //var _log = settings.JAdebug ? console.log.bind(console) : function () {};


    var privates = {}; // Tout ce qui ne devra pas quitter le contexte d'execution sera accroché à « privates » et accessible uniquement via « privates ».

      /* Attributs / Fonctions privées */

    /*privates.myGreatFunction = function() {

    }*/


    /* Attributs / Fonctions publiques */
      publics.init = function () {
        var codeVersion = settings.version;
        //settings.JAdebug = publics.ls_JADebugMode_value();
        //console.log('settings.JAdebug est '+settings.JAdebug+'et est un '+typeof(settings.JAdebug));

        _log('Le script DebugMode version '+codeVersion+' est initialisé.');

        publics.manageEvents();
      }

       publics.debugModeStatus = function () {
          if (settings.JAdebug == true){
            _log('Debug Mode ON');
          }
          else{
            _log('Debug Mode OFF');
          }

      }

      publics.enableDebugStatus = function () {
        localStorage.setItem( 'CBC-DEBUG-MODE', 'true' );
      }



      publics.disableDebugStatus = function () {
        localStorage.setItem( 'CBC-DEBUG-MODE', 'false' );
      }

      publics.ls_JADebugMode_exists = function(){
        if(localStorage['CBC-DEBUG-MODE'] !== undefined){
          var ls_JADebugMode_value = localStorage.getItem('CBC-DEBUG-MODE');
          console.log('la variable existe et a pour valeur...'+ls_JADebugMode_value );
          return true
        }
        else{
          console.log('CBC-DEBUG-MODE n existe pas');
          return false
        }
      }

      publics.ls_JADebugMode_value = function(){
        if(localStorage['CBC-DEBUG-MODE'] !== undefined){
          var ls_JADebugMode_value = localStorage.getItem('CBC-DEBUG-MODE');
          if(ls_JADebugMode_value == 'true'){
            console.log('BBBB');
            return true
          }
          else{
            console.log('CCCC');
            return false
          }
        }
        else{
          console.log('DDDD');
          return false

        }
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


}) (jQuery, DebugMode);
