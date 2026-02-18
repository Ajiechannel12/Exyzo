export const KEYS = {
  pakasir: {
    project: "nexusevolution", // Slug Pakasir
    apiKey: "L63o5eYN0b2gYTU9bADDLX5LIUskWVX9", // Apikey Pakasir
    baseUrl: "https://app.pakasir.com/api",
  },

  pterodactyl: {
    domain: "https://privserv.my.id", // Domain Panel Lu
    apiKey: "ptla_DlfuOZ8KjHtKzsTNg0zD8brBhXGkv4FC33tRO1pRLMK", // Apikey Panel Lu (ptla)
    clientKey: "ptlc_86sqynTrVH4MgtZYSnEBlxQoa8Uqc0geWD6oGiWVodA", // Capikey Panel (ptlc
    egg: 15,
    nestId: 5,
    locationId: 1,
  },

  digitalocean: {
    apiKey: "dop_v1_bf3caaa02bb99f9b70b0d05fb27e7fd006eb797987e33a4a19a74c490abcfd19", // Apikey DigitalOcean
    region: "sgp1",
    image: "ubuntu-24-04-x64",
  },

  // MongoDB Atlas (backend only)
  mongodb: {
    uri: "mongodb+srv://Olaa:Prambanan_12@exyzo.osbb2ay.mongodb.net/?appName=Exyzo", // contoh: mongodb+srv://user:pass@cluster0.xxxx.mongodb.net/?appName=Cluster0
    dbName: "shop",
    ordersCollection: "orders",
  },

  // Telegram (backend only)
  telegram: {
    botToken: "8367373780:AAGdOqA73oa_laFnKCDNL9sjTVCk429T6kY",      // contoh: 123456:ABC-DEF...
    ownerChatId: "378722706",   // contoh: 123456789
    channelChatId: "-1003841676193", // contoh: -1001234567890 atau @usernamechannel
    websiteUrl: "https://marketplace.corexevolution.com", // untuk ditampilkan di struk
  },
};