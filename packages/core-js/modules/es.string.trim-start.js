'use strict';
var $ = require('../internals/export');
var $trimStart = require('../internals/string-trim-start');

// `String.prototype.trimStart` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
$({ target: 'String', proto: true, forced: ''.trimLeft !== $trimStart }, {
  trimStart: $trimStart,
});
