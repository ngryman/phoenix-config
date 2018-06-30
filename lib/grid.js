import { alert } from './utils'

export default class Grid {
  constructor(screen) {
    this.state = {
      screen,
      frames: new Map()
    }

    this.resize(3, 3, true)
  }

  resize(columns, rows, silent = false) {
    const screenFrame = this.screen().visibleFrame()

    this.state = _.assign(this.state, {
      columns,
      columnPixels: Math.floor(screenFrame.width / columns),
      rows,
      rowPixels: Math.floor(screenFrame.height / rows)
    })

    this.state.frames.clear()

    if (!silent) {
      this.display()
    }
  }

  set(window, gridFrame) {
    const screenFrame = this.screen().flippedVisibleFrame()
    
    const frame = {
      x: screenFrame.x + gridFrame.x * this.state.columnPixels,
      y: screenFrame.y + gridFrame.y * this.state.rowPixels,
      width: gridFrame.columns * this.state.columnPixels,
      height: gridFrame.rows * this.state.rowPixels,
    }

    window.setFrame(frame)
    this.state.frames.set(window.hash(), gridFrame)
  }

  get(window) {
    return this.state.frames.get(window.hash())
  }

  snap(window) {
    const screenFrame = this.screen().flippedVisibleFrame()
    const frame = window.frame()

    this.set(window, {
      x: Math.round((frame.x - screenFrame.x) / this.state.columnPixels),
      y: Math.round((frame.y - screenFrame.y) / this.state.rowPixels),
      columns: Math.round(frame.width / this.state.columnPixels),
      rows: Math.round(frame.height / this.state.rowPixels)
    })
  }

  remove(window) {
    this.state.frame.set(window.hash(), null)
  }

  display() {
    alert({
      text: `${this.columns()}x${this.rows()}`,
      screen: this.screen(),
      group: this.screen().hash()
    })
  }

  columns() {
    return this.state.columns
  }

  rows() {
    return this.state.rows
  }

  frame() {
    return {
      x: 0,
      y: 0,
      columns: this.columns(),
      rows: this.rows()
    }
  }

  screen() {
    return this.state.screen
  }
}
