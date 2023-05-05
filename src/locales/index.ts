/*
 * @Author: Vincent Young
 * @Date: 2023-05-06 00:18:13
 * @LastEditors: Vincent Young
 * @LastEditTime: 2023-05-06 00:20:32
 * @FilePath: /chatgpt-web/src/locales/index.ts
 * @Telegram: https://t.me/missuo
 * 
 * Copyright © 2023 by Vincent, All Rights Reserved. 
 */
import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import enUS from './en-US'
import koKR from './ko-KR'
import zhCN from './zh-CN'
import zhTW from './zh-TW'
import ruRU from './ru-RU'
import { useAppStoreWithOut } from '@/store/modules/app'
import type { Language } from '@/store/modules/app/helper'

const appStore = useAppStoreWithOut()

const defaultLocale = appStore.language || 'en-US'

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  allowComposition: true,
  messages: {
    'en-US': enUS,
    'ko-KR': koKR,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'ru-RU': ruRU,
  },
})

export const t = i18n.global.t

export function setLocale(locale: Language) {
  i18n.global.locale = locale
}

export function setupI18n(app: App) {
  app.use(i18n)
}

export default i18n
