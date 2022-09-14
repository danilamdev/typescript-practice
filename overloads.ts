interface Coord {
  x: number
  y: number
}

function parseObj (obj: Coord) : Coord {
  return {...obj}
}

function parseNum (x : number, y: number) : Coord {
  return {x, y}
}

function parseCoord(a: string) : Coord
function parseCoord(obj: Coord) : Coord;  
function parseCoord(x: number, y: number) : Coord;
function parseCoord(arg1 : unknown, arg2?: unknown) : Coord {
  let coord: Coord = { x: 0, y:0}

  if(typeof arg1 === 'string'){
    (arg1 as string).split(',').forEach(str => {
      let [key, value] = str.split(':')
      coord[key as 'x' | 'y'] = Number(value)
    })

    
  } else if(typeof arg1 === 'object'){
    coord = {...(arg1 as Coord)} 
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number
    }
  }
  return coord
}

console.log(parseCoord(10,20))
console.log(parseCoord({x:1, y:2}))
console.log(parseCoord('x:15,y:15'))
