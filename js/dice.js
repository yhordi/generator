const die = (sides) => Math.floor(Math.random() * sides)

const d4 = () => die(4)
const d6 = () => die(6)
const d10 = () => die(10)
const d12 = () => die(12)
const d20 = () => die(20)
const d100 = () => die(100)

export { die, d4, d6, d10, d12, d20, d100 }
