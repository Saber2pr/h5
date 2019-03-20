import { schedule } from 'saber-interval'
import { walkAll } from 'saber-list'
import { IComponent } from './Component'
import * as sc from 'saber-canvas'

let Canvas: sc.Canvas

const update = (Root: IComponent) => (dt: number) => {
  Canvas.clear()
  walkAll(Root, component => {
    component.node && Canvas.draw(component.node)
    component.update && component.update(dt)
  })
}

export interface AppConfig extends sc.Config {
  root: IComponent
  fps?: number
}

export const Launch = (config: AppConfig) => {
  Canvas = new sc.Canvas(config)
  schedule(update(config.root), { delta: 1000 / (config.fps || 60) })
}
