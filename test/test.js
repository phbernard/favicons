/*jslint node:true*/

'use strict';

var favicons = require('../index');

describe('favicon', function() {
  this.timeout(25000);

  it("should generate a favicon", function(done) {
    favicons('./test/logo.png', {
      logging: true,
      background: '#26353F'
    }, function(err, images, html) {
      // TODO: Check result
      done();
    });
  });
});
