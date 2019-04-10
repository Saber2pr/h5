# saber-h5

> a simple ioc framework for canvas-h5.

```bash
npm install saber-h5

git clone https://github.com/Saber2pr/saber-h5.git
```

# API

> 关于内置装饰器可以参考[saber-ioc](https://github.com/Saber2pr/saber-ioc)

> 关于 Canvas API 可以参考[saber-canvas](https://github.com/Saber2pr/saber-canvas)

> 关于 Vector2D API 可以参考[saber-vector](https://github.com/Saber2pr/saber-vector)

## Component 接口

所有需要渲染的组件必须实现此接口

### 属性

1. node 节点实例(参考 saber-canvas/Node)

2. children 子节点列表，只有加入到节点树的组件才会被渲染

3. update 每帧调用一次，参数为时间间隔

```ts
export interface Component {
  node?: Node
  children?: Component[]
  update?(dt: number): void
}
```

## createCanvas

构建并运行

```ts
createCanvas(AppConfig)(...Components)
```

# Examples

```ts
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
```

---

## start

```bash
npm install
```

```bash
npm start

npm run dev

```

> Author: saber2pr
