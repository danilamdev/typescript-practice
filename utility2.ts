type Name = {
  first: string
  last: string
}

function addFullName(name: Name): Name & { fullname: string } {
  return {
    ...name,
    fullname: `${name.first} ${name.last}`
  }
}

function permuteRows<T extends (...args: any[]) => any>(iteratorFun: T, data: Parameters<T>[0][]): ReturnType<T>[] {
  return data.map(iteratorFun)
}

console.log(permuteRows(addFullName, [{ first: 'daniel', last: 'lama' }, { first: 'sofi', last: 'machano' }]))

class PersonwithFullname {
  constructor(public name: Name) { }

  get fullname() {
    return `${this.name.first} ${this.name.last}`
  }
}

function createObjects<T extends new (...args: any[]) => any>(ConstructorType: T, data: ConstructorParameters<T>[0][]): InstanceType<T>[] {
  return data.map(item => new ConstructorType(item))
}

console.log(createObjects(PersonwithFullname, [{ first: 'rodrigo', last: 'lambarri' }]).map(obj => obj.fullname))

