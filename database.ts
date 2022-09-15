// interface Database {
//   get(id: string): string
//   set(id: string, value: string): void
// }

// interface Persistable {
//   saveDBtoString(): string
//   restoreDBfromString(storestring: string): void
// }

// class InMemoryDatabase implements Database {
//   protected db: Record<string, string> = {}

//   get(id: string): string {
//     return this.db[id]
//   }
//   set(id: string, value: string): void {
//     this.db[id] = value
//   }
// }

// // const myDb = new InMemoryDatabase()

// class PersistableDatabase extends InMemoryDatabase implements Persistable {

//   saveDBtoString(): string {
//     return JSON.stringify(this.db)
//   }
//   restoreDBfromString(storestring: string): void {
//     this.db = JSON.parse(storestring)
//   }
// }

// const myDb = new PersistableDatabase()
// const myDb2 = new PersistableDatabase()


// myDb.set('id1', 'dani')
// console.log(myDb.get('id1'))

// const savedDB = myDb.saveDBtoString()

// myDb.set('id1', 'nuevo')
// console.log(myDb.get('id1'))

// myDb2.restoreDBfromString(savedDB)
// console.log(myDb2.get('id1'))


