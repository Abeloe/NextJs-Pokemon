export default function PokeCard (props) {
    console.log(props)
    return (
        <>
        {/* Prints the html of the data provided from the api via. props. */}
        {/* Props contains all the data. Desired data is accesed by "dotting" into the property name given on the page. */}
            <h1 className="name">Name: {props.pokemonname}</h1>
            <h2 className="height">Height: {props.height}</h2>
            <ul className="abilities">
            
            Ability name: 
                {props.abilities.map((abilityObject, index) => <li key={index}>{abilityObject}</li>)}
            </ul>
        </>
    )
}