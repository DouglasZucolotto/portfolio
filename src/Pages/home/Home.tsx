import { Header } from '../../components/header/Header'
import { About } from './about/About'
import * as S from './style'

export const Home = () => {
  return (
    <>
    <S.Home>
      <Header />
      <About />
    </S.Home>
    </>
  )
}