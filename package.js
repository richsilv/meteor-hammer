Package.describe({
  "name": "richsilv:hammer",
  "description": "JQuery Wrapper for the Hammer.js package",
  "homepage": "https://github.com/noorderstorm/meteor-hammer",
  "author": "Richard Venneman <richard@noorderstorm.com> (http://noorderstorm.com)",
  "version": "0.1.4",
  "git": "https://github.com/noorderstorm/meteor-hammer.git",
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.use('quarterto:hammer@2.0.4')
  api.add_files(['jquery.hammer.js/jquery.hammer.js'], 'client');
});