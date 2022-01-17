export default {
    components: true,
    head: {
        titleTemplate: "Master Bnb %s",
        htmlAttrs: {
            Lang: "es"
        },
        bodyAttrs: {
            class: ["my-style"]
        },
        meta: [{
            charset: "utf-8"
        }]
    },
    router: {
        prefetchLinks: false
    },
    plugins: ['~/plugins/maps.client', "~/plugins/dataApi", "~/plugins/auth.client"],
    modules: ['@nuxtjs/axios', '~/modules/auth', '~/modules/algolia'],
    buildModules: ["@nuxtjs/tailwindcss"],
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0
        }
    },
    publicRuntimeConfig: {
        auth: {
            cookieName: 'idToken',
            clientId: "186174742406-v6ir698hgjgp66vjb6rtr0v2p6aqru09.apps.googleusercontent.com"
        },
        algolia: {
            appId: "2V5C6VB6RO",
            apiKey: "2a38a702cc6fb60480795cdc265dfe48"
        }
    },
    privateRuntimeConfig: {
        test2: process.env.TEST,
        algolia: {
            appId: "2V5C6VB6RO",
            apiKey: '8e5e9a822d76fc18ef76b0912d291c45',
        }
    },
}
