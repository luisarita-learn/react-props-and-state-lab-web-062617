import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props){
    super(props)

    this.props = props
    this.props.pets.map(pet => pet.isAdopted = true)
  }

  isAdopted(id){
    let found = this.props.adoptedPets.find(adoptedId => adoptedId === id)
    return found !== undefined
  }

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(function(pet, i){
          return <Pet pet={pet} key={i} onAdoptPet={this.props.onAdoptPet} isAdopted={this.isAdopted(pet.id)} />
        }.bind(this))}
      </div>
    );
  }
}

export default PetBrowser;