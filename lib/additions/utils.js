const store = new Map()

export function getAdditionProp(instance, propName, defaultValue) {
  const hash = instance.hash()
  if (!store.has(hash)) {
    store.set(hash, new Map())
  }
  if (!store.get(hash).has(propName)) {
    store.get(hash).set(propName, defaultValue())
  }
  return store.get(hash).get(propName)
}
