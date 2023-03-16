import type { App } from 'vue'

export const version: string
export const install: (app: App) => void

export * from './basicComponent'
export * from './button'
export * from './dialog'
export * from './icon'
export * from './space'
export * from './toast'
export * from './zmComponent'

declare module 'vue' {
  export interface GlobalComponents {
    ZmBasicComponent: typeof import('@eyelet/ui')['_BasicComponentComponent']
    ZmButton: typeof import('@eyelet/ui')['_ButtonComponent']
    ZmDialog: typeof import('@eyelet/ui')['_DialogComponent']
    ZmIcon: typeof import('@eyelet/ui')['_IconComponent']
    ZmSpace: typeof import('@eyelet/ui')['_SpaceComponent']
    ZmToast: typeof import('@eyelet/ui')['_ToastComponent']
  }
}
