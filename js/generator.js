import { die } from './dice'
import { libraries } from  './libraries'

const generateName = (libraryName) => {
  const library = libraries[libraryName]
  return getNameParts(library)
};

const getNameParts = (library) => {
  var name = ''
  for (let section of library) {
    let roll = die(section.length)
    name += section[roll]
  }
  return name
}

export { generateName }
