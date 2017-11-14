const timeGrunt = require('time-grunt');
const loadGruntConfig = require('load-grunt-config');

module.exports = grunt => {
    const data = {
        
    };

    timeGrunt(grunt);
    loadGruntConfig(grunt, {
        data,
    });
};
