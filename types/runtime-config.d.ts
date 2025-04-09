declare module "nuxt/schema" {
  interface RuntimeConfig {
    apiSecret: string; // Приватный токен (только сервер)
  }
  interface PublicRuntimeConfig {
    apiBase: string; // Публичный URL
  }
}
// Важно экспортировать что-нибудь
export {};
