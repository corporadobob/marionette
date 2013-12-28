window.App = (function(Backbone, Marionette){
  var application = new Marionette.Application();

  application.on('initialize:before', function(options){

    // hadning off the currentUser object to the user model and
    // request a newly instantiated model for the current user
    App.currentUser = App.request('set:currentUser', options.currentUser);
  });

  application.addRegions({
    headerRegion: '#header-region',
    mainRegion: '#main-region',
    footerRegion: '#footer-region'
  });

  application.addInitializer(function(){
    application.module('HeaderModule').start();
    application.module('FooterModule').start();
  });

  application.on('initialize:after', function(){
    if (Backbone.history) Backbone.history.start();
  });

  return application;
})(Backbone, Marionette);


// Start this up baby!
$(function(){
  App.start({
    currentUser: gon.current_user
  });
});
