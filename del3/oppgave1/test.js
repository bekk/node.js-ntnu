var assert = require('chai').assert;
var fs = require('fs');

var p = require('./package.json');
var scripts = p.scripts;

var scriptContents = Object.keys(p.scripts).reduce(function(acc, k) {
  return acc + scripts[k];
}, '');

describe('running tasks with npm should have', function() {

  describe('uglifier', function() {

    it('outputting the correct file', function(done) {
      fs.exists('./app.js', function(exists) {
        assert.ok(exists);
        done();
      });
    });

    it('outputting the correct content', function() {
      var produced = fs.readFileSync('./app.js');
      var correct = fs.readFileSync('./solutions/uglified.js');
      assert.equal(produced.toString(), correct.toString());
    });

    it('configured in the package.json', function() {
      assert.ok(scriptContents.match(/^.*uglifyjs.*1\.js.*2\.js.*$/));
    });
  });

  describe('less compilation', function() {
    it('has produced correct file', function(done) {
      fs.exists('./styles.css', function(exists) {
        assert.ok(exists);
        done();
      });
    });

    it('outputting the correct content', function() {
      var produced = fs.readFileSync('./styles.css');
      var correct = fs.readFileSync('./solutions/styles.css');
      assert.equal(produced.toString(), correct.toString());
    });

    it('configured in the package.json', function() {
      assert.ok(scriptContents.match(/^.*lessc.*styles\.less.*$/));
    });
  });

  describe('running tests', function() {
    it('configured in the package.json', function() {
      assert.ok(scripts.test);
      assert.ok(scripts.test.match(/^.*mocha.*test\.js.*$/));
    });
  });
});
