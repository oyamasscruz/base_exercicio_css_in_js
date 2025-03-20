import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal from './styles'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
