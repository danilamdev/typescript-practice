function simpleState<Type>(initial:Type) : [() => Type, (s:Type) => void]{
  let value : Type = initial
  return [
    () => value,
    (s:Type) => { value = s}
  ]
}

const [value, setValue] = simpleState<string | null>(null)

interface Rank <RankItem>{
  item: RankItem
  ranking: number
}

function ranker<RankItem>( items : RankItem[], rank: (v : RankItem) => number ) : RankItem[] {
  const ranks : Rank<RankItem>[] = items.map(item => {
    return {
      item,
      ranking: rank(item)
    }
  })

  ranks.sort((a,b) => b.ranking - a.ranking)

  console.log('ranks', ranks)

  return ranks.map(rank => rank.item)
}

interface Pokemon {
  name: string
  hp: number
}

const pokemon : Pokemon[] = [
  {
    name: 'bulba',
    hp: 20
  },
  {
    name: 'mega',
    hp: 15
  },
  {
    name: 'tiny',
    hp: 7
  }
]


const rk = ranker(pokemon, ({hp}) => hp )

console.log(rk)