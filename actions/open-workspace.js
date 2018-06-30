import { WORKSPACES } from '../lib/constants'
import displayGrid from './display-grid'

export default function openWorkspace(name) {
  const workspace = WORKSPACES[name]

  _.each(workspace, ({ grid, apps }, screendIdentifier) => {
    const screen = Screen.all().find(screen => screen.identifier() === screendIdentifier)

    // Set screen grid size
    if (grid) {
      screen.grid().resize(grid[0], grid[1])
    }

    // Launch apps
    if (apps) {
      _.each(apps, (layout, name) => {
        const app = App.launch(name)
        const delay = _.last(layout)
        
        setTimeout(() => {
          const appWindow = app.mainWindow()
          appWindow.moveToScreen(screen)

          if (_.first(layout) === 'fullscreen') {
            appWindow.setFullScreen(true)
            Phoenix.log(`Started ${name} in fullscreen`)
          }
          else {
            const frame = {
              x: layout[0],
              y: layout[1],
              columns: layout[2],
              rows: layout[3]
            }
            appWindow.setGridFrame(frame)
            Phoenix.log(`Started ${name} in ${JSON.stringify(frame)}`)
          }
        }, delay || 1000)
      })
    }
  })

  displayGrid()
}
