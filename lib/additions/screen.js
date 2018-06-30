import Grid from '../grid'
import { getAdditionProp } from './utils'

class ScreenAdditions {
  grid() {
    return getAdditionProp(this, 'grid', () => new Grid(this))
  }
}

Screen.prototype = _.assign(Screen.prototype, ScreenAdditions.prototype)
