import process from 'node:process'
import { name, version } from './package.json'

const { PRODUCTION, SITE_URL, DEV_URL, DEV_KEY, DEV_CERT } = process.env

export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/tailwindcss',  '@nuxtjs/seo', '@vueuse/nuxt', '@nuxt/icon'],
  devtools: { enabled: true },
  app: { head: { templateParams: { separator: '•' } } },
  site: {
    url: SITE_URL,
    name: 'Portfólio Pessoal',
    description: '----',
    identity: { type: 'Personal' },
  },
  devServer: {
    host: DEV_URL,
    https: DEV_KEY && DEV_CERT ? { key: DEV_KEY, cert: DEV_CERT } : undefined,
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-08-08',
  nitro: { experimental: { asyncContext: true } },
  cbpf: {
    name,
    version,
    production: PRODUCTION,
    url: SITE_URL,
  },
  linkChecker: { enabled: false },
})
