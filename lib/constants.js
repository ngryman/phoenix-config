export const HYPER_KEY = ['ctrl', 'alt', 'cmd']
export const HYPER_SHIFT_KEY = ['ctrl', 'alt', 'cmd', 'shift']

export const MBP_SCREEN_UID = 'DE6B428C-DEA2-0D96-9A42-F8E16A13A47C'
export const BIG_SCREEN_UID = '4999CE90-BC08-3C6D-634A-51255016CD51'
export const VER_SCREEN_UID = '4ABCEC33-6977-054F-AACA-3B65B5140CA5'

export const WORKSPACES = {
  'Zapier': {
    [MBP_SCREEN_UID]: {
      apps: {
        Slack: ['fullscreen', 10000],
        Spotify: ['fullscreen', 0]
      }
    },
    [BIG_SCREEN_UID]: {
      apps: {
        'Visual Studio Code': ['fullscreen', 0],
        'Google Chrome': ['fullscreen', 0]
      }
    },
    [VER_SCREEN_UID]: {
      grid: [3, 3],
      apps: {
        FocusList: [0, 0, 1, 1, 0],
        Todoist: [1, 0, 2, 1, 0],
        Bear: [0, 1, 3, 2, 0],
        iTerm: ['fullscreen', 0]
      }
    }
  }
}
