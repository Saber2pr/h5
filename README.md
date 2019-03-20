# saber-h5

> a simple ioc framework for canvas-h5.

```bash
npm install saber-h5

git clone git remote add origin https://github.com/Saber2pr/saber-h5.git
```

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

Build({
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
