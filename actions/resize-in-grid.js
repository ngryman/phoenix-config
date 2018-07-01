export default function resizeInGrid(direction) {
  const window = Window.focused()
  const frame = window.safeGridFrame()
  const gframe = window.grid().frame()

  const nextFrame = {
    x: frame.x,
    y: frame.y,
    columns: direction === 'narrower'
      ? Math.max(1, frame.columns - 1)
      : direction === 'wider'
        ? Math.min(gframe.columns, frame.columns + 1)
        : frame.columns,
    rows: direction === 'shorter'
      ? Math.max(1, frame.rows - 1)
      : direction === 'taller'
        ? Math.min(gframe.rows, frame.rows + 1)
        : frame.rows,
  }

  window.setGridFrame(nextFrame)
}
