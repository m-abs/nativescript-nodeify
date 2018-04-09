var shims = require('./shims.json');

module.exports = {
    getAlias(appDir) {
        var aliases = {
          '~': appDir,
        };
        for (var key of Object.keys(shims)) {
            aliases[key + '$'] = shims[key];
        }
        aliases['inherits$'] = 'inherits/inherits_browser';
        return aliases;
    },
    get aliasFields() {
        return ["browser"];
    }
}
