import { createCanvas } from '../core/Build'
import { Injectable, Bootstrap, Inject } from 'saber-ioc'
import { Node, v2 } from 'saber-canvas'
import { Component } from '../core/Component'

@Injectable()
class Comp1 implements Component {
  constructor(@Inject('Node') public node: Node) {
    this.node
      .setSize(50, 50)
      .setColor('blue')
      .setPosition(100, 100)
  }

  update() {
    console.log('update1')
    this.node.setPosition(this.node.getPosition().add(v2(10, 10)))
  }
}

@Bootstrap
@Injectable()
class Comp2 implements Component {
  constructor(public Comp1: Comp1, @Inject('Node') public node: Node) {
    this.children = [Comp1]
    this.node.setSize(50, 50).setColor('red')
  }
  children: Component[]

  update(dt: number) {
    console.log('update2', dt)
  }
}

createCanvas({
  MaxWidth: 500,
  MaxHeight: 500,
  elementId: 'root',
  fps: 2
})(Comp1, Comp2)
