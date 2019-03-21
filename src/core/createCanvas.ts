import { schedule } from 'saber-interval'
import { walkAll } from 'saber-list'
import { Component, AppConfig } from './Component'
import * as sc from 'saber-canvas'
import { SaIOC, Injectable } from 'saber-ioc'
import { Modules } from './Modules'

let Canvas: sc.Canvas

const update = (Root: Component) => (dt: number) => {
  Canvas.clear()
  walkAll(Root, component => {
    component.node && Canvas.draw(component.node)
    component.update && component.update(dt)
  })
}

export const createCanvas = (config: AppConfig) => (...Constructors: any[]) => {
  Canvas = new sc.Canvas(config)
  Modules.forEach(mod => Injectable()(mod))
  const Root = new SaIOC.Container(...Constructors).pull<Component>()
  schedule(update(Root), { delta: 1000 / (config.fps || 60) })
}
