import './lib/additions'

import { HYPER_KEY, HYPER_SHIFT_KEY, MBP_SCREEN_UID, BIG_SCREEN_UID, VER_SCREEN_UID } from './lib/constants'
import * as actions from './actions'

Key.on('g', HYPER_KEY, actions.displayGrid)

Key.on('space', HYPER_KEY, actions.maximizeWindow)

Key.on('1', HYPER_KEY, _.partial(actions.moveToScreen, MBP_SCREEN_UID))
Key.on('2', HYPER_KEY, _.partial(actions.moveToScreen, BIG_SCREEN_UID))
Key.on('3', HYPER_KEY, _.partial(actions.moveToScreen, VER_SCREEN_UID))

Key.on('1', HYPER_SHIFT_KEY, _.partial(actions.openWorkspace, 'Zapier'))

// TODO: create an action out of those two

Key.on('left', HYPER_KEY, () => {
  const window = Window.focused()
  const frame = window.safeGridFrame()

  const nextFrame = {
    x: Math.max(0, frame.x - 1),
    y: frame.y,
    columns: frame.x === 0 ? Math.max(1, frame.columns - 1) : frame.columns,
    rows: frame.rows
  }

  window.setGridFrame(nextFrame)
})

Key.on('right', HYPER_KEY, () => {
  const window = Window.focused()
  const grid = window.grid()
  const frame = window.safeGridFrame()
  
  const nextFrame = {
    x: Math.min(grid.columns() - 1, frame.x + 1),
    y: frame.y,
    columns: frame.x + frame.columns === grid.columns() ? Math.max(1, frame.columns - 1) : frame.columns,
    rows: frame.rows
  }

  window.setGridFrame(nextFrame)
})

actions.displayPhoenix()
