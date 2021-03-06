


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

        _log('debug','Le mode DEBUG '+codeVersion+' est initialisé.', 'info');

        publics.manageEvents();
      }

      publics.saveJAdebug = function(){
        localStorage.setItem( 'CBC-DEBUG-MODE', JSON.stringify(JAdebug));
      }

      publics.populateJAdebug = function(){
        JAdebug = JSON.parse( localStorage.getItem( 'CBC-DEBUG-MODE' ) );
      }

      publics.setDebugModeStatus = function (state) {
          if(publics.is_LocalStorage() === true){
            // Update status
            JAdebug.status = state;
            // Save in localstorage
            publics.saveJAdebug();
            //localStorage.setItem( 'CBC-DEBUG-MODE', JSON.stringify(JAdebug));
            //localStorage.setItem(  'CBC-DEBUG-MODE', JSON.stringify( userDatas ) );

            //JAdebug.status = state;

            if(state == true){
               _log('debug','Debug MODE is ON', 'info');
            }
            else{
              console.log('Debug MODE is OFF');
            }
          }
      }


      publics.is_LocalStorage = function(){
        if(typeof(localStorage)!== undefined){
          return  true ;
        }
        else{
          console.log('Votre navigateur ne supporte pas le localStorage') ;
          return  false ;
        }
      }

      publics.checkLocalStorageKeyExist = function(key){
        //text = JSON.stringify(key)
        if(localStorage[key] !== undefined){
          var ls_value = localStorage.getItem(key);
          //console.log('Valeur du local storage '+key+' : '+ls_value);
          return true ;
        }
        else{
          return false ;
        }
      }

      publics.checkLocalStorageValue = function(key){
        if (publics.checkLocalStorageKeyExist(key)){
            var ls_value = JSON.parse(localStorage.getItem(key));
            return ls_value
        }

        else{
          console.error('Cette entrée n\'existe pas !');
        }
      }


      publics.updateChannelSubscription = function(inputChannel, state){
        publics.populateJAdebug();
        JAdebug.channel[inputChannel].enable = state;
        var channelLabel = JAdebug.channel[inputChannel].label;
        console.log("Le channel "+channelLabel+" est en statut "+state);
        publics.saveJAdebug(); // Sauvez dans LS

        // Usage : taper dans la console DebugMode.updateChannelSubscription('nav', false);
      }

      // fonctions à faire

      // publics.suscribeAllChannels

      /*

       publics.unSuscribeAllChannels = function(){

      }
      */

      // All events
      publics.manageEvents = function () {
        // Au Chargement du dom
        $( document ).ready( function ( $ ) {

          /*if(localStorage['CBC-DEBUG-MODE'] !== undefined){
            publics.saveJAdebug();
          }*/

          //publics.populateJAdebug();
          _log('pub' , '[dit Épicure] ne craint ni ne fuit la volupté en tant que volupté, mais en tant qu’elle attire de grandes douleurs à ceux qui ne savent pas en faire un usage modéré et raisonnable ; et personne n’aime ni ne recherche la douleur comme douleur, mais parce qu’il arrive quelquefois que, par le travail et par la peine, on parvienne à jouir d’une grande volupté. En effet, pour descendre jusqu’aux petites choses, qui de vous ne fait point quelque exercice pénible pour en retirer quelque sorte d’utilité ? Et qui pourrait justement blâmer, ou celui qui rechercherait une volupté qui ne pourrait être suivie de rien de fâcheux, ou celui qui éviterait une douleur dont il ne pourrait espérer aucun plaisir.');

          _log('adtech' , '[dit Épicure] ne craint ni ne fuit la volupté en tant que volupté, mais en tant qu’elle attire de grandes douleurs à ceux qui ne savent pas en faire un usage modéré et raisonnable ; et personne n’aime ni ne recherche la douleur comme douleur, mais parce qu’il arrive quelquefois que, par le travail et par la peine, on parvienne à jouir d’une grande volupté. En effet, pour descendre jusqu’aux petites choses, qui de vous ne fait point quelque exercice pénible pour en retirer quelque sorte d’utilité ? Et qui pourrait justement blâmer, ou celui qui rechercherait une volupté qui ne pourrait être suivie de rien de fâcheux, ou celui qui éviterait une douleur dont il ne pourrait espérer aucun plaisir.', 'error');

          _log('nav' , '[dit Épicure] ne craint ni ne fuit la volupté en tant que volupté, mais en tant qu’elle attire de grandes douleurs à ceux qui ne savent pas en faire un usage modéré et raisonnable ; et personne n’aime ni ne recherche la douleur comme douleur, mais parce qu’il arrive quelquefois que, par le travail et par la peine, on parvienne à jouir d’une grande volupté. En effet, pour descendre jusqu’aux petites choses, qui de vous ne fait point quelque exercice pénible pour en retirer quelque sorte d’utilité ? Et qui pourrait justement blâmer, ou celui qui rechercherait une volupté qui ne pourrait être suivie de rien de fâcheux, ou celui qui éviterait une douleur dont il ne pourrait espérer aucun plaisir.', 'error');

           _log('debug' , '[dit Épicure] ne craint ni ne fuit la volupté en tant que volupté, mais en tant qu’elle attire de grandes douleurs à ceux qui ne savent pas en faire un usage modéré et raisonnable ; et personne n’aime ni ne recherche la douleur comme douleur, mais parce qu’il arrive quelquefois que, par le travail et par la peine, on parvienne à jouir d’une grande volupté. En effet, pour descendre jusqu’aux petites choses, qui de vous ne fait point quelque exercice pénible pour en retirer quelque sorte d’utilité ? Et qui pourrait justement blâmer, ou celui qui rechercherait une volupté qui ne pourrait être suivie de rien de fâcheux, ou celui qui éviterait une douleur dont il ne pourrait espérer aucun plaisir.', 'error');


        });

        $('body').on('click', '#my-action-btn-1' , function() {
            //e.preventdefault();
            publics.setDebugModeStatus(true);
        });

        $('body').on('click', '#my-action-btn-2' , function() {
            //e.preventdefault();
            publics.setDebugModeStatus(false);
        });

        // When all assets (including images) are loaded
        $( window ).on( 'load', function () {


        });


      }




  // On exécute le code commun sur la page courante.
  publics.init();


}) (jQuery, DebugMode);
