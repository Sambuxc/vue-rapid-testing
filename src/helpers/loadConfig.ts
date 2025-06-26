import * as fs from 'fs'

export function loadConfig() {
  if (!fs.existsSync('./config.json')) return undefined
  return JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
}