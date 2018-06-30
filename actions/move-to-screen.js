export default function moveToScreen(identifier) {
  const window = Window.focused()
  const screen = Screen.all().find(screen => screen.identifier() === identifier)

  if (screen) {
    window.moveToScreen(screen)
  }
}
