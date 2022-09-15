interface Database<T, K> {
  get(id: K): T
  set(id: K, value: T): void
}

interface Persistable {
  saveDBtoString(): string
  restoreDBfromString(storestring: string): void
}

type DBconstrainType = string | number | symbol

class InMemoryDatabase<T, K extends DBconstrainType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>

  get(id: K): T {
    return this.db[id]
  }
  set(id: K, value: T): void {
    this.db[id] = value
  }
}

// const myDb = new InMemoryDatabase()

class PersistableDatabase<T, K extends DBconstrainType> extends InMemoryDatabase<T, K> implements Persistable {

  saveDBtoString(): string {
    return JSON.stringify(this.db)
  }
  restoreDBfromString(storestring: string): void {
    this.db = JSON.parse(storestring)
  }
}

const myDb = new PersistableDatabase<number, string>()
const myDb2 = new PersistableDatabase()

myDb.set('id1', 15)
console.log(myDb.get('id1'))

const savedDB = myDb.saveDBtoString()

myDb.set('id1', 25)
console.log(myDb.get('id1'))

myDb2.restoreDBfromString(savedDB)
console.log(myDb2.get('id1'))


