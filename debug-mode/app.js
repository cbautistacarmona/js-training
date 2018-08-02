


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
            localStorage.setItem( 'CBC-DEBUG-MODE', JSON.stringify(JAdebug));
            //localStorage.setItem(  'CBC-DEBUG-MODE', JSON.stringify( userDatas ) );

            //JAdebug.status = state;

            if(state == true){
               _log('Debug MODE is ON');
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

      //Fonctions à faire
      publics.DebugModeSuscribeAll = function(){

      }

      publics.DebugModeSuscribeChannel = function(channel){
        //localStorage.setItem( 'CBC-DEBUG-MODE-CHANNELS', JAdebug.channel );
      }

      // All events
      publics.manageEvents = function () {

        // Au Chargement du dom
        $( document ).ready( function ( $ ) {

          _log(JAdebug.channel.pub.label , 'test', '[dit Épicure] ne craint ni ne fuit la volupté en tant que volupté, mais en tant qu’elle attire de grandes douleurs à ceux qui ne savent pas en faire un usage modéré et raisonnable ; et personne n’aime ni ne recherche la douleur comme douleur, mais parce qu’il arrive quelquefois que, par le travail et par la peine, on parvienne à jouir d’une grande volupté. En effet, pour descendre jusqu’aux petites choses, qui de vous ne fait point quelque exercice pénible pour en retirer quelque sorte d’utilité ? Et qui pourrait justement blâmer, ou celui qui rechercherait une volupté qui ne pourrait être suivie de rien de fâcheux, ou celui qui éviterait une douleur dont il ne pourrait espérer aucun plaisir.',  "color: yellow; font-style: italic; background-color: blue;padding: 2px");
          _error(JAdebug.channel.nav.label, 'ht Personne [dit Épicure] ne craint ni ne fuit la volupté en tant que volupté, mais en tant qu’elle attire de grandes douleurs à ceux qui ne savent pas en faire un usage modéré et raisonnable ; et personne n’aime ni ne recherche la douleur comme douleur, mais parce qu’il arrive quelquefois que, par le travail et par la peine, on parvienne à jouir d’une grande volupté. En effet, pour descendre jusqu’aux petites choses, qui de vous ne fait point quelque exercice pénible pour en retirer quelque sorte d’utilité ? Et qui pourrait justement blâmer, ou celui qui rechercherait une volupté qui ne pourrait être suivie de rien de fâcheux, ou celui qui éviterait une douleur dont il ne pourrait espérer aucun plaisir.');

          _log(JAdebug.channel.pub.label, ["criteo","Mon super message."]);

          _info(JAdebug.channel.pub.label, 'test info')

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
