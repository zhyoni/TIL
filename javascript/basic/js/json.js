let json = JSON.stringify(true);
console.log(json)

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birtDate: new Date(),
  // symbol: Symbol('id'),
  jump: () => {
    console.log(`${name} can jump!`)
  },
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`${key},${value}`);
  return key === 'name' ? 'hyoni' : value;

})
console.log(json)