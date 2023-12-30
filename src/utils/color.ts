export const generateColor = (id: string) => {
  const colors = [
    '#0D47A1',
    '#33691E',
    '#880E4F',
    '#4A148C',
    '#004D40',
    '#E65100',
    '#3E2723',
    '#263238',
    '#006064',
    '#B71C1C'
  ]
  return colors[+id % 10]
}
