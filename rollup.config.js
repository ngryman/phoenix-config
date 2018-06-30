import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'index.js',
  output: {
    format: 'iife',
    file: 'phoenix.js'
  },
  plugins: [
    resolve(),
    buble()
  ]
}
