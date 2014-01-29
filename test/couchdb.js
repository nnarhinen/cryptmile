var couchdb = require('../lib/couchdb'),
    test = require('tape'),
    hyperquest = require('hyperquest'),
    sinon = require('sinon');

test('create document', function(t) {
  t.plan(2);
  var stub = sinon.stub(hyperquest, 'post').returns({
    write: function(str) {
             t.deepEqual({type: 'test', name: 'Some name'}, JSON.parse(str));
             return this;
           },
    on: function() { return this; }
  });
  (new couchdb('testdb')).persist({type: 'test', name: 'Some name'});
  t.equal(stub.callCount, 1);
  
});
