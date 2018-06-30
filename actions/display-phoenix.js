import { alert } from '../lib/utils'

export default function displayPhoenix() {
  alert({ icon: App.get('Phoenix').icon() })
}
