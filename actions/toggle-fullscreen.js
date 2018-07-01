export default function toggleFullscreen() {
  const window = Window.focused()
  window.setFullScreen(!window.isFullScreen())
}
