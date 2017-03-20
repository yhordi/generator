import { die, d4, d6, d10, d12, d20, d100 } from './dice'
const generate = (library) => {
  return library.first[d20()] + library.second[d20()] + library.third[d20()]
};


export default generate
