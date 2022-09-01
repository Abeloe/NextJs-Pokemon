export default function PokeCard (props) {
    console.log(props)
    return (
        <>
        {/* Prints the html of the data provided from the api via. props. */}
        {/* Props contains all the data. Desired data is accesed by "dotting" into the property name given on the page. */}
            <h1 className="name">{props.pokemonname}</h1>
            <h2 className="height">{props.height}</h2>
            <ul className="abilities">
                { props.abilities.map((abilityObject) => <li>{abilityObject}</li>)}
            </ul>
        </>
    )
}