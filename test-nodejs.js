/**
 * test file for node.js
 */
const cryptico = require('./cryptico_umd');

var PassPhrase = "The Moon is a Harsh Mistress.";

// The length of the RSA key, in bits.
var Bits = 1024;

var MattsRSAkey = cryptico.generateRSAKey(PassPhrase, Bits);

var PlainText = "Matt, I need you to help me with my Starcraft strategy.";
var MattsPublicKeyString = cryptico.publicKeyString(MattsRSAkey);

var EncryptionResult = cryptico.encrypt(PlainText, MattsPublicKeyString);
console.log(EncryptionResult);
