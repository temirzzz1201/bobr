export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig() as unknown as {
    public: { apiBase: string };
    apiSecret?: string;
  };

  nuxtApp.provide(
    "fetch",
    $fetch.create({
      baseURL: config.public.apiBase,
      headers: {
        Authorization: `Bearer 228df800d1899938f03d7cc472f096da99b8bcc05b844b4fc552831bf2c8a11c7575a744cb5490ec3217c302fab9b55367f84b7e4c204ae9520254aba873919b4e7ec2a1c9eb88eb0f36bebabaac27f45453a00da618ad3d7ebba578f091a15557e9bda35ebe7c808d9d89df7b0f495e3dab3783b1d8ff4f943baf2a6255acf9`,
      },

      onRequest({ options }) {
        console.log("options ", options);
      },

      onResponse({ response }): any {
        console.log("Response:", response);
        return response || [];
      },

      onRequestError({ error }) {
        console.error("Request error:", error);
      },

      onResponseError({ error }) {
        console.error("Response error:", error);
      },
    })
  );
});
