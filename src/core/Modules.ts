import * as Mods from 'saber-canvas'

export const Modules: any[] = Object.keys(Mods)
  .map(m => (Mods as any)[m]['name'] && (Mods as any)[m])
  .filter(m => m)

export const registerModule = (...modules: any[]) => Modules.push(...modules)
