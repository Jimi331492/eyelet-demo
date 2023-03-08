import type { App } from 'vue'

export const version: string
export const install: (app: App) => void

export * from './basicComponent'
export * from './button'
export * from './dialog'
export * from './space'
export * from './zmComponent'

declare module 'vue' {
  export interface GlobalComponents {
    ZmBasicComponent: typeof import('@eyelet/ui')['_BasicComponentComponent']
    ZmButton: typeof import('@eyelet/ui')['_ButtonComponent']
    ZmDialog: typeof import('@eyelet/ui')['_DialogComponent']
    ZmSpace: typeof import('@eyelet/ui')['_SpaceComponent']
  }
}
