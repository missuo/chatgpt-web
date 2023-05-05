/*
 * @Author: Vincent Young
 * @Date: 2023-05-06 00:18:13
 * @LastEditors: Vincent Young
 * @LastEditTime: 2023-05-06 00:19:22
 * @FilePath: /chatgpt-web/src/store/modules/user/helper.ts
 * @Telegram: https://t.me/missuo
 * 
 * Copyright © 2023 by Vincent, All Rights Reserved. 
 */
import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://s3.missuo.me/images/Nzz8m0.png',
      name: 'Vincent Young',
      description: 'Follow me on <a href="https://twitter.com/m1ssuo" class="text-blue-500" target="_blank" >Twitter</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
