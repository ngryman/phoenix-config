export const HYPER_KEY = ['ctrl', 'alt', 'cmd']
export const HYPER_SHIFT_KEY = ['ctrl', 'alt', 'cmd', 'shift']

export const BIG_SCREEN_UID = '205D23C1-6EAB-7F40-9844-17E62EC88C9E'
export const MBP_SCREEN_UID = 'DE6B428C-DEA2-0D96-9A42-F8E16A13A47C'

export const WORKSPACES = {
  Zapier: {
    [BIG_SCREEN_UID]: {
      apps: {
        'Google Chrome': ['fullscreen', 0],
        Slack: ['fullscreen', 5000],
        'Visual Studio Code': ['fullscreen', 0]
      }
    },
    [MBP_SCREEN_UID]: {
      grid: [3, 1],
      apps: {
        Todoist: [0, 0, 1, 1, 0],
        Bear: [1, 0, 2, 1, 0],
        Spotify: ['fullscreen', 0]
      }
    }
  }
}
