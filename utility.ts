interface myuser {
  name: string
  id: number
  email?: string
  phone?: string
}
// interface myuserOptionals {
//   name?: string
//   id?: string
//   email?: string
// }

type userOptional = Partial<myuser>

type justemailandname = Pick<myuser, 'email' | 'name'>

type myuserwithoutId = Omit<myuser, 'id'>


const merge = (user: myuser, overrides: userOptional): myuser => {
  return {
    ...user,
    ...overrides
  }
}

const usuario: myuser = {
  id: 15,
  name: 'daniel',
  email: 'mimail'
}

merge(usuario, {})

const mapbyId = (users: myuser[]): Record<myuser['id'], myuserwithoutId> => {
  return users.reduce((a, v) => {
    const { id, ...rest } = v
    return {
      ...a,
      [v.id]: rest
    }
  }, {})
}

console.log(mapbyId([{ id: 1, name: 'gerar', email: 'mimail' }, { id: 2, name: 'dani' }]))

const tripwithOriginRef = { originUid: '123' }
const tripOriginWhole = { origin: { uuid: '4446', city: 'bsas', state: 'arg' } }

type Trip = typeof tripwithOriginRef | typeof tripOriginWhole

type TripwithOR = Extract<Trip, typeof tripwithOriginRef>
type TripOW = Extract<Trip, typeof tripOriginWhole>

const hasOR = (trip: Trip): trip is TripOW => 'origin' in trip

const result = [tripwithOriginRef, tripOriginWhole].filter(hasOR)

console.log('result', result)

