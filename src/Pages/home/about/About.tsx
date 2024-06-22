import * as S from './style'
import MyPic from '../../../img/AvatarAndIcons.svg'
import { Chip } from '../../../components/chip/Chip'
import { LinkedIn, GitHub } from '@mui/icons-material'
import { Buttons } from '../../../components/buttons/Buttons'

export const About = () => {
  return (
    <S.About>
      <img src={MyPic}></img>
      <div className="main-container">
        <Chip />
        <h1 className="name">Douglas Zucolotto Gonçalves</h1>
        <div className="job">
          Front-End developer · Web designer{' '}
          <div>
            <LinkedIn fontSize="large" /> <GitHub fontSize="large" />
          </div>
        </div>
        <div className="presentation">
          👋 Me chamo Douglas Zucolotto Gonçalves, mas pode me chamar apenas de
          Douglas. Prazer!
        </div>
        <div className="about">
          <p>
            👨‍💻 Há 2 anos desenvolvendo e programando interfaces com JavaScript,
            React JS e Typescript.
          </p>
          <p>
            🎓 Graduado em Análise e Desenvolvimento de Sistemas e atualmente
            graduando em Ciência da Computação
          </p>
          <p>
            💡 Interesses em desenvolvimento Front-end com React e Web Design.
          </p>
        </div>
        <div className="better">
          🚀 Tentando ser um pouquinho melhor do que ontem todos dias.
        </div>
        <div className="buttons">
          <Buttons onClick={() => console.log()}>Vamos conversar</Buttons>
        </div>
      </div>
    </S.About>
  )
}
