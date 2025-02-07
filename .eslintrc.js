/* @flow */

module.exports = {
    'extends': './node_modules/@krakenjs/grumbler-scripts/config/.eslintrc.js',

    'globals': {
        __sdk__:          true,
        __lebowski_pay__: true
    },
    'overrides': [ {
        'files': [ '**/*.test.js' ],
        'env':   {
            'jest': true
        },
        'globals': {
            'JestMockFn': false
        }
    } ]
};
