var crypt = require('../lib/crypt'),
    test = require('tape'),
    forge = require('node-forge');

test('crypt document', function(t) {
  t.plan(7);
  var doc = {type: 'test', created_at: new Date(2014, 0, 30, 8, 30), foo: 'bar', baz: 'ding'},
      rsa = forge.pki.rsa,
      keypair = rsa.generateKeyPair({bits: 2048, e: 0x10001});
  var encrypted = crypt.encryptDocument(keypair.publicKey, doc);
  t.equal(encrypted.foo, undefined);
  t.equal(encrypted.baz, undefined);
  t.equal(encrypted.created_at, doc.created_at);
  t.notEqual(encrypted.encrypted_data, undefined);
  var decrypted = crypt.decryptDocument(keypair.privateKey, encrypted);
  t.equal(decrypted.foo, 'bar');
  t.equal(decrypted.baz, 'ding');
  t.equal((new Date(decrypted.created_at)).getTime(), doc.created_at.getTime());
});
