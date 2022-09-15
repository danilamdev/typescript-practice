class Doggy {
  constructor(public readonly name: string, public age: number) {
    this.name = name
    this.age = age
  }
}

const lil = new Doggy('perro', 12)

console.log(lil.name)


class Doglist {
  private constructor() { }
  private doggies: Doggy[] = []

  static instance: Doglist = new Doglist()

  static addDog(dog: Doggy) {
    Doglist.instance.doggies.push(dog)
  }

  public getDoggies() {
    console.log(this.doggies)
    return this.doggies
  }
}

// Doglist.instance.addDog({ name: 'miperrito', age: 11 })
Doglist.addDog({ name: 'ratita', age: 7 })
Doglist.instance.getDoggies()

