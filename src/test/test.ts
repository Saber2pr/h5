import { Component } from '../core/Component'
import { Launch } from '../core/Launch'
import { v2 } from 'saber-vector'

class Comp1 extends Component {
  constructor() {
    super()
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

class Comp2 extends Component {
  constructor() {
    super()
    this.children.push(new Comp1())
    this.node.setSize(50, 50).setColor('red')
  }

  update(dt: number) {
    console.log('update2', dt)
  }
}

Launch({
  root: new Comp2(),
  MaxWidth: 500,
  MaxHeight: 500,
  elementId: 'root',
  fps: 60
})
