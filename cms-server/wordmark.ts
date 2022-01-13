const { createCanvas } = require('canvas')
import faker from '@faker-js/faker'

const toTitleCase = (str: string) => {
  return str.replace(
    /\w\S*/g,
    (txt: string) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

const FONTS = [
  'Arial Black',
  'Tahoma',
  'Impact',
  'Didot',
  'Bradley Hand',
  'Luminari',
  'Comic Sans MS'
]

const FONT_COLORS = [
  '#D50000',
  '#880E4F',
  '#4A148C',
  '#311B92',
  '#1A237E',
  '#0D47A1',
  '#01579B',
  '#006064',
  '#004D40',
  '#1B5E20',
  '#33691E',
  '#F57F17',
  '#FF6F00',
]

export const createWordMark = (seed: number) => {
  faker.seed(seed)
  const height = 100 + faker.datatype.number(2) * 50
  const canvas = createCanvas(200, height)
  const ctx = canvas.getContext('2d')
  const colorName = toTitleCase(faker.commerce.color())
  const animalName = toTitleCase(faker.animal.type())
  const font = faker.helpers.randomize(FONTS)
  const fontColor = faker.helpers.randomize(FONT_COLORS)

  ctx.fillStyle = fontColor
  ctx.font = `bold 32px ${font}`
  ctx.textAlign = 'center'
  ctx.fillText(`${colorName} ${animalName}`, 100, (height/2 + 7), 200)
  return canvas.toBuffer('image/png', { compressionLevel: 3, filters: canvas.PNG_FILTER_NONE })
}
