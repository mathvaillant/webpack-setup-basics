import { wizard } from './wizard'
import { barbarian } from './barbarian'

function getClasses() {
  console.log(wizard)
  console.log(barbarian)
}

export default getClasses

const obj = { a: 'alpha', b: 'bravo' }
const newObj = { ...obj, c: 'charlie' }
console.log(newObj)