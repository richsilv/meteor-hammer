Package.describe({
  summary: "A javascript library for multi-touch gestures"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files(['hammer/dist/hammer.js', 'hammer/dist/jquery.hammer.js'], 'client');
});