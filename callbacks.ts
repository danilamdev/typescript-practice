function sprint(text: string, callback: (a: string) => void) : void {
  console.log(text)
  callback(text)
}

function fun(arg : string) : void {
  console.log(arg + ' ' + 'segundo')
}

sprint('buenas', fun)

// ---------------------------------

type mutationFun = (v : number) => number

function arrayMutate(numbers: number[], mutate:mutationFun) : number[] {
  return numbers.map(mutate)
}

const newMut : mutationFun = (n: number) : number => n * 100

console.log(arrayMutate([1,2,3], (n) => n * 10))

// ------------------------------------

function createAdd (first : number) : mutationFun {
  return (second : number) => first + second
}

const addone = createAdd(1)

console.log(addone(55))
