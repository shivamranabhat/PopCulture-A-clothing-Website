// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
          integrity: "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer"
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/aos@2.3.1/dist/aos.css"
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js",
          integrity: "sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3",
          crossorigin: "anonymous",
          type: 'text/javascript',
          body: true
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js",
          integrity: "sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz",
          crossorigin: "anonymous",
          type: 'text/javascript',
          body: true
        },
        {
          type: 'text/javascript',
          src: "https://unpkg.com/aos@2.3.1/dist/aos.js"
        },
        {
          src: 'https://code.jquery.com/jquery-3.7.0.min.js',
          type: 'text/javascript'
        }
      ]
    }
  },
  css: [
    '~/assets/js/bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/site.css'
  ],
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
})

