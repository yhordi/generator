const generate = (library) => {
  console.log("library", library)
  return library.first[Math.floor(Math.random() *10)] + library.second[Math.floor(Math.random() *10)] + library.third[Math.floor(Math.random() *10)]
};
export default generate
