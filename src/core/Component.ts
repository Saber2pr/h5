import { Node } from 'saber-canvas'

export interface IComponent {
  node: Node
  children: Component[]
  update(dt: number): void
}

export abstract class Component implements IComponent {
  constructor() {
    this.node = new Node(0, 0)
    this.children = []
  }
  node: Node
  children: Component[]
  update(dt: number) {}
}
