export default {
    components: true,
    head: {
        titleTemplate: "mastering nuxt %s",
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
    modules: ['@nuxtjs/axios'],
    buildModules: ["@nuxtjs/tailwindcss"],
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0
        }
    },
    publicRuntimeConfig: {
        auth:{
            cookieName: 'idToken',
            clientId: "186174742406-v6ir698hgjgp66vjb6rtr0v2p6aqru09.apps.googleusercontent.com"
        }
    },
    privateRuntimeConfig: {
        test2: process.env.TEST
    }
}
