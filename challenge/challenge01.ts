import houses from '../houses.json'

interface House {
  name: string
  planets: string | string[]
}

interface HouseWithID {
  id: number
  name: string
  planets: string | string[]
}

function findHouses(houses: string): HouseWithID[]
function findHouses(houses: string, filter: (house: House) => boolean): HouseWithID[]

function findHouses(houses: House[]): HouseWithID[]
function findHouses(houses: House[], filter: (house: House) => boolean): HouseWithID[]

// implementation

function findHouses(input: string | House[], filterFun?: (house: House) => boolean): HouseWithID[] {
  const houses: House[] = typeof input === 'string'
    ? JSON.parse(input)
    : input

  const toReturn = filterFun
    ? houses.filter(filterFun)
    : houses

  return toReturn.map((house, i, arr) => {
    return {
      ...house,
      id: houses.indexOf(house)
    }
  }
  )
}

// console.log(findHouses(JSON.stringify(houses), ({name}) => name === 'Atreides'))
console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'))