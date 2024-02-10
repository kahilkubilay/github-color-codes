import Logger from './logger.js'
import source from './asset/source.js'

export const getByLabel = (label) => {
  const formatLabel = label.toLowerCase().trim()

  if(!formatLabel) {
    return {}
  }

  const colorInformation = source.find((item) => item.label === formatLabel)

  if(!colorInformation) {
    console.info(Logger.notExists)
  }

  return colorInformation || {}
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

  if(labels.length <= 0) {
    console.info(Logger.notExists)
  }

  return labels.length > 0 ? labels : []
}
