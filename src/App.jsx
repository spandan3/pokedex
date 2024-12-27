import { use } from "react"
import Header from "./components/Header"
import PokeCard from "./components/PokeCard"
import SideNav from "./components/SideNav"
import { useState } from "react"


function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [hideSideMenu, setHideSideMenu] = useState(true)

  function handleToggleMenu() {
    setHideSideMenu(!hideSideMenu)
  }

  function handleCloseMenu() {
    setHideSideMenu(true)
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} 
      handleCloseMenu={handleCloseMenu} hideSideMenu={hideSideMenu} />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App
