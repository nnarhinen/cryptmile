var hyperquest = require('hyperquest'),
    Q = require('q');

function couchdb(db) {
  this.database = db;
}

couchdb.prototype.persist = function(doc) {
  var def = Q.defer();
  hyperquest.post(this.db).write(JSON.stringify(doc)).on('response', function(res) {
    var data = '';
    res.on('data', function(chunk) {
      data += chunk;
    }).on('end', function() {
      def.resolve(JSON.parse(data));
    });
  }).on('error', function(err) {
    def.resolve(err);
  });
  return def.promise;
}

module.exports = couchdb;
