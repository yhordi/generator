import { die, d4, d6, d10, d12, d20, d100 } from './dice'
const generate = (library) => {
  return library.first[d12()] + library.second[d12()] + library.third[d12()]
};


export default generate
