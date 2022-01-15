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
    plugins: ['~/plugins/maps.client']
    
}