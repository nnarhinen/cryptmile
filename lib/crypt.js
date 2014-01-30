function encryptDocument(publicKey, doc) {
  var out = {
    type: doc.type,
    created_at: doc.created_at,
    encrypted_data: publicKey.encrypt(JSON.stringify(doc))
  };
  return out;
}

function decryptDocument(privateKey, doc) {
  return JSON.parse(privateKey.decrypt(doc.encrypted_data));
}

module.exports.encryptDocument = encryptDocument;
module.exports.decryptDocument = decryptDocument;
