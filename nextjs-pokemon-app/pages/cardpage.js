import PokeCard from '../components/pokecard'


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
  const data = await res.json()
  
  // Pass data to the page via props
  return { props: { data } }
}

export default function CardPage({data}) {
  return (
    <>
      <PokeCard pokemonname={data.name} height={data.height} abilities={data.abilities}/>
    </>
  )
}