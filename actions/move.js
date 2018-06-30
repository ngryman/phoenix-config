const createAnchoredFrame = (window, anchor) => {
  const screenFrame = (window.screen ? window.screen() : Screen.main()).flippedVisibleFrame()
  const width = screenFrame.width
  const halfWidth = width / 2 | 0
  const height = screenFrame.height
  const halfHeight = height / 2 | 0

  const has = (anchor, str) => _.includes(anchor, str)

  return {
    x: has(anchor, 'right') ? halfWidth : 0,
    y: has(anchor, 'bottom') ? halfHeight : 0,
    width: has(anchor, 'left') || has('right') ? halfWidth : width,
    height: has(anchor, 'top') || has('bottom') ? halfHeight : height
  }
}

const move = (anchor, window = Window.focused()) => {
  const nextFrame = createAnchoredFrame(window, anchor)

  window.setFrame(nextFrame)
}
