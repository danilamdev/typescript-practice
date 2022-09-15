

type FlexibleDogInfo = {
  name: string
  [key: string]: string | number
}

const doggi: FlexibleDogInfo = {
  name: 'lilo',
  age: 8
}

interface DogInfo {
  name: string
  age: number
}

type Options<Type> = {
  [key in keyof Type]: boolean
}
type DogInfoOptions = Options<DogInfo>

// *----------------------------------------------------------

type Listeners<T> = {
  [key in keyof T as `on${Capitalize<string & key>}Change`]?: (value: T[key]) => void
}

type DogInfoListener = Listeners<DogInfo>

function ListentoObject<T>(obj: T, listeners: Listeners<T>): void {

}

const lilo: DogInfo = { age: 15, name: 'rata' }

ListentoObject(lilo, {
  onNameChange: (v: string) => { lilo.name = v }
})