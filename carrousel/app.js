


/* Main navigation script
------------------------------------------------------------*/
var ItcCarrousel = ItcCarrousel || {}; // Si « ItcCarrousel » a déjà été crée dans un précédent fichier on le reprend. Sinon on le créer.

(function( $ , publics ){


     // Options
     var settings = {
        nbSlide : 0,
        nbCurrent : 1,
        elemCurrent : null,
        elem : null,
        timer : null
      }


    var privates = {}; // Tout ce qui ne devra pas quitter le contexte d'execution sera accroché à « privates » et accessible uniquement via « privates ».

      /* Attributs / Fonctions privées */

    /*privates.myGreatFunction = function() {

    }*/

    /* Attributs / Fonctions publiques */
      publics.init = function () {
        var codeVersion = settings.version;
        console.log('Le script ItcCarrousel est initialisé.');

        publics.manageEvents();
      }


    /* Attributs / Fonctions publiques */
      publics.buildCarrousel = function (elem) {
        this.nbSlide = elem.find(".slide").length;

        //creation pagination
        elem.append('<div class="carrousel-picto"></div>');
        for(var i=1;i<=this.nbSlide;i++){
          elem.find(".carrousel-picto").append("<li><span>"+i+"</span></li>");
        }

        // au click goto slide correspondant
        elem.find(".carrousel-picto span").click(function(){
          publics.gotoSlide($(this).text());
        });

        //au click prev
        elem.find("#carrousel-nav .prev").click(function(){
          publics.prev();
        });

        //au click next
        elem.find("#carrousel-nav .next").click(function(){
          publics.next();
        });

        //initialisation du carrousel
        this.elem = elem;
        elem.find(".slide").hide();
        elem.find(".slide:first").show();
        this.elemCurrent = elem.find(".slide:first");
        this.elem.find(".carrousel-picto li:first").addClass("active");

        //créer timer
        publics.play();

        //arret au survol du carrousel
        elem.mouseover(publics.stop);
        elem.mouseout(publics.play);
      }


      publics.gotoSlide = function (num){

        if(num == this.nbCurrent){return false;}

        /*Animation en slide*/
        var sens = 1;
          if(num<this.nbCurrent){sens = -1;}
        var cssDepart = {"left":sens*this.elem.width()};
        var cssFin = {"left":sens*-this.elem.width()};
        this.elem.find("#slide"+num).show().css(cssDepart);

        this.elem.find("#slide"+num).animate({"top":0,"left":0},500);
        this.elemCurrent.animate(cssFin,500);

        this.elem.find(".carrousel-picto li").removeClass("active");
        this.elem.find(".carrousel-picto li:eq("+(num-1)+")").addClass("active");
        this.nbCurrent = num;
        this.elemCurrent = this.elem.find("#slide"+num);
      }

      publics.next = function (){
        var num = this.nbCurrent+1;
        if(num > this.nbSlide){
          num = 1;
        }
        this.gotoSlide(num);
      }

      publics.prev = function (){
        var num = this.nbCurrent-1;
      if(num <1){
        num = this.nbSlide;
      }
      this.gotoSlide(num);
      }

      publics.stop = function (){
        window.clearInterval(publics.timer);
      }

      publics.play = function (){
        window.clearInterval(publics.timer);
      }





      // All events
      publics.manageEvents = function () {

        // Au Chargement du dom
      $( document ).ready( function ( $ ) {

          publics.buildCarrousel($("#carrousel"));

      });

      // When all assets (including images) are loaded
        $( window ).on( 'load', function () {

        });


      }




  // On exécute le code commun sur la page courante.
  publics.init();


}) (jQuery, ItcCarrousel);
