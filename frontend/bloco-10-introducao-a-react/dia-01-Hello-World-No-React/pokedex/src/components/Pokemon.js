import PropTypes from 'prop-types'
import React from 'react'

class Pokemon extends React.Component {
  render(){
    const { name, type, averageWeight, image, moreInfo } = this.props.pokemonData;
    return (
      <section className='pokemonCard'>
        <div>
          <a href={moreInfo}><p>{name}</p></a>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt=""/>
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemonData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.object.isRequired,
    Image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired 
  })
}

export default Pokemon;