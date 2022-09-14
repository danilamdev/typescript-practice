function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType) : DataType[KeyType][] {
  return items.map(item => item[key])
}

const dogs =[
  {name: 'mimi', age : 12},
  {name: 'lg', age : 13},
]

console.log(pluck(dogs, 'name'))

interface BaseEvent {
  time: number
  user: string
}

interface EventMap {
  addToCart : BaseEvent & { quantity: number, productId: string}
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: Name, data:EventMap[Name]) : void {
  console.log([name, data])
}

sendEvent('checkout', {time: 15, user: 'usuario'} )