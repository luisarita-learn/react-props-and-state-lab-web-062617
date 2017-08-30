import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    }
  }

  handleFindPetsClick = () => {
    let url = '/api/pets'
    let params = ''

    if (this.state.filters.type !== 'all') {
      params = `?type=${this.state.filters.type}`
    }

    fetch(`${url}${params}`)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  }

  handleAdoptPet = (adoptedPetID) => {
    this.setState({
      // Push the new id to the adoptedPers
      adoptedPets: [...this.state.adoptedPets, adoptedPetID],
    })
  }

  handleChangeFilter = (selectedType) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: selectedType,
      })
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.handleChangeFilter} onFindPetsClick={this.handleFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}