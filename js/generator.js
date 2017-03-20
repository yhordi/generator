const generate = (library) => {
  return library.first[d10()] + library.second[d10()] + library.third[d10()]
};
const die = (sides) => Math.floor(Math.random() * sides)

const d10 = () => die(10)

export default generate
