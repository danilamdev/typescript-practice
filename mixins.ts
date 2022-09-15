function createLoogerClass() {
  return class MyloggerClass {
    private completeLog: string = ''

    log(str: string) {
      console.log(str)
      return this.completeLog += str + ' \n'
    }

    dumpLog() {
      return this.completeLog
    }
  }
}

const myLogger = createLoogerClass()
const logger2 = new myLogger()

logger2.log('probando')
logger2.log('una cosa')
console.log(logger2.dumpLog())

function CreateSimpleMemoryDB<T>() {
  return class SimpleMemoryDB {
    private db: Record<string, T> = {}

    set(id: string, value: T): void {
      this.db[id] = value
    }

    get(id: string): T {
      return this.db[id]
    }

    getObject(): Record<string, T> {
      return this.db
    }
  }
}

const StringData = CreateSimpleMemoryDB<string>()
const numberData = CreateSimpleMemoryDB<number>()

const DBstr = new StringData()
const DBnum = new numberData()

DBstr.set('1', 'comida')
console.log(DBstr.get('1'))

DBnum.set('otro', 777)
console.log(DBnum.get('otro'))

// ---------------------------------------------------


type Constructor<T> = new (...args: any[]) => T

function dumpable<T extends Constructor<{ getObject(): object }>>(Base: T) {
  return class Dumpable extends Base {
    dump() {

      // console.log(this.getObject())
    }
  }
}

const classes = dumpable(StringData)
const otra = new classes()

otra.set('testing', 'classes in typescript')

otra.dump()