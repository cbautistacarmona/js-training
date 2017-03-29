jQuery(document).ready(function($) { // When DOM is ready

  function myMainFunction(){

    // Some global var
    // var x,
    // var itemsList = []

       this.manageEvents = function(){

        var _this = this; // In order to avoid confusion with jQuery $('this')


          // Click event on id element
          $("#my-action-btn").on('click', function(e) {
            e.preventDefault();
            //_this.doSomething();
          });

          // Another Click event
          $( ".parent" ).on( "click", ".child",  function(e) {
            e.preventDefault();
            // Do some stuff
          });
       }

      this.doSomething = function (){


      }

       this.debug = function(){

       }
  }

  window.CBCSCRIPTS_manageMainFunction = new myMainFunction();
  window.CBCSCRIPTS_manageMainFunction.manageEvents();

});

