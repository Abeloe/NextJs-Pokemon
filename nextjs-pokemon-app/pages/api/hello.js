// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
  
}


// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }