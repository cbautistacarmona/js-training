var s,
MyApp = {

    settings : {

        setting1: null,
        setting2 : []

    },

    version : 0.0,

    init: function () {
      s = this.settings;
      this.manageEvents();
      //this.afficheList();
      //this.debug();
    },

    manageEvents: function () {
    var _root = this
    //var manageEventsScope = this; // Same as var _this = this;


          // Click event on id element
          $("#my-action-btn").on('click', function(e) {
            e.preventDefault();

          });

          // Another Click event
          $( ".parent" ).on( "click", ".child",  function(e) {
            e.preventDefault();
            // Do some stuff
          });
    },

    doSomething: function () {
        // ... //
    },

    doSomethingElse: function (){
        // ... //
    },

    debug: function () {

    }

  };

$(function () {
  MyApp.init();
});

