function add(a: number, b: number) : number {
  return a + b
}

export const addstr  = (a: string, ...b: string[]) => {
  const formater = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' });
  
  return a + formater.format(b)
}

const fetchdata = (url : string) : Promise<string> => Promise.resolve(`fetching data from ${url}`)


async function prom(url: string) : Promise<string> {
  const data : string = await fetchdata(url)
  console.log('data is?: ', data)
  return data
}

// console.log(fetchdata('url'))
console.log(prom('url'))

export default add