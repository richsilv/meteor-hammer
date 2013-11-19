# Hammer.js for Meteor

A javascript library for multi-touch gestures.

This Meteor package contains the latest hammer.js main library and the jQuery plugin.

## How to install

1. `npm install -g meteorite` (if not already installed)
2. `mrt add hammer`

## Usage

Create a Hammer instance:

```javascript
var hammer = $('#nav').hammer();
```

Bind listeners:

```javascript
hammer.on('tap', function(e) {
  e.stopPropagation();
  
  console.log('This did just happen.');
});
```

## Documentation

[https://github.com/EightMedia/hammer.js/wiki](https://github.com/EightMedia/hammer.js/wiki)