
function myforEach<Types>( items : Types[], callback: (item: Types) => void) : void {
  items.reduce((acc, cur) => {
    callback(cur)
    return undefined
  }, undefined )
}

myforEach(['a','b','c'], (item) => console.log(item))

function myFilter<T>(items : T[], filterFunc: (v: T) => boolean) : T[] {
  return items.reduce((a , v: T) => {
    return filterFunc(v) 
      ? [...a, v] 
      : a
  }, [] as T[])
}

 console.log(myFilter([1,2,3,4,5,6,7,8], (v) => v > 2))

function myMap<T, K>( items: T[], mapFunc : (v: T) => K) : K[] {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[])
}

console.log(myMap([1,2,3,4,5], (v) => (v * 10).toString()))