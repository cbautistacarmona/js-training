


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

        _log('Le mode DEBUG '+codeVersion+' est initialisé.');

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

      publics.enableDebugMode = function () {
        localStorage.setItem( 'CBC-DEBUG-MODE', 'true' );
        window.location.reload();
        _log('Debug MODE is ON')
      }



      publics.disableDebugMode = function () {
        localStorage.setItem( 'CBC-DEBUG-MODE', 'false' );
         _log('Debug MODE is OFF')
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

          _log(JAdebug.channel.pub.label, 'Personne [dit Épicure] ne craint ni ne fuit la volupté en tant que volupté, mais en tant qu’elle attire de grandes douleurs à ceux qui ne savent pas en faire un usage modéré et raisonnable ; et personne n’aime ni ne recherche la douleur comme douleur, mais parce qu’il arrive quelquefois que, par le travail et par la peine, on parvienne à jouir d’une grande volupté. En effet, pour descendre jusqu’aux petites choses, qui de vous ne fait point quelque exercice pénible pour en retirer quelque sorte d’utilité ? Et qui pourrait justement blâmer, ou celui qui rechercherait une volupté qui ne pourrait être suivie de rien de fâcheux, ou celui qui éviterait une douleur dont il ne pourrait espérer aucun plaisir.');
         _error(JAdebug.channel.nav.label, 'ht Personne [dit Épicure] ne craint ni ne fuit la volupté en tant que volupté, mais en tant qu’elle attire de grandes douleurs à ceux qui ne savent pas en faire un usage modéré et raisonnable ; et personne n’aime ni ne recherche la douleur comme douleur, mais parce qu’il arrive quelquefois que, par le travail et par la peine, on parvienne à jouir d’une grande volupté. En effet, pour descendre jusqu’aux petites choses, qui de vous ne fait point quelque exercice pénible pour en retirer quelque sorte d’utilité ? Et qui pourrait justement blâmer, ou celui qui rechercherait une volupté qui ne pourrait être suivie de rien de fâcheux, ou celui qui éviterait une douleur dont il ne pourrait espérer aucun plaisir.');

           _log(JAdebug.channel.nav.label, 'test');

        });

        $('body').on('click', '#my-action-btn-1' , function(e) {
            publics.enableDebugMode();
        });

        $('body').on('click', '#my-action-btn-2' , function(e) {
            publics.disableDebugMode();
        });

        // When all assets (including images) are loaded
        $( window ).on( 'load', function () {


        });


      }




  // On exécute le code commun sur la page courante.
  publics.init();


}) (jQuery, DebugMode);
