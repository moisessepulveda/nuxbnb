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
    plugins: ['~/plugins/maps.client', "~/plugins/dataApi"],
    modules: ['@nuxtjs/axios'],
    buildModules: ["@nuxtjs/tailwindcss"],
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0
        }
    }
}
