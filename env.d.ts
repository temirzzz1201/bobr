// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NUXT_API_SECRET: string;
    NUXT_PUBLIC_TOKEN: string;
    NUXT_PUBLIC_STRAPI_TOKEN: string;
  }
}

declare module "nuxt/schema" {
  interface RuntimeConfig {
    strapiToken: string;
  }
  interface PublicRuntimeConfig {
    strapiUrl: string;
    strapiToken?: string;
  }
}
