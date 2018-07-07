import './lib/additions'

import { HYPER_KEY, HYPER_SHIFT_KEY, MBP_SCREEN_UID, BIG_SCREEN_UID, VER_SCREEN_UID } from './lib/constants'
import * as actions from './actions'

Key.on('g', HYPER_KEY, actions.displayGrid)

Key.on('space', HYPER_KEY, actions.toggleMaximize)
Key.on('space', HYPER_SHIFT_KEY, actions.toggleFullscreen)

Key.on('1', HYPER_KEY, _.partial(actions.moveToScreen, MBP_SCREEN_UID))
Key.on('2', HYPER_KEY, _.partial(actions.moveToScreen, BIG_SCREEN_UID))
Key.on('3', HYPER_KEY, _.partial(actions.moveToScreen, VER_SCREEN_UID))

Key.on('1', HYPER_SHIFT_KEY, _.partial(actions.openWorkspace, 'Achieve'))
Key.on('2', HYPER_SHIFT_KEY, _.partial(actions.openWorkspace, 'Zapier'))

Key.on('left', HYPER_KEY, _.partial(actions.moveInGrid, 'left'))
Key.on('right', HYPER_KEY, _.partial(actions.moveInGrid, 'right'))
Key.on('up', HYPER_KEY, _.partial(actions.moveInGrid, 'up'))
Key.on('down', HYPER_KEY, _.partial(actions.moveInGrid, 'down'))

Key.on('left', HYPER_SHIFT_KEY, _.partial(actions.resizeInGrid, 'narrower'))
Key.on('right', HYPER_SHIFT_KEY, _.partial(actions.resizeInGrid, 'wider'))
Key.on('up', HYPER_SHIFT_KEY, _.partial(actions.resizeInGrid, 'shorter'))
Key.on('down', HYPER_SHIFT_KEY, _.partial(actions.resizeInGrid, 'taller'))

actions.displayPhoenix()
