export default function displayGrid() {
  Screen.all().forEach(screen => {
    screen.grid().display()
  })
}
