const activeModals = new Map()

function showModal({
  text = '',
  icon = null,
  duration = 1,
  screen = Screen.main()
}) {
  const parentFrame = screen.visibleFrame()
  const modal = Modal.build({
    appearance: 'dark',
    text,
    icon,
    duration: 1,
    origin: frame => ({
      x: parentFrame.x + (parentFrame.width / 2) - (frame.width / 2),
      y: parentFrame.y + (parentFrame.height / 2) - (frame.height / 2)
    })
  })
  modal.show()
  return modal
}

function closeModal(modal, group) {
  const activeModal = activeModals.get(group)
  if (activeModal) {
    activeModal.close()
  }
  activeModals.set(group, modal)    
}

export default function alert({ group, ...options } = {}) {
  const modal = showModal(options)
  if (group) {
    closeModal(modal, group)
  }
}
