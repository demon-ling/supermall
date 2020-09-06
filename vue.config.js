module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'views': '@/views',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
            }
        }
    }
}