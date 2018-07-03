


/* Main navigation script
------------------------------------------------------------*/
var JaTaboola = JaTaboola || {}; // Si « JaTaboola » a déjà été crée dans un précédent fichier on le reprend. Sinon on le créer.

(function( $ , publics ){


     // Options
     var settings = {
          version: "1.0.0",
          /*taboolaHeadScript: "window._taboola = window._taboola || []; _taboola.push({article:'auto'}); !function (e, f, u, i) {if (!document.getElementById(i)){ e.async = 1; e.src = u; e.id = i; f.parentNode.insertBefore(e, f);}}(document.createElement('script'), document.getElementsByTagName('script')[0], '//cdn.taboola.com/libtrc/jeuneafrique-jeuneafrique/loader.js', 'tb_loader_script'); if(window.performance && typeof window.performance.mark == 'function') {window.performance.mark('tbl_ic');}; }"
          ,*/
          taboolaLoaderUrl : "http://cdn.taboola.com/libtrc/jeuneafrique-jeuneafrique/loader.js",

          taboolaHeadScript: "window._taboola = window._taboola || []; _taboola.push({article:'auto'}); !function (e, f, u, i) { if (!document.getElementById(i)){ e.async = 1; e.src = u; e.id = i; f.parentNode.insertBefore(e, f); } }(document.createElement('script'), document.getElementsByTagName('script')[0], 'http://cdn.taboola.com/libtrc/jeuneafrique-jeuneafrique/loader.js', 'tb_loader_script'); if(window.performance && typeof window.performance.mark == 'function') {window.performance.mark('tbl_ic');}",
          taboolaArticleScript:  "window._taboola = window._taboola || []; _taboola.push({ mode: 'thumbnails-a', container: 'taboola-below-article-thumbnails', placement: 'Below Article Thumbnails', target_type: 'mix'});"
          ,
          taboolaFinalPushScript: "window._taboola = window._taboola || []; _taboola.push({flush: true})"

      }


    var privates = {}; // Tout ce qui ne devra pas quitter le contexte d'execution sera accroché à « privates » et accessible uniquement via « privates ».

      /* Attributs / Fonctions privées */

    /*privates.myGreatFunction = function() {

    }*/


    /* Attributs / Fonctions publiques */
      publics.init = function () {
        var codeVersion = settings.version;
        console.log('Le script JaTaboola version '+codeVersion+' est initialisé.');

        publics.manageEvents();
      }

      publics.loadMainTaboolaScriptInHead = function (){

        var deferred = new $.Deferred();

        var script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = settings.taboolaHeadScript;
      document.getElementsByTagName('head')[0].appendChild(script);
      console.log('Taboola in the head');
      }



      publics.is_taboola_loaded = function (){
        var len = $('script[src*="libtrc/jeuneafrique-jeuneafrique/loader.js"]').length;

        if (len === 0){
          return false;
        }
        else{
          return true;
        }
      }


      publics.insertTaboolaInArticle = function (){

      /*window._taboola = window._taboola || [];
      _taboola.push({
      mode: 'thumbnails-a',
      container: 'taboola-below-article-thumbnails',
      placement: 'Below Article Thumbnails',
      target_type: 'mix'
      });*/

      var s = document.getElementsByTagName('script')[0]
          , p = document.createElement('script')
          , articleBottom = document.getElementById('taboola-below-article-thumbnails')[0];
        p.async = 'async';
        p.innerHTML = settings.taboolaArticleScript;

        $( p ).insertAfter( "#taboola-below-article-thumbnails" ).promise().done(function() {
             console.log('Promiseee !');
            publics.finalTaboolaPush();

          })
        console.log('Taboola incerted');
      }

      publics.finalTaboolaPush = function (){
        /*window._taboola = window._taboola || [];
      _taboola.push({flush: true});*/
        var s = document.getElementsByTagName('script')[0]
          , p = document.createElement('script')
          , body = document.getElementsByTagName('body')[0];
        p.async = 'async';
        p.innerHTML = settings.taboolaFinalPushScript;
        body.appendChild(p);
        console.log('Taboola push');

        if($('.trc_rbox_container').is(':visible')){
          $('.js-ja__taboola-below-article-thumbnails--title').removeClass('hidden');
        }

      }


      // All events
      publics.manageEvents = function () {

        // Au Chargement du dom
      $( document ).ready( function ( $ ) {

      });

      // When all assets (including images) are loaded
        $( window ).on( 'load', function () {
          publics.loadMainTaboolaScriptInHead();
          publics.insertTaboolaInArticle();




        });


      }




  // On exécute le code commun sur la page courante.
  publics.init();


}) (jQuery, JaTaboola);
