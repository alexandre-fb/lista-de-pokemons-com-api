import { getPokemonData } from "../../../services/pokemons"
import { useState, useEffect } from "react"

const ListOfCards = (props) => {

    const [ pokemonImage, setPokemonImage ] = useState()

    const name = props.name

    useEffect(()=>{
        async function fechPokemonData(){
            const pokemonApiData = await getPokemonData(name)
            const image = pokemonApiData.sprites.front_default
            setPokemonImage(image)
        }
        fechPokemonData()
    }, []
    )

    const image = pokemonImage

    return (
        <>
            

            {/* <div>
                <h1>{`Olá ${name}`}</h1>
                <img src={image} alt="img"></img>
            </div> */}
        </>
    )
}

export { ListOfCards }