# Ember-possessive

A simple Ember helper that lets you get a possessive form of a string for use in templates.

Courtesy of [ruby possessive gem](https://github.com/bclubb/possessive).

## How to use

```javascript
{{possessive 'Chris'}}
```

## Re-usability

You can re-use the function used to make a string possessive by importing
the function a la:

```javascript
import possessive from 'ember-possessive/utils/possessive';
```

Enjoy!

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
