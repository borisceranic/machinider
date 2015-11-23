var Fingerprint = require('fingerprintjs');

module.exports = function() {
    return new Fingerprint().get({
        canvas: true,
        screen_resolution: true,
        ie_activex: true,
    });
}
