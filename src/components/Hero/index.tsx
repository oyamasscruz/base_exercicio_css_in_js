import { Hero as CssHero, DivHero, TitleHero } from './styles'

const Hero = () => (
  <CssHero>
    <DivHero className="container">
      <TitleHero>
        As melhores vagas para tecnologia, design e artes visuais.
      </TitleHero>
    </DivHero>
  </CssHero>
)

export default Hero
