var sessionCache = require('./sessionCache.js');

/*
 * Function which verifies if the session token given is valid or not. If not valid, it should return a response of
 * 401 'Unauthorized', otherwise it should save the session in cache.
 *
 * @params {Object} mediator object which is used to publish topic
 * @params {Object} mbaasApi object which used to access sessions in cache
 * @params {String} sessionToken string used as an identifier for a specific session
 * @params {Object} session object which contains the current session details
 * @params {Function} cb function callback
 */

module.exports = function verifySession(mediator, mbaasApi, sessionToken, session, cb) {
  mediator.request("wfm:user:session:validate", sessionToken)
    .then(function(verifiedSession) {
      if (!verifiedSession || !verifiedSession.isValid) {
        return cb();
      }

      sessionCache.saveSession(mbaasApi, sessionToken, verifiedSession, function(err, sessionSaved) {
        if (err) {
          return cb(err);
        }
        return cb(undefined, sessionSaved);
      });

    }, function(err) {
      return cb(err);
    });
};
