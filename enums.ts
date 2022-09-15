const beforeload = 'beforeload'
const loading = 'loading'
const loaded = 'loaded'

const isLoading = (state: LoadingState) => state === LoadingState.loading


enum LoadingState {
  beforeload = 'beforeload',
  loading = 'loading',
  loaded = 'loaded'
}

console.log(isLoading(LoadingState.loading)) //no work

function sendEvent(name: 'checkout', data: { cartcount: number }): void
function sendEvent(name: 'addtoCart', data: { productId: number }): void
function sendEvent(name: string, data: unknown): void {
  console.log(`${name} ${JSON.stringify(data, null, 2)}`)
}

sendEvent("addtoCart", { productId: 15 })