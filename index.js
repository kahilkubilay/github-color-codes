import { readFile } from 'fs/promises'
import Logger from './logger.js'

const source = JSON.parse(await readFile(new URL('./asset/colorSource.json', import.meta.url)))

export const getByLabel = (label) => {
  const formatLabel = label.toLowerCase().trim()

  if(!formatLabel) {
    return {}
  }

  const colorInformation = source.find((item) => item.label === formatLabel)

  return colorInformation || Logger.notExists
}

export const getLabelsByColorCode = (code) => {
  const formatCode = code.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "")

  if(!formatCode) {
    return []
  }

  const matchItems = source.filter((item) => {
    if(item.color === formatCode) {
      return item.label
    }
  }) 

  const labels = matchItems.map((item) => item.label)

  return labels.length > 0 ? labels : Logger.notExists
}
