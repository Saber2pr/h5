import { Node, Config } from 'saber-canvas'

export interface AppConfig extends Config {
  fps?: number
}

export interface Component {
  node?: Node
  children?: Component[]
  update?(dt: number): void
}
