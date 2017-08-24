module.exports = {
    plugins: ['react'],
    config: {
        exports: [
            './index.js',
            './scripts/index.js',
            './styles/index.css'
        ],
        modifyWebpackConfig: function(baseConfig) {
            // edit ykit's Webpack configs

            return baseConfig;
        }
    },
    hooks: {},
    commands: []
};
