class WindowAdditions {
  grid() {
    return this.screen().grid()
  }

  setGridFrame(frame) {
    this.grid().set(this, frame)
  }

  gridFrame() {
    return this.grid().get(this)
  }

  safeGridFrame() {
    if (!this.isInGrid()) {
      this.snapToGrid()
    }
    return this.gridFrame()
  }

  moveToScreen(screen) {
    const frame = screen.flippedVisibleFrame()
    this.setFrame(frame)
  }

  snapToGrid() {
    this.grid().snap(this)
  }

  isInGrid() {
    return Boolean(this.gridFrame())
  }

  isMaximized() {
    const frame = this.frame()
    const screenFrame = this.screen().flippedVisibleFrame()

    return (
      frame.x === screenFrame.x &&
      frame.y === screenFrame.y &&
      frame.width === screenFrame.width &&
      frame.height === screenFrame.height
    )
  }
}

Window.prototype = _.assign(Window.prototype, WindowAdditions.prototype)
