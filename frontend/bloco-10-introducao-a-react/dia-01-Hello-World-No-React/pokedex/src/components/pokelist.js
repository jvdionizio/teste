import React from 'react'
import data from '../data'
import Pokemon from './Pokemon'

class Pokelist extends React.Component{
  render(){
    return(
      <article className='poke-list'>
        {
          data.map((pokemon) => {
            return <Pokemon pokemonData={pokemon} key={pokemon.id} />
          })
        }
      </article>
    )
  }
}

export default Pokelist