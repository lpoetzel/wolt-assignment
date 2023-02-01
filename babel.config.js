module.exports = {
    plugins: [
        [
            '@babel/plugin-transform-react-jsx',
            '@babel/preset-env',
            {
                runtime: 'automatic',
            },
        ],
    ],
}
