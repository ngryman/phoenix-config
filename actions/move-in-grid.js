export default function moveInGrid(direction) {
  const window = Window.focused()
  const frame = window.safeGridFrame()
  const gframe = window.grid().frame()

  const isHorizontal = direction === 'left' || direction === 'right'
  const isVertical = direction === 'up' || direction === 'down'
  
  const nextFrame = {
    x: isHorizontal
      ? direction === 'left'
        ? Math.max(0, frame.x - 1)
        : Math.min(gframe.columns - 1, frame.x + 1)
      : frame.x,
    y: isVertical
      ? direction === 'up'
        ? Math.max(0, frame.y - 1)
        : Math.min(gframe.rows - 1, frame.y + 1)
      : frame.y,
    columns: isHorizontal
      ? direction === 'left'
        ? frame.x === 0 ? Math.max(1, frame.columns - 1) : frame.columns
        : frame.x + frame.columns === gframe.columns ? Math.max(1, frame.columns - 1) : frame.columns
      : frame.columns,
    rows: isVertical
      ? direction === 'up'
        ? frame.y === 0 ? Math.max(1, frame.rows - 1) : frame.rows
        : frame.y + frame.rows === gframe.rows ? Math.max(1, frame.rows - 1) : frame.rows
      : frame.rows
  }

  window.setGridFrame(nextFrame)
}
