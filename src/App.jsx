import useLocalStorage from "use-local-storage";
import { NameInput } from './components/nameInput/nameInput'
import { SpaceCard } from './components/spaceCard/spaceCard'
import { Header } from './components/header/header'
import './main.css'

function App() {
  const [theme] = useLocalStorage("light");

  return (
    <div className='main-container' data-theme={theme}>
      <Header />
        <div className="main-wrapper">
          <NameInput />
          <SpaceCard />
        </div>
    </div>
  )
}

export default App
