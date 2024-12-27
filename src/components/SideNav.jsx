import { useState } from 'react'
import { first151Pokemon, getFullPokedexNumber } from '../utils'

export default function SideNav(props) {
    const { selectedPokemon, setSelectedPokemon, handleCloseMenu, hideSideMenu } = props
    const [searchValue, setSearchValue] = useState('')
    const filteredpokemon = first151Pokemon.filter((val, valIndex) => {
        if (getFullPokedexNumber(valIndex).includes(searchValue))
        { return true }
        if (val.toLowerCase().includes(searchValue.toLowerCase())) 
        { return true }
        return false
    })
 
    return (
        <nav className={' ' + (!hideSideMenu ? " open": " ")}>
            <div className={'header' + (!hideSideMenu ? " open": " ")}>
                <button onClick={handleCloseMenu} className='open-nav-button'>
                <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className='text-gradient'>Pokedex</h1> 
            </div>
            <input placeholder='Eg: 001 or Bulba...' value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }}/>
            {filteredpokemon.map((pokemon, pokemonIndex) => {
                const truePokedexNumber = first151Pokemon.indexOf(pokemon)
                return (
                    <button onClick={() => {
                        setSelectedPokemon(truePokedexNumber)
                        handleCloseMenu()
                    }} key={pokemonIndex} className={'nav-card ' + 
                    (pokemonIndex === selectedPokemon ? ' nav-card-selected' : ' ')}>
                        <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}