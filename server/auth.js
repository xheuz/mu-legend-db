var auth = require('basic-auth');
const Models = require('./models');

module.exports = function (req, res, next) {
    
    var user = auth(req);
    if(user) {
        Models.user.findOne({where:{username: user.name}}).then(userId => {
            if (!user || !userId || !userId.validPassword(user.pass)) {
                res.set('WWW-Authenticate', 'Basic realm="example"');
                return res.status(401).send();
            }
            return next();
        }
        );
    }
    else {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        return res.status(403).send();
    }
};